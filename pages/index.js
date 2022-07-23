import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomePage from '../components/Home';
import { useContext, useState } from 'react';
import { GlobalContext } from './_app';
import Cart from '../components/cart/Cart';
import Search from '../components/search/search';
import Calendar from '../components/calendar';
import Index from '../components/debounce';
import PostFilterForm from '../components/debounce/PostFilterForm';
import Step from '../components/Step';
import StepContext from '../components/Step/stepContext';
import TestCart from '../components/testCart';

export default function Home() {
  // const context = useContext(GlobalContext);
  // const [cart, setCart] = useState([]);
  // const handleCart = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  //   console.log(cart.indexOf(item));
  // };
  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;
  //   console.log(ind);
  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };
  return (
    <div className={styles.container}>
      {/* {context.show ? (
        <HomePage handleCart={handleCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )} */}
      <StepContext>
        <Step />
      </StepContext>
      {/* <TestCart /> */}
      {/* <Calendar /> */}
      {/* <Search /> */}
      {/* <Index /> */}
      {/* <PostFilterForm /> */}
    </div>
  );
}
