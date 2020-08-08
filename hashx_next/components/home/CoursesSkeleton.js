import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
    width: 'auto',
  },
  courseCard: {
    height: '100px',
    width: '150px',
    // backgroundColor: `${RandomColor()}`,
    borderRadius: '20px',
    margin: 'auto',
    cursor: 'pointer',
  },
  paperGrid: {
    borderRadius: '20px',
    textAlign: 'center',
    height: '500px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
}));

const CoursesSkeleton = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paperGrid}>
      <br />
      <br />
      <h1 style={{ display: 'inline-block' }}>
        <i className="fas fa-book fa-sm" style={{ display: 'inline-block' }} />{' '}
        Courses
      </h1>
      <br />
      <br />
      <Grid container spacing={2} style={{ justifyContent: 'space-around' }}>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.gridItem}
          style={{}}
        >
          <Skeleton
            variant="rect"
            animation="wave"
            className={classes.courseCard}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CoursesSkeleton;
