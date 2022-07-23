import React, { useEffect, useState } from 'react';
import styles from './desc.module.scss';
import { AiFillDelete } from 'react-icons/ai';
import { Button } from '@mui/material';
import { useCart } from 'react-use-cart';

export default function Desc() {
  const { isEmpty, totalItems, items, cartTotal, removeItem, emptyCart } =
    useCart();
  const handle = (id) => {
    removeItem(id);
  };
  return (
    <div className={styles.Cart}>
      <div className={styles.title_pgae}>
        <div className={styles.title}> Dịch Vụ đã Chọn ({totalItems})</div>
        <div className={styles.clearAll}>
          <Button onClick={() => emptyCart()}>Xoá tất cả</Button>
        </div>
      </div>
      <div className={styles.listCart}>
        {items?.map((data, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.infor}>
              <h5>{data.name}</h5>
              <span>{data.price}$</span>
            </div>
            <div className={styles.delete}>
              <Button onClick={() => handle(data.id)}>
                <AiFillDelete />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h5>Tổng cộng:</h5>
        <span> {cartTotal}$</span>
      </div>
    </div>
  );
}
