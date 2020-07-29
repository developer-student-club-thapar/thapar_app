import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#171313',
    backgroundColor: 'whitesmoke',
  },
  text: {
    color: '#171313',
    fontWeight: 'bold',
    paddingTop: '100px',
    paddingLeft: '50px',
  },
  textField: {
    color: 'white',
  },
  root2: {
    padding: '2px 4px',
    display: 'flex',
    marginLeft: 'auto',
    width: 800,
    textAlign: 'end',
  },
  peepCrowd: {
    display: 'flex',
    margin: 'auto',
    paddingTop: '8vh',
    paddingleft: '40px',
    width: '1400px',
    maxWidth: '100%',
  },
  bg: {
    position: 'absolute',
    // zIndex: 1,
    width: '50%',
    'mix-blend-mode': 'multiply',
  },

  responsiveSize: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '36px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '48px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '72px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '96px',
    },
  },
}));

const Newsletter = () => {
  const CssTextField = withStyles({
    root: {
      '& .MuiInputBase-input': {
        color: 'black',
        fontSize: '36px',
      },
      '& .MuiInput-underline:after': {
        borderBottom: '4px solid black',
      },
    },
  })(TextField);
  const classes = useStyles();
  return (
    <Box px={5} pt={5} className={classes.root} style={{ paddingX: '200px' }}>
      <Grid container direction="column" justify="flex-start" style={{}}>
        <Grid item className={classes.text}>
          <Typography
            variant="h1"
            className={classes.responsiveSize}
            style={{ fontWeight: '700' }}
          >
            Want updates about Vexio
          </Typography>
          <Typography
            variant="h1"
            className={classes.responsiveSize}
            style={{ fontWeight: '700' }}
          >
            sent straight to your
            <span
              variant="h1"
              className={classes.responsiveSize}
              style={{ fontWeight: '700' }}
            >
              {' '}
              inbox
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.text}
          style={{ display: 'flex', flexDirection: 'row-reverse' }}
        >
          <Button style={{ outline: 'none' }} disableFocusRipple>
            <Box style={{ fontSize: '24px' }}>send</Box>
          </Button>
          <CssTextField
            id="standard-full-width"
            label=""
            style={{ margin: 8, width: '40%', right: 0, fontSize: '36px' }}
            placeholder="We have saved a spot for your email!"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: '5vh', postion: 'relative' }}>
          <Box
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: ' center',
            }}
          >
            <img
              className={classes.bg}
              alt="ripple"
              src="https://scrimba.com/static/art/shape-coral.svg"
            />
          </Box>
          <div>
            <img
              className={classes.peepCrowd}
              alt="team"
              src="https://scrimba.com/static/art/peep-crowd.svg"
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Newsletter;
