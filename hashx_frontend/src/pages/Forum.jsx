import React from 'react';

import { Box, Grid, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FileSideView from '../components/FileSideView/FileSideView';
import LayoutWrapper from '../components/Layout/Layout';
import ForumExplore from '../components/ForumExplore/ForumExplore'

import { secondaryColor, textColor } from '../theme/theme';


const useStyles = makeStyles((theme) => ({
  headerText: {
    fontSize: '45px',
    color: '#000000',
    fontWeight: 'bolder',
  },
  box: {
    padding: '30px',
  },

  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  team: {
    marginTop: '115px',
    borderRadius: '40px',
    height: '500px',
    background: '#f0f0f3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '10px',
    textAlign: 'center',
  },
  img: {
    width: '100%',
    objectFit: 'contain',
    padding: 30,
  },
  title: {
    fontSize: '1.7rem',
    display: 'inline-block',
    fontWeight: 'bold',
    paddingTop: 20,
  },
}));

const Forum = ({ children }) => {
  const classes = useStyles();
  return (
    // <LayoutWrapper>
    //   <ForumExplore />
    // </LayoutWrapper>
    <LayoutWrapper>
       <Box className={classes.box}>
        <Grid container spacing={2}>
          <Grid item lg={9}>
              <ForumExplore />
          </Grid>
          <Grid item lg={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.team}>
                    <h3 className={classes.title}>FILTERS</h3>
                    <Divider variant="middle" />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Box>
    </LayoutWrapper>
   
  )
};

export default Forum;
