import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import { spacing } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import HamburgerMenu from 'react-hamburger-menu';
import Overlay from '../../Landing/Overlay/Overlay.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  hamburgerBox: {
    zIndex: '100',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  listBox: {
    zIndex: '100',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    '& button': {
      outline: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box mb={4}>
      <AppBar
        position="static"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          color: open ? '#8167a9' : 'black',
        }}
      >
        <Toolbar>
          <Box mx={1} style={{ zIndex: '100' }}>
            <CodeRoundedIcon fontSize="large" />
          </Box>
          <Typography
            variant="h4"
            style={{
              flexGrow: '1',
              fontWeight: '700',
              zIndex: '100',
              color: open ? '#8167a9' : 'black',
            }}
          >
            Vexio
          </Typography>
          <Box
            m={2}
            className={classes.hamburgerBox}
            onClick={() => setOpen((open) => !open)}
            style={{ zIndex: '100' }}
          >
            <HamburgerMenu
              isOpen={open}
              width={30}
              height={20}
              strokeWidth={2}
              color={open ? '#8167a9' : 'black'}
              borderRadius={0}
              animationDuration={0.5}
              style={{ cursor: 'pointer' }}
            />
          </Box>
          <Overlay isOpen={open} />
          <Box />
          <Box className={classes.listBox}>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/about">
              <Button>About</Button>
            </Link>
            <Link to="/contact">
              <Button>Contact</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
