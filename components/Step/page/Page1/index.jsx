import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Maps from './map/map';
import SelectMap from './selectMap/selectMap';

export default function Map() {
  const [map, setMap] = useState([]);
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Maps map={map} />
      </Grid>
      <Grid item xs={12} md={6}>
        <SelectMap setMap={setMap} />
      </Grid>
    </Grid>
  );
}
