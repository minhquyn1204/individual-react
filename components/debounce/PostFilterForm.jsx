import React, { useRef, useState } from 'react';
// import propType from 'prop-types';
import { TextField } from '@mui/material';

// PostFilterForm.propType = {
//   onSubmit: propType.func,
// };
// PostFilterForm.defaultProps = {
//   onSubmit: null,
// };

export default function PostFilterForm(props) {
  //   const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // if (!onSubmit) return;
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: e.target.value,
      };
      console.log('formValues', formValues);
      //   onSubmit(formValues);
    }, 250);
  }
  return (
    <div>
      <TextField
        type='search'
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
}
