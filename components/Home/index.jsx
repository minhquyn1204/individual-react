import { Grid } from '@mui/material';
import React from 'react';
import Card from '../card';
import styles from './home.module.scss';
import list from '../data';

export default function HomePage({ handleCart }) {
  return (
    <div>
      <Grid container spacing={2}>
        {list &&
          list.map((item) => (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <Card key={item} item={item} handleCart={handleCart} />
              </Grid>
            </>
          ))}
      </Grid>
    </div>
  );
}
