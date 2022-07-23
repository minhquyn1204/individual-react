import { Pagination, Stack } from '@mui/material';
import React from 'react';

export default function Paginations({
  page,
  filteredResize,
  setPage,
  firstIndex,
}) {
  const handlePageChange = (e, value) => {
    setPage(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(filteredResize.length / firstIndex)}
        shape='rounded'
        color='primary'
        onChange={handlePageChange}
        page={page}
      />
    </Stack>
  );
}
