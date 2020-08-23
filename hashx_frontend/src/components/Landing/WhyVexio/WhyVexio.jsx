import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  turbanMan: {
    position: 'relative',
    width: '36%',
    top: '20px',
    left: '-48px',
    maxWidth: '150px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  wheelChairGirl: {
    position: 'relative',
    right: '6%',
    width: '40%',
    top: '40px',
    maxWidth: '170px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  laptopMan: {
    position: 'relative',
    width: '40%',
    left: '0px',
    maxWidth: '170px',
    top: '30px',
    [theme.breakpoints.down('sm')]: {
      top: '10px',
    },
  },

  textContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: '15px',
    },
  },

  textBox: {
    [theme.breakpoints.between('md', 'lg')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },

  heading: {
    [theme.breakpoints.down('md')]: {
      padding: '15px',
    },
  },

  container: {
    backgroundColor: 'white',
  },

  textContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: '15px',
    },
  },

  textBox: {
    [theme.breakpoints.between('md', 'lg')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },

  heading: {
    [theme.breakpoints.down('md')]: {
      padding: '15px',
    },
  },

  container: {
    backgroundColor: 'white',
  },
}));
const WhyVexio = () => {
  const classes = useStyles();
  return (
    <Box p={5} className={classes.container}>
      <Grid container justify="space-between">
        <Grid item container direction="column" xs={12} md={5} lg={5}>
          <Grid item>
            <h1 style={{ textAlign: '', fontSize: '48px' }}>Why Vexio?</h1>
          </Grid>
          <Grid item container>
            <Grid item direction="row">
              <Box style={{ position: 'relative' }}>
                <img
                  className={classes.laptopMan}
                  src="https://scrimba.com/static/art/peep-guy-macbook.svg"
                  alt="laptop-peep-guy"
                />
                <img
                  className={classes.wheelChairGirl}
                  src="https://scrimba.com/static/art/peep-girl-wheelchair.svg"
                  alt="wheelchair-peep-girl"
                />
                <img
                  className={classes.turbanMan}
                  src="https://scrimba.com/static/art/peep-man-bearded.svg"
                  alt="turban-peep-guy"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>{' '}
        {/* container1 */}
        <Grid item container xs={12} md={6} className={classes.textBox}>
          <Grid item container xs={12} lg={6} className={classes.textContainer}>
            <Grid item>
              <h1
                style={{ borderLeft: '6px solid pink', paddingLeft: '15px' }}
                className={classes.heading}
              >
                {' '}
                Made by the students{' '}
              </h1>
            </Grid>
            <Grid item>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                deleniti repudiandae. At quod nobis rerum!
              </h6>
            </Grid>
          </Grid>
          {/* 2nd container done */}
          <Grid item container xs={12} lg={6} className={classes.textContainer}>
            <Grid item>
              <h1
                style={{ borderLeft: '6px solid purple', paddingLeft: '15px' }}
                className={classes.heading}
              >
                For the students
              </h1>
            </Grid>
            <Grid item>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                deleniti repudiandae. At quod nobis rerum!
              </h6>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyVexio;
