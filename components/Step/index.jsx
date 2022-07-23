import React, { useContext } from 'react';
import styles from './index.module.scss';
import Page from './page';
import { multiStepContext } from './stepContext';
import Steps from './Steps';
import { CartProvider } from 'react-use-cart';

export default function Step() {
  return (
    <CartProvider>
      <div className={styles.step}>
        <div>
          <Steps />
        </div>
        <div>
          <Page />
        </div>
      </div>
    </CartProvider>
  );
}
