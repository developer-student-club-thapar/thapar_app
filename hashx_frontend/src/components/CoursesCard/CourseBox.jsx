import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  course: {
    borderRadius: '40px',
    height: '60px',
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
    <Grid item xs={12} className={styles.courseBox}>
      <Paper elevation={2} className={styles.course}>
        <div
          style={{
            textAlign: 'center',
            paddingTop: '7px',
          }}
        >
          <h1 className={styles.courseName}>{props.subject}</h1>
        </div>
      </Paper>
    </Grid>
  );
};

export default CourseBox;
