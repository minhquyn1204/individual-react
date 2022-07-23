import React from 'react';
import styles from './index.module.scss';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Card({ item, handleCart }) {
  return (
    <div className={styles.doctorInformation}>
      <div className={styles.image}>
        <img src={item.img} alt='' />
      </div>
      <div className={styles.introduce}>
        <span>{item.title}</span>
        <br></br>
        <span>{item.time}</span>
        <br></br>
        <span>{item.price}</span>
      </div>
      <Button onClick={() => handleCart(item)}>Add to Cart</Button>
    </div>
  );
}
