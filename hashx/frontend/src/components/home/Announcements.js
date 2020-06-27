import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Bounce from 'react-reveal/Bounce';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
    width: 'auto',
  },
}));

const Announcements = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Fragment>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: '20px',
          textAlign: 'center',
          height: '500px',
          backgroundColor: '#2C3055',
          color: '#FBF9FF',
        }}
      >
        <IconButton
          color="inherit"
          style={{
            height: '35px',
            float: 'right',
          }}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Paper elevation={0} style={{ width: '' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h5 style={{ margin: 'auto' }}>
                <i class="fas fa-eye"></i> View More
              </h5>
            </Link>
          </Paper>
        </Popover>
        <br />
        <br />
        <h1 style={{ display: 'inline-block' }}>
          <i
            className="fas fa-bullhorn fa-sm"
            style={{ display: 'inline-block' }}
          />{' '}
          Announcements
        </h1>
        <br />
        <br />
        <Bounce bottom cascade>
          <div>
            <h4 style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <i class="fas fa-arrow-alt-circle-right"></i> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
            <h4 style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <i class="fas fa-arrow-alt-circle-right"></i> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
            <h4 style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <i class="fas fa-arrow-alt-circle-right"></i> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
            <h4 style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <i class="fas fa-arrow-alt-circle-right"></i> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
            <h4 style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <i class="fas fa-arrow-alt-circle-right"></i> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
          </div>
        </Bounce>
      </Paper>
    </Fragment>
  );
};

export default Announcements;
