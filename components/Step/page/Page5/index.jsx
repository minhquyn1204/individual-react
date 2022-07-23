import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Desc from './desc/desc';
import Service from './services/service';

export default function Page5() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Desc />
        </Grid>
        <Grid item xs={12} md={6}>
          <Service />
        </Grid>
      </Grid>
    </div>
  );
}
