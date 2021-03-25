import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import CourseGrid from '../components/CourseGrid/CourseGrid';
import LayoutWrapper from '../components/Layout/Layout';
import { secondaryColor, textColor } from '../theme/theme';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '4rem 2rem',
  },
  headingGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  headingContainer: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '15px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      padding: 'auto',
    },
  },
  headingText: {
    fontSize: '24px',
    letterSpacing: '1px',
    lineHeight: '36px',
    fontWeight: '900',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.2rem',
      letterSpacing: 0,
    },
  },
  input: {
    backgroundColor: `${secondaryColor}`,
    border: 'none',
    borderRadius: '98px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '1rem',
    transition: 'all 0.1s ease-in',
    maxHeight: '70%',
    width: '260px',
    '&:focus': {
      outline: 'none',
      width: '300px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: '50%',
      '&:focus': {
        width: 'calc(50% + 40px)',
      },
    },
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));

const AllCourses = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  return (
    <LayoutWrapper>
      <Grid container spacing={2} className={classes.main} justify="center">
        <Grid item xs={6} className={classes.headingGrid}>
          <Paper elevation={3} className={classes.headingContainer}>
            <div className={classes.headingText}>All Courses</div>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.flexRow}>
          <input
            type="search"
            className={classes.input}
            placeholder="Search for a course"
            name="search"
            id="search"
          />
        </Grid>
        <Grid item xs={12}>
          <CourseGrid pathname={pathname} />
        </Grid>
      </Grid>
    </LayoutWrapper>
  );
};

export default AllCourses;
