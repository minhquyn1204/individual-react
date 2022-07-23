import { TextField } from '@mui/material';
import React from 'react';
import { debouncee } from '../../../../lib/debounce';

export default function Search({ setSearchTerm }) {
  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div>
      <TextField
        sx={{ width: '100%' }}
        variant='outlined'
        type='search'
        size='small'
        placeholder='search'
        // value={searchTerm}
        onChange={debouncee(handleSearchTermChange, 250)} // 3s delay
      />
    </div>
  );
}
