import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  course: {
    borderRadius: '17px',
    display: 'grid',
    placeItems: 'center',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    height: '150px',
  },
  courseName: {
    fontSize: '18px',
    color: 'white',
    fontWeight: '800',
  },
}));

const CourseBox = (props) => {
  const { name, id, code, color } = props;
  const styles = useStyles();
  const history = useHistory();
  return (
    <Grid item xs={6}>
      <Paper
        elevation={3}
        className={styles.course}
        style={{ backgroundColor: color }}
        onClick={() => {
          history.push(`/courses/${id}/tutorials`);
        }}
      >
        <div
          style={{
            textAlign: 'center',
            paddingTop: '7px',
          }}
        >
          <h1 className={styles.courseName}>{name}</h1>
          <h1 className={styles.courseName}>{code}</h1>
        </div>
      </Paper>
    </Grid>
  );
};

export default CourseBox;
