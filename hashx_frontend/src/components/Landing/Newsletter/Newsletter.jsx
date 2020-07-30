import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { animated, useSpring } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFFF0',
    [theme.breakpoints.down('sm')]: {
      paddingX: '0px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingX: '90px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingX: '140px',
      paddingTop: '50px',
    },
  },
  textBox: {
    display: 'flex',
    flexFlow: 'column',
    color: '#171313',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      paddingTop: '50px',
      paddingBottom: '50px',
      paddingX: '10%',
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
      paddingTop: '70px',
      paddingBottom: '70px',
      paddingLeft: '50%',
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      paddingTop: '70px',
    },
  },
  boxBg: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '15vh',
    },
  },
  bg: {
    maxWidth: '100%',
  },
  peepCrowd: {
    position: 'absolute',
    placeSelf: 'flex-end',
    width: '1400px',
    maxWidth: '100%',
  },

  responsiveSize: {
    postion: 'relative',
    display: 'inline',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '24px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '56px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '72px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '102x',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '112px',
      paddingTop: '50px',
      paddingBottom: '50px',
    },
  },

  svg: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      height: '35px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '75px',
    },
    [theme.breakpoints.up('md')]: {
      height: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '100px',
    },
    [theme.breakpoints.up('xl')]: {
      height: '150px',
    },
  },

  responsiveBtnSize: {
    'stroke-dasharray': 1000,
    'stroke-dashoffset': 1000,
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '30px',
    },
  },
}));

const textFieldStyles = (theme) => ({
  root: {
    '& .MuiInputBase-input': {
      color: 'black',
      [theme.breakpoints.down('sm')]: {
        fontSize: 'small',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 'medium',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 'large',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 'x-large',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 'xx-large',
      },
    },
    '& .MuiInput-underline:after': {
      borderBottom: '4px solid black',
    },
  },
});

const Newsletter = () => {
  const CssTextField = withStyles(textFieldStyles)(TextField);
  const classes = useStyles();
  const props = useSpring({ x: 100, from: { x: 0 }, delay: 2000 });
  return (
    <Box pt={5} px={5} className={classes.root}>
      <Grid container direction="column" justify="flex-start" style={{}}>
        <Grid item>
          <Typography variant="h1" className={classes.responsiveSize}>
            Get early access to{' '}
            <span variant="h1" className={classes.responsiveSize}>
              <animated.svg
                strokeDashoffset={props.x}
                className={classes.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 68"
              >
                <g
                  fill="none"
                  stroke="#195190FF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M105 10C28-9-29 40 34 56c62 16 91-29 66-29" />
                  <path d="M109 16C82-20-56 21 30 55s105-27 75-45" />
                </g>
              </animated.svg>{' '}
              Vexio
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.textBox}
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'baseline',
          }}
        >
          <Button style={{ outline: 'none' }} disableFocusRipple>
            <Box className={classes.responsiveBtnSize}>send</Box>
          </Button>
          <CssTextField
            label=""
            style={{ margin: 8, width: '100%', right: 0, fontSize: '36px' }}
            placeholder="We have saved a spot for your email!"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: '5vh', postion: 'relative' }}>
          <Box className={classes.boxBg}>
            <img
              className={classes.bg}
              alt="ripple"
              src="https://scrimba.com/static/art/shape-coral.svg"
            />
            <img
              className={classes.peepCrowd}
              alt="ripple"
              src="https://scrimba.com/static/art/peep-crowd.svg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Newsletter;
