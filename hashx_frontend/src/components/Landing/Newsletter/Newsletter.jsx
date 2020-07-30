import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

  responsiveBtnSize: {
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
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '112px',
    // },
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
  return (
    <Box pt={5} px={5} className={classes.root}>
      <Grid container direction="column" justify="flex-start" style={{}}>
        <Grid item>
          <Typography
            variant="h1"
            className={classes.responsiveSize}
            style={{ fontWeight: '700' }}
          >
            Get early access to
            <span
              variant="h1"
              className={classes.responsiveSize}
              style={{ fontWeight: '700' }}
            >
              {' '}
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
