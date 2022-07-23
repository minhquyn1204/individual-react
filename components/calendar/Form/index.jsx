import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import isEmpty from 'validator/lib/isEmpty';
import { AiFillCaretDown, AiFillDelete } from 'react-icons/ai';
import axios from 'axios';

export default function Form({ cart, setCart }) {
  const [activeNav, setActiveNav] = useState(true);
  const [validationMsg, setValidationMsg] = useState({});
  const [price, setPrice] = useState(0);
  const [formValue, setFormValue] = useState({
    carts: cart,
    prices: price,
    time: '',
    date: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const handleShowNavItem = () => {
    if (activeNav === true) {
      setActiveNav();
    } else {
      setActiveNav(true);
    }
  };
  const handleRemove = (id) => {
    const arr = cart.filter((data) => data.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((data) => (ans += data.data.amount * data.data.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const { time, date, name, address, email, phone } = formValue;
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
    if (isEmpty(address)) {
      msg.address = 'Vui lòng nhập tình trạng sức khoẻ!';
    }
    if (isEmpty(email)) {
      msg.email = 'Vui lòng nhập SĐT của bạn!';
    }
    if (isEmpty(phone)) {
      msg.phone = 'Vui lòng nhập địa chỉ của bạn!';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleSubmit = () => {
    const isValid = validatorAll();
    if (!isValid) return;
    if (isValid) {
      const formData = {
        data: { ...formValue, carts: cart, prices: price },
      };
      axios
        .post('http://localhost:5000/Hair', formData)
        .then(function (response) {
          alert('success');
          setFormValue({
            time: '',
            date: '',
            name: '',
            address: '',
            email: '',
            phone: '',
          });
          setCart([]);
        })
        .catch(function (error) {
          alert('Đã có lỗi xảy ra. Vui lòng thử lại');
        });
    }
  };
  return (
    <div className={styles.Form}>
      <Box className={styles.box}>
        <div className={styles.input}>
          <span>DropDow </span>
          <span
            onClick={() => handleShowNavItem()}
            className={clsx(styles.rightIcon, {
              [styles.showDEG]: activeNav === true,
            })}
          >
            <AiFillCaretDown />
          </span>
        </div>
        <div className={styles.input2}>
          <ul
            className={styles.FormItem}
            style={{
              height:
                activeNav === true
                  ? (validationMsg.time && true) ||
                    (validationMsg.date && true) ||
                    (validationMsg.name && true) ||
                    (validationMsg.email && true) ||
                    (validationMsg.address && true) ||
                    (validationMsg.phone && true)
                    ? '495px'
                    : '350px'
                  : 0,
            }}
          >
            <li className={styles.inputli}>
              <FormControl
                size='small'
                sx={{ padding: 0 }}
                className={styles.inputForm}
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
            </li>
            <li>
              <TextField
                variant='outlined'
                type='date'
                size='small'
                className={styles.inputForm}
                name='date'
                value={date || ''}
                onChange={handleOnChange}
                error={validationMsg.date && true}
                helperText={validationMsg.date}
              />
            </li>
            <li>
              <TextField
                variant='outlined'
                label='name'
                type='name'
                size='small'
                className={styles.inputForm}
                name='name'
                value={name || ''}
                onChange={handleOnChange}
                error={validationMsg.name && true}
                helperText={validationMsg.name}
              />
            </li>
            <li>
              <TextField
                variant='outlined'
                label='Email'
                type='email'
                size='small'
                className={styles.inputForm}
                name='email'
                value={email || ''}
                onChange={handleOnChange}
                error={validationMsg.email && true}
                helperText={validationMsg.email}
              />
            </li>
            <li>
              {' '}
              <TextField
                variant='outlined'
                label='Address'
                type='text'
                size='small'
                className={styles.inputForm}
                name='address'
                value={address || ''}
                onChange={handleOnChange}
                error={validationMsg.address && true}
                helperText={validationMsg.address}
              />
            </li>
            <li>
              <TextField
                variant='outlined'
                label='phone'
                type='number'
                size='small'
                className={styles.inputForm}
                name='phone'
                value={phone || ''}
                onChange={handleOnChange}
                error={validationMsg.phone && true}
                helperText={validationMsg.phone}
              />
            </li>
            <li>
              <Button onClick={handleSubmit}>Gửi</Button>
            </li>
          </ul>
        </div>
      </Box>
      <div className={styles.cart}>
        {cart &&
          cart.map((data, index) => (
            <List
              sx={{ width: '100%', bgcolor: 'background.paper', padding: 0 }}
              key={index}
            >
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='' src={data.data.img} />
                </ListItemAvatar>
                <ListItemText
                  primary={data.data.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {data.data.title}{' '}
                      </Typography>
                      {data.data.price} VND
                      <Button onClick={() => handleRemove(data.id)}>
                        <AiFillDelete />
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {/* <ListItem alignItems='flex-start'>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText
                  primary={data.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {data.title}{' '}
                      </Typography>
                      <Button onClick={() => handleRemove(data.id)}>
                        <AiFillDelete />
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem> */}
              <Divider variant='inset' component='li' />
            </List>
          ))}
      </div>
      <div className={styles.total}>tổng cộng :{price}</div>
    </div>
  );
}
