// dont change the identation of imports its for legibility
// of importing componets material ui stuff 🤬
import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Landing.css';

import Navbar from '../components/Landing/Navbar/Navbar';
import Deck from '../components/Landing/CardPage/Deck';
import MouseScroll from '../components/Landing/CardPage/MouseScroll';
import CardList from '../components/Landing/CardPage/CardList';
import Newsletter from '../components/Landing/Newsletter/Newsletter';
import WhyVexio from '../components/Landing/WhyVexio/WhyVexio';
import AvatarButton from '../components/AvatarButton/AvatarButton';

import { useMutation } from '@apollo/client';
import { SOCIAL_AUTH } from '../graphql/AuthQueriesMutations';

import GoogleLogin from 'react-google-login';
import { UserContext } from '../context/UserProvider';
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import { spacing } from '@material-ui/system'; // dont delete this

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { animated, useSpring } from 'react-spring';
import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { setAccessToken, setRefreshToken } from '../util/token';
import Footer from '../components/Landing/Footer/Footer';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    page1Root: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
    },
    page2Root: {
      height: '100vh',
      width: '100vw',
      backgroundColor: '#ffdca4',
      backgroundImage: `url(${"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ffdca4'/%3E%3Cstop offset='1' stop-color='%23fff7e9'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23fff7f6' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23fff7f6' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23fff7f6' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23fff7f6' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.42'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E"})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
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
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: { height: '260px', width: '250px' },
      [theme.breakpoints.up('sm')]: { height: '420px', width: '370px' },
      [theme.breakpoints.up('md')]: { height: '460px', width: '420px' },
      [theme.breakpoints.up('lg')]: { height: '570px', width: '550px' },
      [theme.breakpoints.up('xl')]: { height: '730px', width: '700px' },
    },
    cardListGrid: {
      paddingTop: theme.spacing(4),
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
  const [color, setcolor] = useState('#eee');
  const classes = useStyles();
  const history = useHistory();
  const [
    socialMutation,
    { loading: socialLoading, error: socialError, data: socialData },
  ] = useMutation(SOCIAL_AUTH);
  const { addGoogleToken, authenticate } = useContext(UserContext);
  const responseGoogle = (response) => {
    addGoogleToken(response.accessToken);
    console.log('success');
    socialMutation({ variables: { accessToken: response.accessToken } });
    console.log(response);
    if (socialLoading) {
      console.log(socialLoading);
      return <h1>{socialLoading}</h1>;
    }
    if (socialError) {
      console.log(socialError);
      return <h1>{socialError}</h1>;
    }
    if (socialData) {
      const { token, user, newUser, jwtRefreshToken } = socialData.socialAuth;
      console.log(token, 'token');
      setAccessToken(token);
      setRefreshToken(jwtRefreshToken);
      authenticate(user.id, user.username, token, newUser);
      if (newUser) {
        history.push('/studentdetailform');
      } else {
        history.push('/dashboard');
      }
    }
  };
  const responseGoogleFail = (response) => {
    console.log(response);
    console.log('fail');
  };

  const props = useSpring({ backgroundColor: color });

  return (
    <>
      <animated.div id="main-container" className={classes.root} style={props}>
        <div className={classes.page1Root}>
          <MouseScroll />
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
                  <Deck setcolor={setcolor} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="h3">PLACEHOLDER TEXT</Typography>
                </Paper>
                <Box p={1} textAlign="center">
                  <CssBaseline>
                    <GoogleLogin
                      clientId="423818856081-ocfj6oq6okclmqokie0hp9rvru6nmjo6.apps.googleusercontent.com"
                      buttonText="Sign up with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogleFail}
                      cookiePolicy="single_host_origin"
                      hostedDomain="thapar.edu"
                    />
                  </CssBaseline>
                </Box>
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
      </animated.div>
      <WhyVexio />
      {/* Page 1 end page 2 start make these pages as seperate files */}
      <Box className="page2-root">
        <Grid container direction="row" style={{ height: '100%' }}>
          <Grid item xs={12} md={6}>
            <Box
              style={{
                justifyContent: 'center',
                display: 'flex',
                height: '100%',
              }}
              pt={2}
              px={2}
            >
              <Card
                elevation={0}
                style={{ backgroundColor: 'transparent', alignSelf: 'center' }}
              >
                <CardMedia
                  className={classes.imageContainer}
                  component="img"
                  alt="Contemplative Reptile"
                  image={require('../assets/college.png')}
                  title="Contemplative Reptile"
                />
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ alignSelf: 'center' }}>
            <Typography
              variant="h2"
              style={{
                fontWeight: '700',
                color: 'textSecondary',
                textAlign: 'center',
                display: 'block',
              }}
            >
              To strong beginnings
            </Typography>
            <Box
              m={3}
              style={{
                display: 'flex',
                justifyContent: 'center',
                outline: 'none',
              }}
            >
              <Link to="/campus-tour">
                <AvatarButton
                  collapsed={false}
                  text="Virtual Campus Tour"
                  icon="https://www.svgrepo.com/show/131150/college.svg"
                />
              </Link>
            </Box>
          </Grid>
          <Container maxWidth="lg">
            <Grid
              container
              item
              direction="row"
              justify="center"
              className={classes.cardListGrid}
            >
              <CardList />
            </Grid>
            <Box py={2} />
          </Container>
        </Grid>
      </Box>
      {/* Page 2 finish */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Landing;
