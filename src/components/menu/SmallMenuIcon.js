import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMenu } from '../../store/menu';

function SmallMenuIcon() {
  const { open } = useMenu();
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={open}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
  );
}
export default SmallMenuIcon;
