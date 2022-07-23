import { Button, Pagination, Stack, TextField, debounce } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { multiStepContext } from '../../../stepContext';
import styles from './service.module.scss';
import axios from 'axios';
import { checkIfAIsInB, ConvertViToEn } from '../../../../../lib/VNtext';
import Notification from '../notification/notification';
import { useCart } from 'react-use-cart';

export default function Service() {
  const context = useContext(multiStepContext);
  const firstIndex = 4;
  const [service, setService] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const filteredservice = service?.filter((data) => {
    return searchTerm.length === 0
      ? true
      : checkIfAIsInB(ConvertViToEn(searchTerm), ConvertViToEn(data.data.name));
  });
  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }
  const handlePageChange = (e, value) => {
    setPage(value);
  };
  const { addItem, items } = useCart();

  const handle = (data) => {
    if (items.find((item) => item.id === data.id)) return;
    addItem(data);
  };
  const handleNext = (index) => {
    if (items.length === 0) {
      setOpenModal(true);
    } else {
      context.setStep(index);
    }
  };
  useEffect(() => {
    async function fetchService() {
      const services = await axios.get('http://localhost:5000/Menuselect');
      setService(services.data);
    }
    fetchService();
  }, [page]);
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);
  return (
    <div className={styles.service}>
      <TextField
        type='search'
        size='small'
        placeholder='Tìm Kiếm'
        sx={{ width: '100%' }}
        onChange={debounce(handleSearchTermChange, 250)}
      />
      <div className={styles.services}>
        <div className={styles.titleBar}>
          <div className={styles.title_page}>Dịch vụ </div>
        </div>
        {filteredservice
          .slice((page - 1) * firstIndex, page * firstIndex)
          .map((data) => (
            <div className={styles.serviced} key={data.data.id}>
              <h5>{data.data.name}</h5>
              <span>{data.data.price}$</span>
              <Button onClick={() => handle(data.data)}>Thêm</Button>
            </div>
          ))}
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <Pagination
            count={Math.ceil(filteredservice.length / firstIndex)}
            shape='rounded'
            color='primary'
            onChange={handlePageChange}
            page={page}
          />
        </Stack>
      </div>
      <Notification setOpenModal={setOpenModal} openModal={openModal} />
      <div className={styles.NextAndBack}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => context.setStep(2)}
        >
          Back
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => handleNext(4)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
