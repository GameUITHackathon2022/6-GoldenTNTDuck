import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from '@mui/material';
import ChaletIcon from '@mui/icons-material/Chalet';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ListItemText from '@mui/material/ListItemText'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNight from '@mui/icons-material/ModeNight';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avatar from './Avatar/avatar.jpg'

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List>
          <Avatar 
            alt="Avatar"
            src={avatar}
            sx={{ width: 230, height: 230 }}
          />
            <Typography variant="h5" fontWeight={100} mt={2} mb={2}>
              Ngo Van Trung
            </Typography>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
              Địa chỉ: gần nhà Chiến
            </Typography>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
              ...
            </Typography>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
