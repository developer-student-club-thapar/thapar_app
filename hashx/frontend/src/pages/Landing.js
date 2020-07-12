import React , {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Deck from '../components/Landing/Deck';
import {UserContext} from '../context/UserProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainSection: {
    height: '100vh',
    backgroundColor: '#FFBC4B',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: '80px',
    marginTop: '100px',
    fontFamily: 'Gugi',
  },
  button: {
    backgroundColor: '#ffffff',
    marginTop: '60px',
    color: '#000000',
    borderRadius: '50px',
    fontFamily: 'Arapey',
    fontWeight: 'bolder',
    fontSize: '18px',
  },
}));

const Landing = () => {
  const classes = useStyles();
  const { addGoogleToken , authenticate , user } = useContext(UserContext);
  const responseGoogle = (response) => {
    addGoogleToken(response.wc.access_token);
    
  };
  const responseGoogleFail = (response) => {
    console.log(response);
    console.log('fail');
  };
  
  return (
    
    <>
    {console.log(user)}
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.mainSection}>
          <Container fixed>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <h1 className={classes.mainTitle}>We got you covered</h1>
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
              </Grid>
              <Grid item xs={6}>
                <Deck />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
