import React from 'react';
import { CloseIcon } from '../../../../components/Icons/CloseIcon';

import styles from './CartModuleWindow.module.scss';

export const CartModuleWindow = () => {
  const [checkout, setCheckout] = useState(false);


  const confirm = () => {

  }

  return (
    <div className={styles.window}>
      <div className={styles.topBar}>
        <h1>Checkout</h1>

        <span className={styles.icon}>
          <CloseIcon />
        </span>
      </div>

      <p>Checkout is not implemented yet. Do you want to clear the Cart?</p>

      <button>Checkout</button>
    </div>
  );
};
