import React, { useState, useContext } from 'react';
import { Container, Grid, Paper, TextField } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import NinjaAnimation from '../components/NinjaAnimation';
import '../styles/StudentDetailsForm.css';
import { useMutation, useLazyQuery } from '@apollo/client';
import {
  SEND_STUDENT_DETAILS,
  GET_BRANCHES,
  GET_BATCHES,
} from '../graphql/AuthQueriesMutations';
import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';

const StudentDetailsForm = () => {
  const { setStudentData } = useContext(UserContext);
  const history = useHistory();
  const [
    getBranches,
    { loading: branchLoading, data: branchData },
  ] = useLazyQuery(GET_BRANCHES, {
    onCompleted: (data) => {
      console.log('data ', data);
      setBranchOptions(data);
    },
  });
  const [getBatches, { loading: batchLoading, data: batchData }] = useLazyQuery(
    GET_BATCHES,
    {
      onCompleted: (data) => {
        console.log('data', data);
        setBatchOptions(data);
      },
    },
  );
  // let batchesMap = new Map();
  // let branchesMap = new Map();

  //* ***GraphQL Query *//
  // const [
  //   getBatches,
  //   { loading: batchLoading, error: batchError, data: batchData },
  // ] = useLazyQuery(GET_BATCHES);
  // const [
  //   getBranches,
  //   { loading: branchLoading, error: branchError, data: branchData },
  // ] = useLazyQuery(GET_BRANCHES);
  //* * *//

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
  ] = useMutation(SEND_STUDENT_DETAILS, {
    onCompleted: (data) => {
      const { student } = data.createStudent;
      // * Sets student data to global context * //
      setStudentData(student);
      history.push('/dashboard');
    },
  });
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [branchOptions, setBranchOptions] = useState(null);
  const [batchOptions, setBatchOptions] = useState(null);

  const [user, setUser] = useState({
    rollno: '',
    year: '',
    branch: '',
    batch: '',
    gender: '',
    bio: '',
    invitedCode: '',
  });
  const { rollno, year, branch, batch, gender, bio, invitedCode } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const onChangeYear = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    getBranches({ variables: { year: e.target.value } });
    if (branchLoading) {
      console.log('loading');
    }
    if (branchData) {
      console.log(branchData);
      // setBranchOptions(branchData);
    }
  };
  const onChangeBranch = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    getBatches({ variables: { branch: e.target.value } });
    if (batchLoading) {
      console.log('loading');
    }
    if (batchData) {
      // console.log(batchData);
    }
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
          invitedCode: invitedCode,
          bio: bio,
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
    <>
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
                          <TextField
                            id="rollno"
                            label="Roll no"
                            variant="outlined"
                            style={{ width: '300px' }}
                            onChange={onChange}
                            value={rollno}
                            error={rollno !== '' && rollno.length !== 9}
                            helperText={
                              rollno !== '' &&
                              rollno.length !== 9 &&
                              'Please enter a valid Roll No'
                            }
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
                            onChange={onChangeYear}
                            className="select-css"
                          >
                            <option value="">Year</option>
                            <option value="FR">First Year</option>
                            <option value="SO">Second Year</option>
                            <option value="JR">Third Year</option>
                            <option value="SR">Fourth Year</option>
                          </select>
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          {branchOptions ? (
                            <select
                              name="branch"
                              id="branch"
                              value={branch}
                              onChange={onChangeBranch}
                              className="select-css"
                            >
                              <option value="">Select a branch</option>
                              {branchOptions.allBranches.edges.map((item) => (
                                <option key={item.node.id} value={item.node.id}>
                                  {item.node.name}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <select className="select-css">
                              <option value="">Select a branch</option>
                            </select>
                          )}
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          {batchOptions ? (
                            <select
                              name="batch"
                              id="batch"
                              value={batch}
                              onChange={onChange}
                              className="select-css"
                            >
                              <option value="">Select a batch</option>
                              {batchOptions.allBatches.edges.map((item) => (
                                <option key={item.node.id} value={item.node.id}>
                                  {item.node.num}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <select className="select-css">
                              <option value="">Select a batch</option>
                            </select>
                          )}
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
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="T">Transgender</option>
                          </select>
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            id="invitedCode"
                            label="Invite Code"
                            variant="outlined"
                            style={{ width: '300px' }}
                            onChange={onChange}
                            value={invitedCode}
                            error={invitedCode !== '' && invitedCode.length > 8}
                            helperText={
                              invitedCode !== '' &&
                              invitedCode.length > 8 &&
                              'Please enter a valid invite code'
                            }
                            required
                          />
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextValidator
                            id="bio"
                            label="Bio"
                            variant="outlined"
                            style={{ width: '300px' }}
                            onChange={onChange}
                            value={bio}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            required
                          />
                        </Grid>
                      </Grid>
                      <br />
                      {/* <Grid container spacing={2}>
                        <Grid item xs={12} style={{ paddingLeft: '80px' }}>
                          <label htmlFor="profile">Profile Pic</label>
                          &nbsp;
                          <input
                            type="file"
                            id="profile"
                            name="profile"
                            accept=".png, .jpg"
                            onChange={onChange}
                          />
                        </Grid>
                      </Grid> */}

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
    </>
  );
};

export default StudentDetailsForm;
