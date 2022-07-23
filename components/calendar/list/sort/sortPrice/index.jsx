import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { AiOutlineDown, AiOutlineCheck } from 'react-icons/ai';
import clsx from 'clsx';

export default function SortPrice({ tab, setMockIndex }) {
  const [price, setPrice] = useState('Giá');
  const [index, setIndex] = useState(0);

  const handleClickPrice = (index) => {
    setIndex(index);
  };
  setMockIndex(index);
  useEffect(() => {
    if (tab !== 3) {
      setPrice('Giá');
      setIndex(0);
    } else if (index === 1) {
      setPrice('Giá: Thấp đến cao');
    } else if (index === 2) {
      setPrice('Giá: Cao đến thấp ');
    } else {
      setIndex(1);
    }
  }, [tab, index]);
  return (
    <div>
      <div className={styles.price}>
        <div
          className={clsx(styles.select, {
            [styles.active]: index === 1 || index === 2,
          })}
        >
          <div>{price}</div>
          <div>
            <AiOutlineDown />
          </div>
        </div>
        <div className={styles.item}>
          <div
            onClick={() => handleClickPrice(1)}
            className={clsx(styles.noActive, {
              [styles.active]: index === 1,
            })}
          >
            <p>Giá: Thấp đến cao</p>
            <div className={styles.icons}>
              <AiOutlineCheck />
            </div>
          </div>
          <div
            onClick={() => handleClickPrice(2)}
            className={clsx(styles.noActive, {
              [styles.active]: index === 2,
            })}
          >
            <p>Giá: Cao đến thấp</p>
            <div className={styles.icons}>
              <AiOutlineCheck />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
