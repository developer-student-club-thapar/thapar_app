import React, { useContext } from 'react';
import CourseBox from '../CourseBox/CourseBox';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { ALL_COURSES } from './Queries';
import { getBranchId } from '../../graphql/UserData';
import Error from '../Error/Error';
import RocketAnimation from '../RocketAnimation';
import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles(() => ({
  papergrid: {
    borderRadius: '40px',
    height: 'fit-content',
    background: '#f0f0f3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  coursesgrid: {
    padding: '30px',
  },
}));

const CourseGrid = () => {
  const styles = useStyles();
  const { student } = useContext(UserContext);
  const { data, loading, error } = useQuery(ALL_COURSES, {
    variables: { id: student.branch?.id },
  });
  if (loading) {
    return (
      <div>
        <RocketAnimation />
      </div>
    );
  }
  if (
    error ||
    data.branch.course.edges === undefined ||
    data.branch.course.edges === null
  ) {
    return <Error />;
  }

  console.log(data);

  return (
    <>
      <Paper elevation={3} className={styles.papergrid}>
        <Grid container spacing={2} className={styles.coursesgrid}>
          {data && data.branch.course.edges.length > 0 ? (
            data.branch.course.edges.map((course, i) => {
              const { name, code, id } = course.node;
              return <CourseBox name={name} color="#fdcd55" id={id} key={i} />;
            })
          ) : (
            <h3 style={{ fontWeight: 'bolder' }}>No Courses Found</h3>
          )}
        </Grid>
      </Paper>
    </>
  );
};

export default CourseGrid;
