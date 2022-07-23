import { Button, Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import { multiStepContext } from '../../../stepContext';
import styles from './confirm.module.scss';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import Notification from '../notification/notification';
import { useCart } from 'react-use-cart';

export default function Confirm() {
  const { form, setForm, setStep, adressData, nameShop } =
    useContext(multiStepContext);
  const [openModal, setOpenModal] = React.useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const { items, removeItem, cartTotal, emptyCart } = useCart();
  const handleSubmit = () => {
    const formData = {
      data: { form, nameShop, adressData, items },
    };
    axios
      .post('http://localhost:5000/appointmentSchedule', formData)
      .then(function (response) {
        emptyCart();
        setName(response.data.data.form.name);
        setAddress(response.data.data.adressData);
        setOpenModal(true);
        setForm();
      })
      .catch(function (error) {
        alert('Đã có lỗi xảy ra. Vui lòng thử lại');
      });
  };

  return (
    <div className={styles.confirm}>
      <div className={styles.body}>
        <div className={styles.title_page}>Lịch hẹn của bạn</div>
        <div className={styles.confirmInfor}>
          <div className={styles.item}>
            <h5>THỜI GIAN</h5>
            <span>
              {form?.time}/{form?.date}
            </span>
          </div>
          <div className={styles.item}>
            <h5>ĐỊA ĐIỂM</h5>
            <span>{nameShop && nameShop}</span>
            <br></br>({adressData && adressData})
          </div>
          <div className={styles.services}>
            <Grid container className={styles.listItem}>
              <Grid item xs={2} className={styles.name}>
                Dịch vụ:
              </Grid>
              <Grid item xs={10} className={styles.list}>
                {items?.map((data) => (
                  <div className={styles.items} key={data.id}>
                    <div className={styles.mo}>
                      <h5>{data.name}</h5>
                      <span>{data.price}$</span>
                    </div>
                    <div
                      className={styles.delete}
                      onClick={() => removeItem(data.id)}
                    >
                      <AiFillDelete />
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
          <div className={styles.total}>
            <span>Tổng cộng</span>
            <span>{cartTotal}$</span>
          </div>
        </div>
      </div>
      <div className={styles.NextAndBack}>
        <Button variant='contained' color='primary' onClick={() => setStep(3)}>
          Back
        </Button>
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Finish
        </Button>
      </div>
      <Notification
        setOpenModal={setOpenModal}
        openModal={openModal}
        name={name}
        address={address}
      />
    </div>
  );
}
