import { Button, TextField, debounce } from '@mui/material';
import clsx from 'clsx';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { multiStepContext } from '../../../stepContext';
import styles from './selectMap.module.scss';
import axios from 'axios';
// import { debouncee } from '../../../../../lib/debounce';
import { checkIfAIsInB, ConvertViToEn } from '../../../../../lib/VNtext';

export default function SelectMap({ setMap }) {
  const { setStep, setAdressData, setNameShop } = useContext(multiStepContext);
  const [selected, setSelected] = useState([]);
  const [handle, setHandle] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredhandle = selected.filter((data) => {
    return searchTerm.length === 0
      ? true
      : checkIfAIsInB(ConvertViToEn(searchTerm), ConvertViToEn(data.data.name));
  });
  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    async function fetchSelectMap() {
      const selected = await axios.get('http://localhost:5000/Selects');
      setSelected(selected.data);
      const map = selected.data.filter((item) => item.id === handle);
      setMap(map[0].data.map);
      setAdressData(map[0].data.address);
      setNameShop(map[0].data.name);
    }
    fetchSelectMap();
  }, [handle]);
  const handleClickMap = (id) => {
    setHandle(id);
  };
  return (
    <div className={styles.SelectMap}>
      <TextField
        size='small'
        placeholder='Tìm Kiếm'
        sx={{ width: '100%' }}
        onChange={debounce(handleSearchTermChange, 250)}
      />
      {filteredhandle?.map((data, index) => (
        <div
          key={index}
          className={clsx(styles.selected, {
            [styles.active]: handle === data.id,
          })}
          onClick={() => handleClickMap(data.id)}
        >
          <h5>{data.data.name}</h5>
          <span>{data.data.address}</span>
        </div>
      ))}
      <div className={styles.ButtonNext}>
        <Button variant='contained' color='primary' onClick={() => setStep(2)}>
          Next
        </Button>
      </div>
    </div>
  );
}
