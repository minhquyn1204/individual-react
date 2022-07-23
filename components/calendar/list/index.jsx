import { Fragment, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import styles from './index.module.scss';
import { Grid } from '@mui/material';
import MediaCard from './card/Card';
import axios from 'axios';
import { checkIfAIsInB, ConvertViToEn } from '../VNtext';
import Search from './search';
import Check from './checked';
import Sort from './sort';
import Paginations from './Pagination';

export default function List({ handleCart }) {
  const firstIndex = 10;
  const [checked, setChecked] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [page, setPage] = useState(1);
  const [resize, setResize] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredResize = resize
    ?.filter((item) =>
      checked.length ? checked.includes(item.data.slug) : true
    )
    .filter((data) => {
      return searchTerm.length === 0
        ? true
        : checkIfAIsInB(
            ConvertViToEn(searchTerm),
            ConvertViToEn(data.data.name)
          );
    });
  useEffect(() => {
    setPage(1);
  }, [searchTerm, checked]);
  useEffect(() => {
    loadNames();
  }, [page]);
  const loadNames = () => {
    async function fetchUser() {
      const Menuselect = await axios.get(`http://localhost:5000/Menuselect`);
      const rs = Menuselect.data.reduce((prev, cur) => {
        return prev.find((it) => it.data.slug === cur.data.slug)
          ? prev
          : [...prev, cur];
      }, []);
      setSortData(rs);
      setResize(Menuselect.data);
    }
    fetchUser();
  };

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />

      <Check sortData={sortData} setChecked={setChecked} checked={checked} />

      <Sort
        filteredResize={filteredResize}
        page={page}
        firstIndex={firstIndex}
        setPage={setPage}
        handleCart={handleCart}
      />

      {/* <Grid container className={styles.ListCard}>
        {sortPrices
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
      </Grid> */}
    </div>
  );
}
