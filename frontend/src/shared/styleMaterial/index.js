import { Box, Modal, styled, Toolbar } from '@mui/material';

export const STYLE_POSITION_MENU = {
  vertical: 'top',
  horizontal: 'right',
};

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

export const Icons = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'none',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

export const UserBox = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const StyleModal = styled(Modal)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyleUserBox = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: '10px',
  marginBottom: '20px',
}));
