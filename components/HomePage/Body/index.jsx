import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { multiStepContext } from '../../../lib/Context';
import { QRCodeSVG } from 'qrcode.react';

export default function Body() {
  const { table } = useContext(multiStepContext);
  return (
    <div>
      <Grid container>
        {table?.map((data, index) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            sx={{ textAlign: 'center' }}
            key={index}
          >
            {/* <img src='./Logo/table.jpg' alt='' /> */}
            <QRCodeSVG value={`http://localhost:3000/Newid/${data.id}`} />,
            <Link href={`/Newid/${data.id}`}>
              <div style={{ cursor: 'pointer' }}>{data.data.name}</div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
