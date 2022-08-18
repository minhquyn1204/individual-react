import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import styles from './index.module.scss';
import Link from 'next/link';
import { ThemeContext } from '../../pages/_app';
import clsx from 'clsx';

export default function Headers({}) {
  return (
    <div className={clsx(styles.header)}>
      <Grid container spacing={2} className={styles.module}>
        <Grid item xs={3} className={styles.logo}>
          <Link href='/'>
            <img src='./Logo/logo.jpg' alt='' />
          </Link>
        </Grid>
        <Grid xs={9} item className={styles.nav}>
          <Header />
        </Grid>
      </Grid>
    </div>
  );
}
