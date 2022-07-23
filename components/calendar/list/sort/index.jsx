import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import SortPrice from './sortPrice';
import SortBestSeller from './sortBestSeller';
import clsx from 'clsx';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import MediaCard from '../card/Card';
import Paginations from '../Pagination';
import PriceIndex from './sortPrice/priceIndex';

export default function Sort({
  levelPrice,
  handleChange,
  filteredResize,
  page,
  firstIndex,
  setPage,
  handleCart,
}) {
  const [tab, setTab] = useState(0);
  const [mockIndex, setMockIndex] = useState();
  const handleClickTab = (index) => {
    setTab(index);
  };
  useEffect(() => {}, [filteredResize]);
  return (
    <div className={styles.tab}>
      <ul className={styles.moduleTab}>
        <li onClick={() => handleClickTab(1)}>
          <span
            className={clsx(styles.sortBestSeller, {
              [styles.tabActive]: Number(tab) === 1,
            })}
          >
            Bán Chạy
          </span>
        </li>
        {/* <li onClick={() => handleClickTab(2)}>
          <span
            className={clsx(styles.sortRelateTo, {
              [styles.tabActive]: Number(tab) === 2,
            })}
          >
            Liên Quan
          </span>
        </li> */}
        <li onClick={() => handleClickTab(3)}>
          <span
            className={clsx(styles.sortPrice, {
              [styles.tabActive]: Number(tab) === 3,
            })}
          >
            <SortPrice
              levelPrice={levelPrice}
              handleChange={handleChange}
              tab={tab}
              setMockIndex={setMockIndex}
            />
          </span>
        </li>
      </ul>
      <div className={styles.body}>
        <div
          className={clsx(styles.startData, {
            [styles.active]: tab === 0,
          })}
        >
          <Grid container className={styles.ListCard}>
            {filteredResize
              .sort(function (a, b) {
                return (
                  parseInt(a.data.name.length) - parseInt(b.data.name.length)
                );
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
        <div
          className={clsx(styles.BestSeller, {
            [styles.active]: tab === 1,
          })}
        >
          <Grid container className={styles.ListCard}>
            {filteredResize
              .sort(function (a, b) {
                return parseInt(b.data.hot) - parseInt(a.data.hot);
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
        {/* <div
          className={clsx(styles.BestSeller, {
            [styles.active]: tab === 2,
          })}
        >
          không tìm thấy sản phẩm liên quan
        </div> */}
        <div
          className={clsx(styles.BestSeller, {
            [styles.active]: tab === 3,
          })}
        >
          <PriceIndex
            filteredResize={filteredResize}
            page={page}
            firstIndex={firstIndex}
            setPage={setPage}
            handleCart={handleCart}
            mockIndex={mockIndex}
          />
        </div>
      </div>
    </div>
  );
}
