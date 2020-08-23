import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileSideView from '../FileSideView/FileSideView';
import Discussions from '../DiscussionsPanel/DiscussionsPanel';

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

const DiscussionsPanel = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className={classes.box}>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <FileSideView />
        </Grid>
        <Grid item lg={9}>
          <Discussions />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscussionsPanel;
