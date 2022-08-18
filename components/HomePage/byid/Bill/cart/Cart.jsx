import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import styles from './Cart.module.scss';
import axios from 'axios';

export default function Cart({ updateCart, router }) {
  const [open, setOpen] = useState(false);
  const {
    updateItemQuantity,
    totalItems,
    items,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();
  const handleSubmit = (data) => {
    const formData = { ...data };
    // console.log('formData', data);

    if (!formData.data.cart) {
      formData.data.cart = { items };
      formData.data.active = 0;
    } else {
      const prevDataFilter = formData.data.cart.items.reduce((prev, curr) => {
        const exist = items.find((it) => it.id === curr.id);
        if (exist) {
          const out = {
            ...curr,
            quantity: Number(curr.quantity) + Number(exist.quantity),
          };
          return prev.concat(out);
        } else {
          return prev.concat(curr);
        }
      }, []);
      // kiểm tra đã tồn tại
      const itemsFilter = items.filter((item) => {
        const exist = formData.data.cart.items.find((it) => it.id === item.id);
        if (!exist) {
          return item;
        }
      });
      const result = prevDataFilter.concat(itemsFilter);

      formData.data.cart.items = result;
    }
    axios
      .put(`http://localhost:5000/table/${data.id}`, formData)
      .then(function (response) {
        emptyCart();
      })
      .catch(function (error) {
        alert('Đã có lỗi xảy ra. Vui lòng thử lại');
      });
  };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  return (
    <div className={styles.Cart}>
      <h5>Giỏ Hàng</h5>
      {/* <>
        <OtherCart open={open} setOpen={setOpen} />
        <Button onClick={handleOpen}>Món thời giá</Button>
      </> */}
      <div className={styles.item}>
        {items.map((data, index) => (
          <Grid container key={index} className={styles.Grid1}>
            <Grid item xs={1}>
              {index + 1 + `)`}
            </Grid>
            <Grid item xs={4}>
              {data.name}
            </Grid>
            <Grid item xs={5}>
              <Button
                onClick={() => updateItemQuantity(data.id, data.quantity - 1)}
              >
                -
              </Button>
              {data.quantity}
              <Button
                onClick={() => updateItemQuantity(data.id, data.quantity + 1)}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button onClick={() => removeItem(data.id)}>Xoá</Button>
            </Grid>
          </Grid>
        ))}
      </div>
      {totalItems > 0 ? (
        <>
          <Grid container className={styles.Grid2}>
            <Grid item xs={7}>
              Tổng Cộng
            </Grid>
            <Grid item xs={3}>
              {totalItems}
            </Grid>
            <Grid item xs={1}>
              {cartTotal}
            </Grid>
          </Grid>
          {updateCart
            ?.filter((item) => item.id === Number(router.query.id))
            .map((data) => (
              <Button
                key={data.id}
                sx={{
                  width: '100%',
                  mt: 1,
                  color: '#fff',
                  bgcolor: '#3366FF',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: '#3366CC',
                  },
                }}
                onClick={() => handleSubmit(data)}
              >
                Hoàn tất
              </Button>
            ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
