import React, { Fragment, useState, useEffect } from 'react';
import { Container, CssBaseline, Hidden, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Animation from '../components/Animation';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginPaper: {
    height: '100vh',
    borderRadius: '0px',
  },
}));

const Register = () => {
  const classes = useStyles();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseGoogleFail = (response) => {
    console.log(response);
    console.log('fail');
  };
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{ backgroundColor: 'white' }}
        >
          <Paper
            elevation={0}
            style={{
              height: '100vh',
              borderRadius: '0px',
            }}
          >
            <Container fixed>
              <Grid container spacing={2} style={{ paddingTop: '100px' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <h1 style={{ fontWeight: 'bold' }}>Create your Account</h1>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <h4>
                    Already have an account?{' '}
                    <span>
                      <Link to="/login">Log in</Link>
                    </span>
                  </h4>
                  <br />
                  <br />
                  <Grid item xs={12}>
                    <GoogleLogin
                      clientId={
                        '423818856081-ocfj6oq6okclmqokie0hp9rvru6nmjo6.apps.googleusercontent.com'
                      }
                      render={(renderProps) => (
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ backgroundColor: '#DE5246' }}
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
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{ textAlign: 'center', paddingTop: '100px' }}
        >
          <h1
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Raleway',
            }}
          >
            Your one stop application for everything Thapar!
          </h1>
          <Animation />
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default Register;
