import React, { memo } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

const useStyles = makeStyles(() => ({
  course: {
    backgroundColor: (props) => props.backgroundColor,
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

// * Generates a colour hex from a string input
const stringToColour = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};

const CourseBox = (props) => {
  const { name, id, code } = props;
  const backgroundColor = stringToColour(name);
  const styles = useStyles({ backgroundColor });
  const history = useHistory();
  return (
    <Grid item xs={6}>
      <motion.div whileHover={{ scale: 0.9 }} transition={transition}>
        <Paper
          elevation={3}
          className={styles.course}
          // style={{ backgroundColor: `${RandomColor()}` }}
          onClick={() => {
            history.push(`/courses/${id}/tutorial`);
          }}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '5px',
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

export default memo(CourseBox);
