import React from 'react';

import { ProductDetail } from '../../../types/Product';

import styles from './ProductTechSpecs.module.scss';

type Props = {
  device: ProductDetail;
};

export const ProductTechSpecs: React.FC<Props> = ({ device }) => {
  return (
    <div className={styles.techSpecsBlock}>
      <div className={styles.titleBlock}>
        <h3>Tech specs</h3>
      </div>

      <div className={styles.specsList}>
        <div className={styles.specRow}>
          <span className={styles.techSpecName}>Country</span>
          <span className={styles.techSpecValue}>{device.country}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.techSpecName}>Dimensions</span>
          <span className={styles.techSpecValue}>{device.dimensions}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.techSpecName}>Warranty</span>
          <span className={styles.techSpecValue}>{device.warranty}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.techSpecName}>Power</span>
          <span className={styles.techSpecValue}>{device.power}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.techSpecName}>Capacity / Size</span>
          <span className={styles.techSpecValue}>{device.size}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.techSpecName}>Weight</span>
          <span className={styles.techSpecValue}>{device.weight}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.techSpecName}>Noise Level</span>
          <span className={styles.techSpecValue}>{device.noiseLevel}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.techSpecName}>Features</span>
          <span className={styles.techSpecValue}>
            {device.features.join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
};
