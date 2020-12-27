import React from 'react';
import { Grid } from '@material-ui/core';
import profile from '../../assets/profileImage.svg';

const CourseTeam = () => {
  return (
    <>
      <Grid container style={{ marginTop: '20px' }} justify="center">
        <Grid item xs={2}>
          <img
            src={profile}
            alt=" "
            height="60px"
            style={{ borderRadius: '50%' }}
          />
        </Grid>
        <Grid item xs={8} style={{ textAlign: 'left', padding: ' 5px 10px' }}>
          <h1 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
            Divanshu Agarwal
          </h1>
          <h1
            style={{
              fontSize: '0.8rem',
              color: 'gray',
            }}
          >
            @divanshuroxs
          </h1>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseTeam;
