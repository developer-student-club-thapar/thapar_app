import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal/Fade';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';
import { secondaryColor, textColor } from '../../theme/theme';
import { Grid } from '@material-ui/core';
import lightning from '../../assets/Home/Announcements/lightning.svg';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '900',
    fontSize: '24px',
    padding: '10px',
    textAlign: 'left',
    letterSpacing: '2px',
  },
  paperGrid: {
    borderRadius: '20px',
    textAlign: 'center',
    height: '400px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    marginTop: '10px',
  },
  paperMenu: {
    borderRadius: '15px',
    height: '100px',
    width: '90%',
    // backgroundColor: '#D2E2FF',
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'left',
    padding: 10,
    marginTop: '10px',
  },
  foodHeader: {
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '27px',
  },
  foodItems: {
    fontSize: '0.8rem',
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
        <Grid
          container
          alignItems="center"
          justify="space-around"
          spacing={3}
          style={{ paddingTop: 10 }}
        >
          <Grid item xs={8}>
            <h1 className={classes.title}>Mess Menu</h1>
          </Grid>
          <Grid item xs={2} container justify="flex-end">
            <img src={lightning} alt=" " />
          </Grid>
        </Grid>
        <Fade bottom cascade delay={600}>
          <Grid container spacing={6} style={{ padding: 10 }}>
            {menu.map((item, index) => (
              <Paper
                elevation={0}
                className={classes.paperMenu}
                style={{
                  backgroundColor: item.backgroundColor,
                }}
                key={index}
              >
                <Grid item xs={12}>
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
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Fade>
      </Paper>
    </>
  );
};

export default MessMenu;
