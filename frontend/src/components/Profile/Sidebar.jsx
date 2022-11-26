import {
  Box,
  List,

} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avatar from './Avatar/avatar.jpg'

const Sidebar = ({ user }) => {
  console.log(user)
  const avtUrl = user?.data?.avatar?.url ? `${process.env.REACT_APP_API_URL}` : avatar
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List>
          <Avatar 
            alt="Avatar"
            src={avtUrl}
            sx={{ width: 230, height: 230 }}
          />
            <Typography variant="h5" fontWeight={100} mt={2} mb={2}>
              {user?.data.name}
            </Typography>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
              {`Địa chỉ: ${user?.data.address}`}
            </Typography>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
              {`Số cây trồng được: ${user?.trees?.length}`}
            </Typography>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
