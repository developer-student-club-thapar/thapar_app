import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Document from './ForumDetail/Document';
import SidePanel from './ForumDetail/SidePanel';

const useStyles = makeStyles(() => ({
  headerText: {
    fontSize: '45px',
    color: '#000000',
    fontWeight: 'bolder',
  },
  box: {
    padding: '30px',
  },
}));

const ForumDetail = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 className={classes.headerText}>
            Operator <span style={{ color: '#747474' }}>Overloading</span>
          </h1>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Document />
        </Grid>
        <Grid item xs={12} lg={4}>
          <SidePanel />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForumDetail;
