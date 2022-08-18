import { Button, Grid, TextField, debounce } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './bill.module.scss';
import axios from 'axios';

export default function AdminBill({
  updateCart,
  router,
  totalPitem,
  totalQuantity,
}) {
  const [totalPrice, setTotalPrice] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);
  const [idEdit, setIdEdit] = useState(0);
  const [formValues, setFormValues] = useState({
    name: '',
    quantity: '',
    itemTotal: '  ',
  });
  useEffect(() => {
    setFormValues(
      updateCart
        .find((data) => data?.id === Number(router.query.id))
        ?.data.cart?.items.map((i) => i)
        .find((e) => e.id === idEdit)
    );
  }, [idEdit]);

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (name !== 'name') {
      value = Number(value);
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleEdit = (data, e) => {
    setIdEdit(e.id);
  };

  const handleEdit1 = async (data) => {
    const formData = { ...data };
    const curr = formData.data.cart.items.filter((i) => i.id !== idEdit);
    if (formData.data.cart.items.find((data) => data.id === idEdit)) {
      formData.data.cart.items = [...curr, formValues];
    } else {
      return formData;
    }
    axios
      .put(`http://localhost:5000/table/${data.id}`, formData)
      .then(function (response) {
        alert('thanhf cong');
      })
      .catch(function (error) {
        alert('Đã có lỗi xảy ra. Vui lòng thử lại');
      });
    setIdEdit(0);
  };

  const handleRemove = (data, e) => {
    setIdEdit(e.id);
    const formData = { ...data };
    formData.data.cart.items = formData.data.cart.items.filter(
      (it) => it.id !== e.id
    );
    axios
      .put(`http://localhost:5000/table/${data.id}`, formData)
      .then((res) => {
        alert('xoá thành công');
        updateCart;
      })
      .catch((err) => {
        alert('xoá thất bại');
      });
  };
  return (
    <div className={styles.Bill}>
      <h5>Hoá đơn</h5>
      {updateCart
        ?.filter((item) => item.id === Number(router.query.id))
        .map((data, index) => {
          return (
            <div key={index} className={styles.item}>
              {data.data.cart?.items?.map((e, i) => (
                <Grid key={i} container className={styles.Grid1}>
                  {e.id !== idEdit ? (
                    <Grid item xs={4}>
                      {i + 1 + `)`} {e.name}
                    </Grid>
                  ) : (
                    <Grid item xs={4}>
                      <TextField
                        size='small'
                        name='name'
                        value={formValues?.name || ''}
                        onChange={handleOnChange}
                      />
                    </Grid>
                  )}

                  {e.id !== idEdit ? (
                    <Grid item xs={1}>
                      {e.elective ? <>{e.quantity} kg</> : <>x{e.quantity}</>}
                    </Grid>
                  ) : (
                    <Grid item xs={2} sx={{ textAlign: 'right' }}>
                      <TextField
                        size='small'
                        type='number'
                        name='quantity'
                        value={formValues?.quantity || ''}
                        onChange={handleOnChange}
                      />
                    </Grid>
                  )}

                  {e.id !== idEdit ? (
                    <Grid item xs={2} sx={{ textAlign: 'right' }}>
                      {e.itemTotal}
                      {'    '}
                    </Grid>
                  ) : (
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>
                      <TextField
                        size='small'
                        type='number'
                        name='itemTotal'
                        value={formValues?.itemTotal || ''}
                        onChange={handleOnChange}
                      />
                    </Grid>
                  )}

                  {e.id !== idEdit ? (
                    <>
                      <Grid item xs={1} sx={{ display: 'flex' }}>
                        <Button onClick={() => handleEdit(data, e)}>sửa</Button>
                        <Button onClick={() => handleRemove(data, e)}>
                          xoá
                        </Button>
                      </Grid>
                    </>
                  ) : (
                    <Grid item xs={1} sx={{ display: 'flex' }}>
                      <Button onClick={() => handleEdit1(data, e)}>OK</Button>
                    </Grid>
                  )}
                </Grid>
              ))}
              <Grid container className={styles.Grid2}>
                <Grid item xs={4}>
                  Tổng cộng
                </Grid>
                <Grid item xs={1}>
                  x{totalQuantity}
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'right' }}>
                  {totalPitem}
                </Grid>
              </Grid>
            </div>
          );
        })}
    </div>
  );
}
