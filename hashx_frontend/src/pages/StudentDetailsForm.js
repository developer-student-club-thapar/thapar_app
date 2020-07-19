import React, { Fragment, useState, useEffect } from 'react';
import {
  Container,
  CssBaseline,
  Hidden,
  Grid,
  Paper,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Animation from '../components/Animation';
import NinjaAnimation from '../components/NinjaAnimation';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import '../styles/StudentDetailsForm.css';
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import {
  SEND_STUDENT_DETAILS,
  ALL_BATCHES,
  GET_BRANCHES,
} from './AuthQueriesMutations';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginPaper: {
    height: '100vh',
    borderRadius: '0px',
  },
}));

const StudentDetailsForm = () => {
  let batchesMap = new Map();
  let branchesMap = new Map();
  const classes = useStyles();
  const [
    getBatches,
    { loading: batchLoading, error: batchError, data: batchData },
  ] = useLazyQuery(ALL_BATCHES);
  const [
    getBranches,
    { loading: branchLoading, error: branchError, data: branchData },
  ] = useLazyQuery(GET_BRANCHES);
  // if (batchLoading || branchLoading) return 'Loading...';
  // if (batchError || branchError) return `Error! ${error.message}`;
  // batchData.allBatches.edges.map((batches) => {
  //   const { id: batchId, num } = batches.node;
  //   batchesMap.set(batchId, num);
  // });
  // branchData.allBranches.edges.map((branches) => {
  //   const { id: branchId, name } = branches.node;
  //   branchesMap.set(branchId, name);
  // });
  const [
    sendStudentData,
    {
      loading: studentSendLoading,
      error: studentSendError,
      data: studentSendData,
    },
  ] = useMutation(SEND_STUDENT_DETAILS);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [user, setUser] = useState({
    rollno: '',
    year: '',
    branch: '',
    batch: '',
    gender: '',
    bio: '',
    profile: '',
  });
  const { rollno, year, branch, batch, gender, bio } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      rollno === '' ||
      year === '' ||
      branch === '' ||
      batch === '' ||
      gender === ''
    ) {
      setOpen(true);
    } else {
      sendStudentData({
        variables: {
          branch: branch,
          batch: batch,
          gender: gender,
          rollno: rollno,
        },
      });

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
  try {
    // console.log(studentSenddata);
  } catch (e) {
    console.log(e);
  }

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
              <Grid container spacing={2} style={{ paddingTop: '30px' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <h1 style={{ fontWeight: 'bold' }}>
                    Tell us more about yourself
                  </h1>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
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
                            id="rollno"
                            label="Roll no"
                            variant="outlined"
                            style={{ width: '300px' }}
                            onChange={onChange}
                            value={rollno}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            required
                          />
                        </Grid>
                      </Grid>
                      <br />

                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <select
                            name="year"
                            id="year"
                            value={year}
                            onChange={onChange}
                            className="select-css"
                          >
                            <option value="">Year</option>
                            <option>First Year</option>
                            <option>Second Year</option>
                            <option>Third Year</option>
                            <option>Fourth Year</option>
                          </select>
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <select
                            name="branch"
                            id="branch"
                            value={branch}
                            onChange={onChange}
                            className="select-css"
                          >
                            <option value="">Branch</option>
                            <option>COE</option>
                            <option>CSE</option>
                            <option>ENC</option>
                            <option>ECE</option>
                            <option>EIC</option>
                            <option>MEE</option>
                            <option>Civil</option>
                          </select>
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <select
                            name="batch"
                            id="batch"
                            value={batch}
                            onChange={onChange}
                            className="select-css"
                          >
                            <option value="">Batch</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                            <option>F</option>
                            <option>G</option>
                            <option>H</option>
                            <option>I</option>
                            <option>J</option>
                            <option>K</option>
                          </select>
                        </Grid>
                      </Grid>
                      <br />

                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <select
                            name="gender"
                            id="gender"
                            value={gender}
                            onChange={onChange}
                            className="select-css"
                          >
                            <option value="">Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextValidator
                            id="bio"
                            label="Bio (optional)"
                            variant="outlined"
                            style={{ width: '300px' }}
                            onChange={onChange}
                            value={bio}
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12} style={{ paddingLeft: '80px' }}>
                          <label for="profile">Profile Pic</label>
                          &nbsp;
                          <input
                            type="file"
                            id="profile"
                            name="profile"
                            accept=".png, .jpg"
                            onChange={onChange}
                          />
                        </Grid>
                      </Grid>

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
                            Proceed
                          </Button>
                          {studentSendLoading && <p>Loading...</p>}
                          {studentSendError && <p>Error :( Please try again</p>}
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
            Help us get to know you a little better.
          </h1>
          <NinjaAnimation />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default StudentDetailsForm;
