import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function List({ data, handleCart, addItem, items }) {
  const handle = (data) => {
    if (items.find((item) => item.id === data.id)) return;
    addItem(data);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={data.data.img}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.data.name.length > 12 ? (
            <>{data.data.name.slice(0, 12) + `...`}</>
          ) : (
            <>{data.data.name}</>
          )}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {data.data.price === 0 ? (
            <>{data.data.elective}</>
          ) : (
            <>{data.data.price}</>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          onClick={() => handle(data.data)}
          // onClick={() => handleCart(data.data)}
        >
          Thêm
        </Button>
      </CardActions>
    </Card>
  );
}
