import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

const useStyles = makeStyles(() => ({
  course: {
    borderRadius: '17px',
    display: 'grid',
    placeItems: 'center',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    height: '150px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  courseName: {
    fontSize: '18px',
    color: 'white',
    fontWeight: '800',
  },
}));

const RandomColor = () => {
  let colorValues = [
    '#C51212',
    '#117CCE',
    '#11B4CE',
    '#22D652',
    '#D9CC26',
    '#F87B0F',
    '#4C1AAF',
    '#f0ad4e',
    '#ff61d9',
    '#ff9090',
    '#ffc500',
    '#041445',
    '#717287',
    '#d9534f',
    '#5e9a78',
  ];
  return colorValues[Math.floor(Math.random() * 15)];
};

const CourseBox = (props) => {
  const { name, id, code, color } = props;
  const styles = useStyles();
  const history = useHistory();
  return (
    <Grid item xs={6}>
      <motion.div whileHover={{ scale: 0.9 }} transition={transition}>
        <Paper
          elevation={3}
          className={styles.course}
          style={{ backgroundColor: `${RandomColor()}` }}
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
      </motion.div>
    </Grid>
  );
};

export default CourseBox;
