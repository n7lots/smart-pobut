import React from 'react';
import { CategoryItem } from './components/CategoryItem';

import styles from './ShopByCategory.module.scss';

type Props = {
  fridgesCount: number;
  washingMachinesCount: number;
  robotVacuumsCount: number;
};

export const ShopByCategory: React.FC<Props> = ({
  fridgesCount,
  washingMachinesCount,
  robotVacuumsCount,
}) => {
  const categories = [
    {
      id: 1,
      categoryName: 'Fridges',
      countOfModels: fridgesCount,
      link: 'fridges',
      image: 'img/fridges-category.png',
      bgColor: '#363636',
    },
    {
      id: 2,
      categoryName: 'Washing machines',
      countOfModels: washingMachinesCount,
      link: 'washing-machines',
      image: 'img/washing-machines.jpg',
      bgColor: '#363636',
    },
    {
      id: 3,
      categoryName: 'Robot vacuums',
      countOfModels: robotVacuumsCount,
      link: 'robot-vacuums',
      image: 'img/robots-vacuums.webp',
      bgColor: '#363636',
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Shop by category</h2>

      <div className={styles.grid}>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            categoryName={category.categoryName}
            countOfModels={category.countOfModels}
            link={category.link}
            image={category.image}
            bgColor={category.bgColor}
          />
        ))}
      </div>
    </section>
  );
};
