# SMART POBUT

A modern, fully responsive e-commerce web application for purchasing consumer electronics (fridges, washers and vacuums). Built as a diplom project for a software development program.


## 🚀 Live Demo

[View Live Project on Vercel](https://smart-pobut.vercel.app/)

## 🛠 Tech Stack
* **Frontend Framework:** React 18
* **Language:** TypeScript, JavaScript
* **Build Tool:** Vite
* **Styling:** SCSS (CSS Modules) + BEM methodology concepts
* **Routing:** React Router v6
* **UI Components:** Swiper.js (for custom product and hero sliders)
* **Code Quality:** ESLint, Stylelint, Prettier


## ✨ Key Features

* **Responsive Design:** Flawless layout adaptation across Mobile, Tablet, and Desktop resolutions using CSS Grid and Flexbox, keeping a "rubber" approach for components like `CategoryItem`.
* **Dynamic Data Fetching:** Asynchronous data loading from a simulated REST API (`products.json`) using custom fetch clients and React hooks (`useState`, `useEffect`).
* **Advanced Sliders:** Custom-styled Swiper instances for "Brand new models" and "Hot prices" sections, featuring custom navigation buttons with automated disabled states.
* **Dynamic Sorting & Filtering:** Real-time client-side sorting algorithms to display the newest gadgets by release year and highlight products with the highest discount margin.
* **AI Consultant Chatbot:** Integrated an intelligent AI-powered assistant to provide personalized customer support, answer product-related queries, and enhance the overall shopping experience.
* **Scalable Architecture:** Component-driven folder structure (e.g., encapsulating local components like `ShopByCategory` alongside their specific SCSS modules).


## 📂 Project Architecture Highlights

* The project adheres to a strict modular architecture to ensure maintainability:
* **src/modules/** - Contains distinct page sections (e.g., HomePage) with their own localized components and styles.
* **src/components/** - Shared UI components used across multiple pages (e.g., ProductCard, ProductsSlider).
* **src/assets/styles/** - Global SCSS variables, typography configurations, and adaptive mixins for consistent styling.
* **src/utils/** - Helper functions, including the fetchClient for API requests.
