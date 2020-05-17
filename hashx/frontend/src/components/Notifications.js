import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    background: '#1B233A',
    color: '#FBF9FF',
    width: 300,
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Fragment>
      <IconButton
        color="inherit"
        style={{ height: '35px', marginTop: '-10px' }}
        onClick={handleClick}
      >
        <Badge color="secondary" variant="dot">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <h4
          style={{
            marginTop: '10px',
            marginLeft: '10px',
            fontWeight: 'bold',
          }}
        >
          Notifications
        </h4>

        <a
          href="#"
          style={{
            textDecoration: 'none',
            color: '#FBF9FF',
          }}
        >
          <h5 style={{ marginLeft: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </a>
        <a href="#" style={{ textDecoration: 'none', color: '#FBF9FF' }}>
          <h5 style={{ marginLeft: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </a>
      </Popover>
    </Fragment>
  );
};

export default Notifications;
