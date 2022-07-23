import { Grid } from '@mui/material';
import React from 'react';
import Confirm from './confirm/Confirm';
import Desc from './Desc/Desc';

export default function Page4() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <Desc />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Confirm />
      </Grid>
    </Grid>
  );
}
