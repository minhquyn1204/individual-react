import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { multiStepContext } from '../../../stepContext';
import { MdDoneAll } from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 3,
};

export default function Notification({
  setOpenModal,
  openModal,
  name,
  address,
}) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpenModal(true);
  const { setStep } = useContext(multiStepContext);
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Button
            onClick={() => setStep(1)}
            sx={{ position: 'absolute', top: '0', right: '0' }}
          >
            <GrFormClose style={{ height: '30px', width: '30px' }} />
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
            <MdDoneAll
              style={{ height: '80px', width: '80px', color: '#339900' }}
            />
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: '24px' }}>
            Đăng kí thành công
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Cảm ơn{' '}
            <span style={{ fontWeight: '700', color: 'red' }}>{name}</span>{' '}
            chúng tôi mong sớm được gặp bạn tại spa {address}
          </Typography>
          <Typography id='modal-modal-description' sx={{ textAlign: 'center' }}>
            <Button
              sx={{
                mt: 1,
                color: '#fff',
                bgcolor: '#339900',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#339900',
                },
              }}
              onClick={() => setStep(1)}
            >
              Xác nhận
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
