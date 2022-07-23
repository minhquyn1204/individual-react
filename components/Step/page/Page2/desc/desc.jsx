import React, { useEffect, useState } from 'react';
import styles from './desc.module.scss';
import { AiFillDelete } from 'react-icons/ai';
import { Button } from '@mui/material';

export default function Desc({ cart, setCart }) {
  const [price, setPrice] = useState(0);
  // const handleChange = (data, d) => {
  //   const ind = cart.indexOf(data);
  //   const arr = cart;
  //   arr[ind].data.amount += d;
  //   if (arr[ind].data.amount === 0) arr[ind].data.amount = 1;
  //   setCart([...arr]);
  // };

  const handleRemove = (id) => {
    const arr = cart.filter((data) => data.id !== id);
    setCart(arr);
    handlePrice();
  };
  // const handleRemoveItem = (id) => {
  //   const arr = localStorage.removeItem('cart');
  //   setCart(arr);
  //   handlePrice();
  // };
  const handlePrice = () => {
    let ans = 0;
    cart?.map((data) => (ans += data.data.amount * data.data.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div className={styles.Cart}>
      <div className={styles.title_pgae}>Dịch Vụ đã Chọn ({cart.length})</div>
      <div className={styles.listCart}>
        {cart?.map((data, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.infor}>
              <h5>{data.data.name}</h5>
              <span>{data.data.price}$</span>
            </div>
            <div className={styles.delete}>
              <Button onClick={() => handleRemove(data.id)}>
                <AiFillDelete />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h5>Tổng cộng:</h5>
        <span>{price} $</span>
      </div>
    </div>
  );
}
