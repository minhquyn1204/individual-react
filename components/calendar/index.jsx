import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import Form from './Form';
import styles from './index.module.scss';
import List from './list';

export default function Calendar() {
  const [cart, setCart] = useState([]);
  const handleCart = (data) => {
    if (cart.indexOf(data) !== -1) return;

    setCart([...cart, data]);
  };
  const handleChange = (data, d) => {
    const ind = cart.indexOf(data);
    const arr = cart;
    arr[ind].data.amount += d;
    if (arr[ind].data.amount === 0) arr[ind].data.amount = 1;
    setCart([...arr]);
  };

  return (
    <div className={styles.Calendar}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Form cart={cart} setCart={setCart} handleChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <List handleCart={handleCart} />
        </Grid>
      </Grid>
    </div>
  );
}
