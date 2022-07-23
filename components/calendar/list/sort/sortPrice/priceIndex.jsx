import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MediaCard from '../../card/Card';
import Paginations from '../../Pagination';
import styles from './priceIndex.module.scss';

export default function PriceIndex({
  filteredResize,
  page,
  firstIndex,
  setPage,
  handleCart,
  mockIndex,
}) {
  useEffect(() => {}, [filteredResize, mockIndex]);
  return (
    <div>
      <Grid container className={styles.ListCard}>
        {filteredResize
          .sort(function (a, b) {
            if (mockIndex == 1) {
              return parseInt(a.data.price, 10) - parseInt(b.data.price, 10);
            } else if (mockIndex == 2) {
              return parseInt(b.data.price, 10) - parseInt(a.data.price, 10);
            }
          })
          .slice((page - 1) * firstIndex, page * firstIndex)
          .map((data, index) => {
            return (
              <Grid item xs={12} className={styles.CardMain} key={index}>
                <MediaCard data={data} handleCart={handleCart} />
              </Grid>
            );
          })}
        <Paginations
          page={page}
          filteredResize={filteredResize}
          setPage={setPage}
          firstIndex={firstIndex}
        />
      </Grid>
    </div>
  );
}
