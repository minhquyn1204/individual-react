import * as React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Button,
  Avatar,
  Divider,
} from '@mui/material';

export default function MediaCard({ data, handleCart }) {
  return (
    <>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          padding: 0,
          backgroundColor: 'background-color: rgba(0,0,0,0.0001)',
        }}
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
                  {data.data.title}/xuất xứ:{data.data.nation}/giá:
                  {data.data.price} VND
                  <br></br>
                  loai đạn:{data.data.typeOfAmmo}
                </Typography>
                <Button onClick={() => handleCart(data)}>Thêm</Button>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
      </List>
    </>
  );
}
