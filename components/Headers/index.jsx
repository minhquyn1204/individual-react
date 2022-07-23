import { Grid } from '@mui/material';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { GlobalContext } from '../../pages/_app';
import styles from './index.module.scss';

export default function Header({ size }) {
  const conext = useContext(GlobalContext);
  return (
    <div className={styles.Nav}>
      <Grid container spacing={2} className={styles.MainNav}>
        <Grid
          item
          xs={3}
          className={styles.Logo}
          onClick={() => {
            conext.setShow(true);
          }}
        >
          <Link href='/'>
            <h3>Home</h3>
          </Link>
        </Grid>
        <Grid
          item
          xs={9}
          className={styles.ListNav}
          onClick={() => {
            conext.setShow(false);
          }}
        >
          <ul>
            <li>
              <span>
                <FaCartPlus />
              </span>
              <span>2</span>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
