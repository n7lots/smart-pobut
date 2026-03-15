import React, { useState, useRef, useEffect } from 'react';
import cl from 'classnames';
import { Product } from '../../types/Product';
import styles from './AiAssistant.module.scss';
import { ChatIcon } from '../Icons/ChatIcon';

type Message = {
  role: 'user' | 'model';
  text: string;
};

type Props = {
  products: Product[];
};

export const AiAssistant: React.FC<Props> = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: 'Вітаю! Я AI-помічник магазину SmartPobut. Підказати щось по техніці?',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) {
      return;
    }

    const userMessage: Message = { role: 'user', text: input };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemInstruction = `Ти — привітний AI-консультант інтернет-магазину "SmartPobut".
      Твоя задача — допомагати клієнтам вибирати холодильники, пральні машини та роботи-пилососи.
      Рекомендуй товари ВИКЛЮЧНО з цього каталогу: ${JSON.stringify(products)}.
      Будь лаконічним, ввічливим, ціни вказуй зі знаком '$'.
      Спілкуйся українською мовою, але якщо користувач звертається іншою мовою — підлаштовуйся під нього.`;

      const apiHistory = [...messages, userMessage]
        .filter((msg, index) => !(index === 0 && msg.role === 'model'))
        .map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }],
        }));

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();

      if (!apiKey) {
        console.error('API ключ не знайдено! Перевір файл .env');
        throw new Error('No API Key');
      }

      console.log('Проверка ключа:', apiKey ? 'Ключ есть (длина ' + apiKey.length + ')' : 'Ключа НЕТ');

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemInstruction }] },
            contents: apiHistory,
          }),
        },
      );

      if (!response.ok) {
        const errorDetails = await response.json();

        console.error('Деталі помилки від Google API:', errorDetails);
        throw new Error(`Помилка API: ${response.status}`);
      }

      const data = await response.json();

      if (data.candidates && data.candidates[0].content.parts[0].text) {
        const botReply = data.candidates[0].content.parts[0].text;

        setMessages(prev => [...prev, { role: 'model', text: botReply }]);
      } else {
        throw new Error('Invalid response form format');
      }
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'model',
          text: 'Вибачте, мій штучний мозок зараз перезавантажується. Спробуйте трохи пізніше!',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={styles.assistantWrapper}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>SmartPobut AI</h3>
            <button onClick={toggleChat} className={styles.closeBtn}>
              ×
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cl(styles.messageBubble, {
                  [styles.userMessage]: msg.role === 'user',
                  [styles.botMessage]: msg.role === 'model',
                })}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && <div className={styles.loading}>AI думає...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Напишіть своє питання..."
            />
            <button onClick={sendMessage} disabled={isLoading || !input.trim()}>
              Відправити
            </button>
          </div>
        </div>
      )}

      <button className={styles.floatingBtn} onClick={toggleChat}>
        <ChatIcon />
      </button>
    </div>
  );
};
