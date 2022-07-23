import { Button, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';

export default function Card() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const cart = await axios.get('http://localhost:5000/Menuselect');
      setCart(cart.data);
    }
    fetchData();
  }, []);
  const { addItem } = useCart();
  return (
    <div>
      <Grid container>
        {cart?.map((data, index) => (
          <Grid item xs={6} sm={4} md={3} key={data.data.id}>
            <p>Tên:{data.data.name}</p> <p>giá:{data.data.price}</p>
            <Button onClick={() => addItem(data.data)}>Add to cart</Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
