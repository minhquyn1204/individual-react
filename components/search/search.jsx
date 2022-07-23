import { TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { checkIfAIsInB, ConvertViToEn } from './convert';
import propTypes from 'prop-types';

Search.propTypes = {
  onSubmit: propTypes.func,
};
Search.defaultProps = {
  onSubmit: null,
};

export default function Search(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    //   setSearchTerm(value);
    //   if (!onSubmit) return;
    //   if (typingTimeoutRef.current) {
    //     clearTimeout(typingTimeoutRef.current);
    //   }
    //   typingTimeoutRef.current = setTimeout(() => {
    //     const formValues = {
    //       searchTerm: value,
    //     };
    //     onSubmit(formValues);
    //   }, 300);
  };
  // console.log(searchTerm);
  useEffect(() => {
    async function fetchUser() {
      const user = await axios.get(
        // `https://jsonplaceholder.typicode.com/comments`
        `http://localhost:5000/user`
      );
      setData(user.data);
    }
    fetchUser();
  }, []);

  return (
    <div>
      <TextField
        sx={{ width: '100%' }}
        variant='outlined'
        type='search'
        size='small'
        placeholder='search'
        onChange={handleChange}
      />
      {data
        .filter((data) => {
          return checkIfAIsInB(
            ConvertViToEn(searchTerm),
            ConvertViToEn(data.data.name)
          );
        })
        .map((data, index) => (
          <div key={index}>{data.data.name}</div>
        ))}
    </div>
  );
}
