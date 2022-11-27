import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Mail, NotificationAdd } from '@mui/icons-material';

import {
  Icons,
  Search,
  StyledToolbar,
  STYLE_POSITION_MENU,
  UserBox,
} from '../../shared/styleMaterial';

const IKIGAI_DEV = 'IKIGAI DEV';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {IKIGAI_DEV}
        </Typography>
        <AutoAwesomeIcon sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>

          <Badge badgeContent={4} color="error">
            <NotificationAdd color="action" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Ikigai"
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Ikigai"
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Ikigai</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={STYLE_POSITION_MENU}
        transformOrigin={STYLE_POSITION_MENU}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
