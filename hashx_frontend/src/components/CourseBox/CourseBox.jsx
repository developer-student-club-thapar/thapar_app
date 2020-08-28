import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  course: {
    borderRadius: '17px',
    display: 'grid',
    placeItems: 'center',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    height: '100px',
  },
  courseName: {
    fontSize: '18px',
    color: 'white',
  },
}));

const CourseBox = (props) => {
  const styles = useStyles();
  return (
    <Grid item xs={6}>
      <Paper
        elevation={3}
        className={styles.course}
        style={{ backgroundColor: props.color }}
      >
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
