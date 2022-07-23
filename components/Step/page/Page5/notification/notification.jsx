import * as React from 'react';
import { Button, Box, Typography, Modal } from '@mui/material';
import { useContext } from 'react';
import { multiStepContext } from '../../../stepContext';
import { RiErrorWarningLine } from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Notification({ setOpenModal, openModal }) {
  const context = useContext(multiStepContext);
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            sx={{ position: 'absolute', top: '0', right: '0' }}
          >
            <GrFormClose style={{ height: '30px', width: '30px' }} />
          </Button>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ textAlign: 'center' }}
          >
            <RiErrorWarningLine
              style={{ height: '80px', width: '80px', color: '#ffcc00' }}
            />
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Bạn Chưa chọn Dịch vụ
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Bạn có muốn tiếp tục đên bước tiếp theo và nhân viên tư vấn sẽ hổ
            trợ bạn.
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            <Button
              // sx={{ backgroundColor: '#cc3300', }}
              sx={{
                color: '#fff',
                bgcolor: '#cc3300',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#cc3300',
                },
              }}
              onClick={handleClose}
            >
              Huỷ
            </Button>
            <Button
              sx={{
                ml: '5px',
                color: '#fff',
                bgcolor: '#339900',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#339900',
                },
              }}
              onClick={() => context.setStep(4)}
            >
              Tiếp tục
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
