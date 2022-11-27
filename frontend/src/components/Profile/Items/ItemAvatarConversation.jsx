import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const ItemAvatarConversation = ({ link, alt, user, message, comment }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={alt} src={link} />
        </ListItemAvatar>
        <ListItemText
          primary={comment}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {user}
              </Typography>
              {`— ${message}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ItemAvatarConversation;
