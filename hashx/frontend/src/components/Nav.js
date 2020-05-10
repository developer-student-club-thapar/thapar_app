import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Notification from './Notifications';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CodeIcon from '@material-ui/icons/Code';
import GroupIcon from '@material-ui/icons/Group';
import BookIcon from '@material-ui/icons/Book';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    list: {
      width: 250,
      backgroundColor: '#1B233A',
    },
    fullList: {
      width: 'auto',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  paper: {
    background: '#1B233A',
    color: '#FBF9FF',
    width: 250,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [sideDrawer, setSideDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setSideDrawer(open);
  };
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://picsum.photos/200/300"
        style={{ margin: 'auto', marginTop: '30px' }}
        className={classes.large}
      />
      <br />
      <h3 style={{ textAlign: 'center' }}>Lorem Ipsum</h3>
      <List>
        {['Home', 'Events', 'Resources', 'Projects', 'Team', 'Blog'].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                text !== 'Home'
                  ? props.history.push(`/${text.toLowerCase()}`)
                  : props.history.push('/');
              }}
            >
              <ListItemIcon style={{ color: '#FBF9FF' }}>
                {index === 0 && <HomeIcon />}
                {index === 1 && <EventIcon />}
                {index === 2 && <LibraryBooksIcon />}
                {index === 3 && <CodeIcon />}
                {index === 4 && <GroupIcon />}
                {index === 5 && <BookIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ),
        )}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundImage: 'linear-gradient(to right, #D04682 , #4A55EB)',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Thapar app
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Notification />
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={'left'}
        open={sideDrawer}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
