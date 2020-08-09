import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  course: {
    borderRadius: '40px',
  
    background: '#b1adff',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  courseName: {
    fontSize: '18px',
  },
  courseBox: {
    paddingLeft: '15px',
    paddingTop: '20px',
  },
}));

const CourseBox = (props) => {
  const styles = useStyles();
  return (
    <Grid item xs={12}  lg={4} xl={4} className={styles.courseBox}>
      <Paper elevation={2} className={styles.course}>
          <Typography className={styles.courseName}>{props.subject}</Typography>
         </Paper>
    </Grid>
  );
};

export default CourseBox;
