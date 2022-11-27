import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const ItemIcon = ({ component, hrefPage, Icon, title }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={component} href={`#${hrefPage}`}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default ItemIcon;
