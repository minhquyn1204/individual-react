import { Grid } from '@mui/material';
import React from 'react';
import MainStep from './MainStep/MainStep';

export default function Steps() {
  return (
    <Grid container>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <MainStep />
      </Grid>
    </Grid>
  );
}
