import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';

const RandomColor = () => {
  const colorValues = [
    '#C51212',
    '#117CCE',
    '#11B4CE',
    '#22D652',
    '#D9CC26',
    '#F87B0F',
    '#4C1AAF',
    '#f0ad4e',
    '#ff61d9',
    '#ff9090',
    '#ffc500',
    '#041445',
    '#717287',
    '#d9534f',
    '#5e9a78',
  ];
  return colorValues[Math.floor(Math.random() * 15)];
};

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
  courseCard: {
    height: '100px',
    width: '150px',
    backgroundColor: `${RandomColor()}`,
    borderRadius: '20px',
    margin: 'auto',
  },
}));

const Courses = () => {
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
                <i className="fas fa-eye" />
                View More
              </h5>
            </Link>
          </Paper>
        </Popover>
        <br />
        <br />
        <h1 style={{ display: 'inline-block' }}>
          <i
            className="fas fa-book fa-sm"
            style={{ display: 'inline-block' }}
          />
{' '}
          Courses
        </h1>
        <br />
        <br />
        <Grid container spacing={2} style={{ justifyContent: 'space-around' }}>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper elevation={0} className={classes.courseCard}>
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper
              elevation={0}
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: `${RandomColor()}`,
                borderRadius: '20px',
                margin: 'auto',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper
              elevation={0}
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: `${RandomColor()}`,
                borderRadius: '20px',
                margin: 'auto',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2} style={{ justifyContent: 'space-around' }}>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper
              elevation={0}
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: `${RandomColor()}`,
                borderRadius: '20px',
                margin: 'auto',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper
              elevation={0}
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: `${RandomColor()}`,
                borderRadius: '20px',
                margin: 'auto',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper
              elevation={0}
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: `${RandomColor()}`,
                borderRadius: '20px',
                margin: 'auto',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2} style={{ justifyContent: 'space-around' }}>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper
              elevation={0}
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: `${RandomColor()}`,
                borderRadius: '20px',
                margin: 'auto',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper
              elevation={0}
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: `${RandomColor()}`,
                borderRadius: '20px',
                margin: 'auto',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.gridItem}
            style={{}}
          >
            <Paper
              elevation={0}
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: `${RandomColor()}`,
                borderRadius: '20px',
                margin: 'auto',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  paddingTop: '34px',
                  fontWeight: 'bold',
                }}
              >
                UCS101
              </h3>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <br />
      </Paper>
    </>
  );
};

export default Courses;
