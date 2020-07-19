import React, { useState  , useContext} from 'react';
import Navbar from '../components/Landing/Navbar';
import Deck from '../components/Landing/Deck';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Scroll from '../components/Landing/Scroll';
import { useMutation } from '@apollo/react-hooks';
import { SOCIAL_AUTH } from './AuthQueriesMutations';
import { useHistory } from 'react-router-dom';
import { spacing } from '@material-ui/system';
import GoogleLogin from 'react-google-login';
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { UserContext } from '../context/UserProvider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) =>
  createStyles({
    landingRoot: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      overflowX: 'hidden',
    },
    item: {
      width: '',
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: 'transparent',
    },
    deckBox: {
      position: 'relative',
      zIndex: '2',
      [theme.breakpoints.down('sm')]: { height: '35vh' },
      [theme.breakpoints.up('sm')]: { height: '50vh' },
      [theme.breakpoints.up('md')]: { height: '70vh' },
      [theme.breakpoints.up('lg')]: { height: '70vh' },
      [theme.breakpoints.up('xl')]: { height: '70vh' },
    },
    iconGridContainer: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justify: 'flex-start',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        justify: 'center',
        alignItems: 'center',
      },
    },
  }),
);

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 1)',
    boxShadow: theme.shadows[2],
    fontSize: '14px',
    borderRadius: '25px',
  },
}))(Tooltip);

const Landing = () => {
  const classes = useStyles();
  let history = useHistory();
  const [socialMutation, { loading: socialLoading, error: socialError }] = useMutation(SOCIAL_AUTH, {
    onCompleted(data) {
      if (data !== null || data !== undefined) {
        const { token, user, newUser } = data.socialAuth;
        localStorage.setItem('token', token)
        authenticate(user.id, user.username, token, newUser);
        if (newUser) {
          history.push(`/studentdetailform`);
        } else {
          history.push(`/`);
        }
      }
    },
  });
  const { addGoogleToken, authenticate, user } = useContext(UserContext);
  const responseGoogle = (response) => {
    addGoogleToken(response.wc.access_token);
    socialMutation({
      variables: {
        accessToken: response.wc.access_token,
      },
    });
    if (socialLoading) {
      console.log(socialLoading);
      return <h1>{socialLoading}</h1>;
    }
    if (socialError) {
      console.log(socialError);
      return <h1>{socialError}</h1>;
    }
  };
  const responseGoogleFail = (response) => {
    console.log(response);
    console.log('fail');
  };

  return (
    <div className={classes.landingRoot}>
      <Scroll />
      <Navbar />

      <br />
      <Box p={2}>
        <Grid
          container
          direction="row-reverse"
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} md={7}>
            <Box className={classes.deckBox}>
              {/* <Paper elevation={4} className={classes.deck}>
                yo
              </Paper> */}
              <Deck />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h3">PLACEHOLDER TEXT</Typography>
              <GoogleLogin
                clientId={
                  '423818856081-ocfj6oq6okclmqokie0hp9rvru6nmjo6.apps.googleusercontent.com'
                }
                render={(renderProps) => (
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    size="large"
                    endIcon={
                      <Icon style={{ color: '#9C69E2', fontSize: '40px' }}>
                        arrow_right_alt
                        </Icon>
                    }
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Sign up with Google
                  </Button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogleFail}
                cookiePolicy={'single_host_origin'}
                hostedDomain={'thapar.edu'}
              />
            </Paper>
          </Grid>
          <Grid
            container
            item
            className={classes.iconGridContainer}
            xs={12}
            md={1}
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <LightTooltip
                TransitionComponent={Zoom}
                title="Next Post"
                placement="right"
              >
                <IconButton aria-label="next">
                  <SkipNextIcon style={{ color: 'black' }} />
                </IconButton>
              </LightTooltip>
            </Grid>
            <Grid item>
              <LightTooltip
                TransitionComponent={Zoom}
                title="Previous Post"
                placement="right"
              >
                <IconButton aria-label="delete">
                  <SkipPreviousIcon style={{ color: 'black' }} />
                </IconButton>
              </LightTooltip>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Landing;
