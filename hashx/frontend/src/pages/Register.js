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
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const { username, email, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      username === '' ||
      email === '' ||
      password === '' ||
      password2 === ''
    ) {
      setOpen(true);
    } else if (password !== password2) {
      setOpen2(true);
    } else {
      console.log(user);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
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
                    <ValidatorForm
                      onError={(errors) => console.log(errors)}
                      onSubmit={onSubmit}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextValidator
                            id="username"
                            label="Username"
                            variant="outlined"
                            style={{ width: '300px' }}
                            onChange={onChange}
                            value={username}
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                        </Grid>
                      </Grid>
                      <br />

                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextValidator
                            id="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            style={{ width: '300px' }}
                            onChange={onChange}
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                              'this field is required',
                              'email is not valid',
                            ]}
                          />
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextValidator
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            style={{ width: '300px' }}
                            value={password}
                            onChange={onChange}
                            helperText="Password should be atleast 8 characters"
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            id="password2"
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            style={{ width: '300px' }}
                            value={password2}
                            onChange={onChange}
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={[
                              'password mismatch',
                              'this field is required',
                            ]}
                          />
                        </Grid>
                      </Grid>
                      <br />
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{
                              width: '300px',
                              backgroundColor: '#1B233A',
                            }}
                            onClick={onSubmit}
                          >
                            Register
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                          >
                            <Alert
                              onClose={handleClose}
                              severity="error"
                              variant="filled"
                            >
                              Please fill all the details
                            </Alert>
                          </Snackbar>
                          <Snackbar
                            open={open2}
                            autoHideDuration={6000}
                            onClose={handleClose2}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                          >
                            <Alert
                              onClose={handleClose2}
                              severity="error"
                              variant="filled"
                            >
                              Passwords did not match
                            </Alert>
                          </Snackbar>
                        </Grid>
                      </Grid>
                    </ValidatorForm>
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

export default Register;
