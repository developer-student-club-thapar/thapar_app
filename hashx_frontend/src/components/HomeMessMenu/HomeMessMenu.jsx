import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal/Fade';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';
import { secondaryColor, textColor } from '../../theme/theme';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
  paperMenu: {
    borderRadius: '15px',
    height: '100px',
    // backgroundColor: '#D2E2FF',
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'left',
    padding: 10,
  },
  foodHeader: {
    fontWeight: 'bolder',
  },
  foodItems: {
    fontSize: '1.1rem',
  },
}));

const MessMenu = () => {
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
  const menu = [
    {
      type: 'Breakfast',
      foodItems: 'Egg , Aaloo Paratha , Rajma , Bournvita Milk , Poha',
      backgroundColor: '#D2E2FF',
      fontColor: 'black',
    },
    {
      type: 'Lunch',
      foodItems: 'Egg , Aaloo Paratha , Rajma , Bournvita Milk , Poha',
      backgroundColor: '#FFF7AD',
      fontColor: 'black',
    },
    {
      type: 'Dinner',
      foodItems: 'Egg , Aaloo Paratha , Rajma , Bournvita Milk , Poha',
      backgroundColor: '#364F88',
      fontColor: 'white',
    },
  ];
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
            className="fas fa-utensils fa-sm"
            style={{ display: 'inline-block' }}
          />{' '}
          Mess Menu
        </h1>
        <br />
        <br />
        <Fade bottom cascade delay={600}>
          <Grid container spacing={2}>
            {menu.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={0}
                  className={classes.paperMenu}
                  style={{
                    backgroundColor: item.backgroundColor,
                  }}
                >
                  <h3
                    className={classes.foodHeader}
                    style={{ color: item.fontColor }}
                  >
                    {item.type}
                  </h3>
                  <p
                    className={classes.foodItems}
                    style={{ color: item.fontColor }}
                  >
                    {item.foodItems}
                  </p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Paper>
    </>
  );
};

export default MessMenu;
