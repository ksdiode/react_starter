import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useMenu } from '../../store/menu';

function MainMenuItems({ pages }) {
  const { close } = useMenu();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          component={Link}
          to={page.to}
          startIcon={page.icon}
          onClick={close}
          sx={{ my: 2, color: 'white' }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
}
export default MainMenuItems;
