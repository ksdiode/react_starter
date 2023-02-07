import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import BookIcon from '@mui/icons-material/Book';

const pages = [
  { title: 'Home', to: '/', icon: <HomeIcon fontSize="small" /> },
  {
    title: 'Todo',
    to: '/todo',
    icon: <PlaylistAddCheckIcon fontSize="small" />,
  },
  { title: 'Blog', to: '/blog', icon: <BookIcon fontSize="small" /> },
];

function MainMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* 작은 화면 메뉴 */}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.title}
              onClick={handleCloseNavMenu}
              component={Link}
              to={page.to}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText>{page.title}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* 큰 화면 메뉴 */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.title}
            component={Link}
            to={page.to}
            startIcon={page.icon}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white' }}
          >
            {page.title}
          </Button>
        ))}
      </Box>
    </>
  );
}
export default MainMenu;
