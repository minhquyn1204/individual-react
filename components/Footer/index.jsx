import { Grid, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './footer.module.scss';
import { RiCopyrightLine } from 'react-icons/ri';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className={styles.MainFooter}>
      <Grid container spacing={2} className={styles.inforFooter}>
        <Grid item md={2.5} sm={6} className={styles.AboutUS}>
          <p>About US</p>
          <span>Blog</span>
          <br></br>
          <span>Thong ke</span>
          <br></br>
          <span>Demo</span>
          <br></br>
          <span>Khoa</span>
          <br></br>
        </Grid>
        <Grid item md={2.5} sm={6} className={styles.AboutUS}>
          <div>
            <p>Contact US</p>
            <span>Jobs</span>
            <br></br>
            <span>Support</span>
            <br></br>
            <span>Contact</span>
            <br></br>
            <span>Khoa</span>
            <br></br>
          </div>
        </Grid>
        <Grid item md={2.5} sm={6} className={styles.AboutUS}>
          <div>
            <p>About US</p>
            <span>Blog</span>
            <br></br>
            <span>Thong ke</span>
            <br></br>
            <span>Demo</span>
            <br></br>
            <span>Khoa</span>
            <br></br>
          </div>
        </Grid>
        <Grid item md={4.5} sm={12} className={styles.Search}>
          <p>Search</p>
          <span>
            <TextField
              type='search'
              id='standard-basic'
              label='Search'
              variant='standard'
              sx={{ width: '100%' }}
            />
          </span>
          <br></br>
          <br></br>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                marginRight: '10px',
                backgroundColor: '#333',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                alignItems: 'center',
              }}
            >
              <FaFacebookF style={{ width: '1.5rem' }} />
            </div>
            <div
              style={{
                marginRight: '10px',
                backgroundColor: '#333',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                alignItems: 'center',
              }}
            >
              <FiTwitter style={{ width: '1.5rem' }} />
            </div>
            <div
              style={{
                marginRight: '10px',
                backgroundColor: '#333',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                alignItems: 'center',
              }}
            >
              <FiInstagram style={{ width: '1.5rem' }} />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.copy}>
        Copyright <RiCopyrightLine /> 2022 codeOpacity. Designed By{' '}
        <Link href='#'>Quyn</Link>
      </div>
    </div>
  );
}
