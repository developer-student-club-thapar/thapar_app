import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Bounce from 'react-reveal/Bounce';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';
import { secondaryColor, textColor } from '../../theme/theme';

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
  text: {
    textAlign: 'left',
    paddingLeft: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  title: {
    display: 'inline-block',
    [theme.breakpoints.only('xs')]: {
      fontSize: '30px',
    },
  },
  paperGrid: {
    borderRadius: '20px',
    textAlign: 'center',
    height: '500px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
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
    <>
      <Paper elevation={3} className={classes.paperGrid}>
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
                <i className="fas fa-eye" /> View More
              </h5>
            </Link>
          </Paper>
        </Popover>
        <br />
        <br />
        <h1 className={classes.title}>
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
            <h4 className={classes.text}>
              <i className="fas fa-arrow-alt-circle-right" /> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
            <h4 className={classes.text}>
              <i className="fas fa-arrow-alt-circle-right" /> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
            <h4 className={classes.text}>
              <i className="fas fa-arrow-alt-circle-right" /> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
            <h4 className={classes.text}>
              <i className="fas fa-arrow-alt-circle-right" /> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
            <h4 className={classes.text}>
              <i className="fas fa-arrow-alt-circle-right" /> This is a
              announcement.Blah blah blah.Lorem ipsum sommte siodfgosidh.
            </h4>
          </div>
        </Bounce>
      </Paper>
    </>
  );
};

export default Announcements;
