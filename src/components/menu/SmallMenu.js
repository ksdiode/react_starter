import * as React from 'react';
import Menu from '@mui/material/Menu';
import SmallMenuItems from './SmallMenuItems';
import SmallMenuIcon from './SmallMenuIcon';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMenu } from '../../store/menu';

function SmallMenu({ pages }) {
  const { anchor } = useSelector((state) => state.menu);
  const { open, close } = useMenu();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <SmallMenuIcon onClick={open} />
      <Menu
        id="menu-appbar"
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchor)}
        onClose={close}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <SmallMenuItems pages={pages} />
      </Menu>
    </Box>
  );
}
export default SmallMenu;
