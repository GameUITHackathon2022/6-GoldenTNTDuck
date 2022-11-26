import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardPost = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar 
          src="https://cdn.discordapp.com/attachments/1045886589328429199/1045964294866608228/zxc.png"
          sx={{ width: 100, height: 100 }} aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Achivement Level 1"
        subheader="September 14, 2022"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Tôi đã trồng được thật nhiều cây
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardPost;
