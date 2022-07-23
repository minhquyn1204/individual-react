import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Desc from './desc/desc';
import Service from './services/service';

export default function Page2() {
  const [cart, setCart] = useState([]);
  // const isDark = localStorage.getItem('cart');
  // const x = JSON.parse(isDark);
  // console.log('cart', x);
  // useEffect(() => {}, [cart]);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          {/* <Desc cart={cart} setCart={setCart} /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Service cart={cart} setCart={setCart} />
        </Grid>
      </Grid>
    </div>
  );
}
