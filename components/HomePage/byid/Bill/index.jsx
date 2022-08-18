import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cart from './cart/Cart';
import Bill from './bill';

export default function Bills({ cart, setCart, handleChange }) {
  const router = useRouter();
  const [updateCart, setUpdateCart] = useState([]);

  useEffect(() => {
    fetchCartsTable();
  }, [router.query.id]);

  // const [price, setPrice] = useState(0);
  // const [totalItem, setTotalItem] = useState(0);
  // const handleRemove = (id) => {
  //   const arr = cart.filter((data) => data.id !== id);
  //   const s = cart.map((data) => data.amount);
  //   setCart(arr);
  //   handlePrice();
  // };
  // const handlePrice = () => {
  //   let ans = 0;
  //   cart.map((data) => (ans += data.amount * data.price));
  //   setPrice(ans);
  // };
  // useEffect(() => {
  //   handleRemove();
  // }, []);
  // useEffect(() => {
  //   handlePrice();
  //   const s = cart.map((data) => data.amount);
  //   let a = 0;
  //   let i = 0;
  //   for (i = 0; i < s.length; i++) {
  //     a += s[i];
  //   }
  //   setTotalItem(a);
  // });
  const fetchCartsTable = () => {
    async function fetchCartsTables() {
      const cart = await axios.get('http://localhost:5000/table');
      setUpdateCart(cart.data);
    }
    fetchCartsTables();
  };
  // const handleSubmit = (data) => {
  //   const formData = { ...data };
  //   if (!formData.data.cart) {
  //     formData.data.cart = { items };
  //     formData.data.active = 0;
  //   } else {
  //     formData.data.cart.items = formData.data.cart.items.concat(items);
  //   }
  //   axios
  //     .put(`http://localhost:5000/table/${data.id}`, formData)
  //     .then(function (response) {
  //       alert('đơn hàng Hoàn thành');
  //       emptyCart();
  //       fetchCartsTable();
  //     })
  //     .catch(function (error) {
  //       alert('Đã có lỗi xảy ra. Vui lòng thử lại');
  //     });
  // };
  return (
    <div className={styles.Bill}>
      <Cart updateCart={updateCart} router={router} />
      <Bill updateCart={updateCart} router={router} />
    </div>
  );
}
