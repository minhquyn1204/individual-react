import React, { useContext, useEffect, useState } from 'react';
import { TextField, Modal, Typography, Button, Box } from '@mui/material';
import isEmpty from 'validator/lib/isEmpty';
import axios from 'axios';
import { multiStepContext } from '../../../../lib/Context';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ setOpen, open }) {
  const [validationMsg, setValidationMsg] = useState({});
  const { table, setTable } = useContext(multiStepContext);
  const [formValue, setFormValue] = useState({
    name: '',
  });
  useEffect(() => {
    LoadTable();
  }, []);
  const LoadTable = () => {
    async function Load() {
      const LoadTable = await axios.get('http://localhost:5000/table');
      setTable(LoadTable.data);
    }
    Load();
  };
  const { name } = formValue;
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validatorAll = () => {
    const msg = {};
    if (isEmpty(name)) {
      msg.name = 'Vui lòng nhập tên bàn!';
    }
    if (table.find((item) => item.data.name === name)) {
      msg.name = 'Bàn đang sử dụng';
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
        data: { ...formValue },
      };
      axios
        .post('http://localhost:5000/table', formData)
        .then(function (response) {
          setFormValue({
            name: '',
          });
          LoadTable();
          setOpen(false);
        })
        .catch(function (error) {
          alert('Đã có lỗi xảy ra. Vui lòng thử lại');
          setOpen(false);
        });
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Button
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              color: '#000',
              bgcolor: '#fff',
              '&.MuiButtonBase-root:hover': {
                bgcolor: '#D3D3D3',
              },
            }}
            onClick={handleClose}
          >
            X
          </Button>
          <div>Tạo bàn</div>
          <div>
            <TextField
              variant='outlined'
              type='name'
              size='small'
              name='name'
              value={name || ''}
              onChange={handleOnChange}
              error={validationMsg.name && true}
              helperText={validationMsg.name}
            />
          </div>
          <div>
            <Button
              sx={{
                mt: 1,
                color: '#fff',
                bgcolor: '#0033FF',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#0033CC',
                },
              }}
              onClick={handleSubmit}
            >
              Tạo Bàn
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
