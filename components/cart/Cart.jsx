import React, { useEffect, useState } from 'react';
import styles from './cart.module.scss';
import { Button } from '@mui/material';

export default function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div className={styles.cart}>
      {cart.map((item, index) => (
        <div className={styles.cart_box} key={index.id}>
          <div className={styles.cart_img}>
            <img src={item.img} alt='' />
            <p>{item.title}</p>
          </div>
          <div>
            <Button onClick={() => handleChange(item, 1)}>+</Button>
            <Button>{item.amount}</Button>
            <Button onClick={() => handleChange(item, -1)}>-</Button>
          </div>
          <div>
            <span>{item.price}</span>
            <Button onClick={() => handleRemove(item.id)}>Remove</Button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price of your Cart</span>
        <span>VND - {price}</span>
      </div>
    </div>
  );
}
