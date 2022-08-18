import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import List from './List';
import { useCart } from 'react-use-cart';
import Bills from './Bill';

export default function ById() {
  const [food, setFood] = useState([]);
  // const [cart, setCart] = useState([]);
  const { addItem, items } = useCart();
  useEffect(() => {
    listFood();
  }, []);
  const listFood = () => {
    async function Load() {
      const listFood = await axios.get('http://localhost:5000/ListFood');
      setFood(listFood.data);
    }
    Load();
  };
  // const handleCart = (data) => {
  //   if (cart.indexOf(data) !== -1) return;
  //   setCart([...cart, data]);
  // };
  // const handleChange = (data, d) => {
  //   const ind = cart.indexOf(data);
  //   const arr = cart;
  //   arr[ind].amount += d;
  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} ms={12} md={7}>
          <Grid container spacing={1}>
            {food?.map((data, i) => (
              <Grid item xs={6} sm={6} md={4} key={i}>
                <List
                  // handleCart={handleCart}
                  data={data}
                  items={items}
                  addItem={addItem}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} ms={12} md={5}>
          <Bills
          // cart={cart} setCart={setCart} handleChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  );
}
