import { Button, Grid } from '@mui/material';
import React from 'react';
import styles from './userBill.module.scss';

export default function UserBill({
  updateCart,
  router,
  totalPitem,
  totalQuantity,
}) {
  const handleNotification = (data, e) => {
    alert(`bàn ${data.data.name} yêu cầu huỷ món ${e.name}`);
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
                  <Grid item xs={4}>
                    {i + 1 + `)`} {e.name}
                  </Grid>

                  <Grid item xs={1}>
                    {e.elective ? <>{e.quantity} kg</> : <>x{e.quantity}</>}
                  </Grid>

                  <Grid item xs={3} sx={{ textAlign: 'right' }}>
                    {e.itemTotal}
                    {'    '}
                  </Grid>
                  <Grid item xs={4} sx={{ display: 'flex' }}>
                    <Button
                      sx={{
                        mt: 1,
                        ml: 1,
                        color: '#fff',
                        bgcolor: '#DD0000',
                        '&.MuiButtonBase-root:hover': {
                          bgcolor: '#CC0000',
                        },
                      }}
                      onClick={() => handleNotification(data, e)}
                    >
                      Yêu cầu huỷ
                    </Button>
                  </Grid>
                </Grid>
              ))}
              <Grid container className={styles.Grid2}>
                <Grid item xs={4}>
                  Tổng cộng
                </Grid>
                <Grid item xs={2}>
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
