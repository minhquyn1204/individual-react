import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

export default function Check({ sortData, checked, setChecked }) {
  const handleChange1 = (isChecked) => {
    if (isChecked) return setChecked(sortData.map((data) => data.data.slug));
    else setChecked([]);
  };

  const handleChange2 = (isChecked, slug) => {
    const index = checked.indexOf(slug);

    if (isChecked) return setChecked((state) => [...state, slug]);

    if (!isChecked && index > -1)
      return setChecked((state) => {
        state.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
  };

  return (
    <div>
      <FormControlLabel
        label='Tất cả'
        control={
          <Checkbox
            size='small'
            checked={checked.length === sortData.length}
            indeterminate={
              checked.length !== sortData.length && checked.length > 0
            }
            onChange={(event) => handleChange1(event.target.checked)}
          />
        }
      />
      <Box>
        {checked &&
          sortData.map((data, index) => (
            <FormControlLabel
              key={index}
              label={data.data.title}
              control={
                <Checkbox
                  size='small'
                  checked={checked.includes(data.data.slug)}
                  onChange={(event) =>
                    handleChange2(event.target.checked, data.data.slug)
                  }
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
            />
          ))}
      </Box>
    </div>
  );
}
