import { Grid } from '@mui/material';
import React from 'react';
import Desc from './Desc/Desc';
import Form from './Form/Form';

export default function Page3() {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Desc />
      </Grid>
      <Grid item xs={12} md={6}>
        <Form />
      </Grid>
    </Grid>
  );
}
