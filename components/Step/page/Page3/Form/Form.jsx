import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { multiStepContext } from '../../../stepContext';
import styles from './Form.module.scss';
import isEmpty from 'validator/lib/isEmpty';
import { debouncee } from '../../../../../lib/debounce';

export default function Form() {
  const context = useContext(multiStepContext);
  const [validationMsg, setValidationMsg] = useState({});
  const [formValue, setFormValue] = useState({
    time: '',
    date: '',
    name: '',
    email: '',
    phone: '',
    note: '',
  });
  const { time, date, name, email, phone, note } = formValue;
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const validatorAll = () => {
    const msg = {};
    if (isEmpty(time)) {
      msg.time = 'Vui lòng chọn thời gian!';
    }
    if (isEmpty(date)) {
      msg.date = 'Vui lòng chọn Ngày!';
    }
    if (isEmpty(name)) {
      msg.name = 'Vui lòng nhập tên của bạn!';
    }
    if (isEmpty(email)) {
      msg.email = 'Vui lòng nhập SĐT của bạn!';
    }
    if (isEmpty(phone)) {
      msg.phone = 'Vui lòng nhập số điện thoại của bạn!';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleNext = (index) => {
    const isValid = validatorAll();
    if (!isValid) return;
    if (isValid) {
      context.setStep(index);
      context.setForm({ ...formValue });
    }
  };
  return (
    <div className={styles.form}>
      <FormControl
        size='small'
        className={styles.input}
        error={validationMsg.time && true}
      >
        <InputLabel id='demo-simple-select-label'>Thời gian</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label=' Tất cả dịch vụ'
          name='time'
          value={time || ''}
          onChange={handleOnChange}
        >
          <MenuItem value='9:00'>9:00</MenuItem>
        </Select>
      </FormControl>
      <FormHelperText sx={{ margin: '4px 14px 0', color: '#d32f2f' }}>
        {validationMsg.time}
      </FormHelperText>
      <TextField
        size='small'
        type='date'
        variant='outlined'
        className={styles.input}
        name='date'
        value={date || ''}
        onChange={handleOnChange}
        error={validationMsg.date && true}
        helperText={validationMsg.date}
      />
      <TextField
        size='small'
        type='text'
        variant='outlined'
        label='nhập họ và tên'
        className={styles.input}
        name='name'
        value={name || ''}
        onChange={handleOnChange}
        error={validationMsg.name && true}
        helperText={validationMsg.name}
      />
      <TextField
        size='small'
        type='text'
        variant='outlined'
        label='nhập địa chỉ email'
        className={styles.input}
        name='email'
        value={email || ''}
        onChange={handleOnChange}
        error={validationMsg.email && true}
        helperText={validationMsg.email}
      />
      <TextField
        size='small'
        type='number'
        variant='outlined'
        label='nhập họ số điện thoại'
        className={styles.input}
        name='phone'
        value={phone || ''}
        onChange={handleOnChange}
        error={validationMsg.phone && true}
        helperText={validationMsg.phone}
      />
      <TextField
        size='small'
        type='text'
        variant='outlined'
        label='Ghi chú'
        multiline
        rows={4}
        className={styles.input}
        name='note'
        value={note || ''}
        onChange={handleOnChange}
      />
      <div className={styles.NextAndBack}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => context.setStep(1)}
        >
          Back
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => handleNext(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
