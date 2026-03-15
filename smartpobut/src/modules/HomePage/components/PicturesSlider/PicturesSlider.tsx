import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cl from 'classnames';

import 'swiper/css';
import 'swiper/css/pagination';

import { ArrowLeftIcon } from '../../../../components/Icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../../components/Icons/ArrowRightIcon';
import styles from './PicturesSlider.module.scss';

const slides = [
  {
    id: 1,
    desktopImg: 'img/fridges-banner.jpg',
    mobileImg: 'img/fridges-banner.jpg',
    alt: 'Smart fridge banner',
  },
  {
    id: 2,
    desktopImg: 'img/wash-mach.jpg',
    mobileImg: 'img/wash-mach.jpg',
    alt: 'Smart washing machine banner',
  },
  {
    id: 3,
    desktopImg: 'img/rob-vac.webp',
    mobileImg: 'img/rob-vac.webp',
    alt: 'Smart robots vacuums',
  },
];

export const PicturesSlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <div className={styles.picturesSliderWrapper}>
      <button
        className={cl(styles.navButton, styles.navPrev)}
        ref={node => setPrevEl(node)}
      >
        <ArrowLeftIcon />
      </button>

      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={{
            prevEl,
            nextEl,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <picture>
                <source media="(min-width: 640px)" srcSet={slide.desktopImg} />

                <img
                  src={slide.mobileImg}
                  alt={slide.alt}
                  className={styles.bannerImage}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className={cl(styles.navButton, styles.navNext)}
        ref={node => setNextEl(node)}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};
