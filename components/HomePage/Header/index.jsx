import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import BasicModal from './Modal';

export default function Heads() {
  const [open, setOpen] = useState(false);
  const handleCreateTable = () => {
    setOpen(true);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          Quản Lí Bàn
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
            placeholder='tìm kiếm bàn'
            type='search'
            sx={{ width: '100%' }}
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Button onClick={handleCreateTable}>Tạo bàn +</Button>
        </Grid>
      </Grid>
      <BasicModal setOpen={setOpen} open={open} />
    </div>
  );
}
