import React, { useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

export default function SortBestSeller() {
  const [activeSale, setActiveSale] = useState(false);
  return (
    <div
      className={clsx(styles.bestSeller, {
        [styles.active]: activeSale === true,
      })}
      onClick={() => setActiveSale(true)}
    >
      Bán Chạy
    </div>
  );
}
