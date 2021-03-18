import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CourseBox from '../CourseBox/CourseBox';
import { Grid, Paper, makeStyles, Button } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { ALL_COURSES, MY_COURSES } from './Queries';
import Error from '../Error/Error';
import RocketAnimation from '../RocketAnimation';
import { UserContext } from '../../context/UserProvider';
import { useHistory } from 'react-router';

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
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btn: {
    backgroundColor: '#00293B',
    color: '#fff',
    borderRadius: '20px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#00293B',
    },
  },
  mainBtnContainer: {
    padding: '2rem 2rem 1rem 2rem',
    justifyContent: 'flex-end',
  },
}));

const CourseGrid = ({ pathname }) => {
  const styles = useStyles();
  const history = useHistory();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const {
    student: { id },
  } = useContext(UserContext);
  const returnQuery = () => {
    if (pathname === '/all-courses') {
      return ALL_COURSES;
    } else if (pathname === '/courses-overview') {
      return MY_COURSES;
    }
  };
  const returnVariables = () => {
    if (pathname === '/all-courses') {
      return { variables: { after: null } };
    } else if (pathname === '/courses-overview') {
      return {
        variables: { id },
      };
    }
  };
  const { data, loading, error, fetchMore } = useQuery(
    returnQuery(),
    returnVariables(),
  );
  // * Fetches more data after user reaches the end of the page
  useEffect(() => {
    if (inView === true && pathname === '/all-courses') {
      const { endCursor } = data?.allCourses?.pageInfo;
      fetchMore({
        variables: {
          after: endCursor,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.allCourses.edges = [
            ...prevResult.allCourses.edges,
            ...fetchMoreResult.allCourses.edges,
          ];
          return fetchMoreResult;
        },
      });
    }
  }, [inView]);

  if (loading) {
    return (
      <div>
        <RocketAnimation />
      </div>
    );
  }
  if (
    (pathname === '/allcourses' &&
      (error ||
        data.allCourses?.edges === undefined ||
        data.allCourses?.edges === null)) ||
    (pathname === '/courses-overview' &&
      (error ||
        data.student?.subscribedCourses.edges === undefined ||
        data.student?.subscribedCourses.edges === null))
  ) {
    return <Error />;
  }

  let courses;

  if (pathname === '/all-courses') {
    courses = data.allCourses;
  }

  if (pathname === '/courses-overview') {
    courses = data.student?.subscribedCourses;
  }

  return (
    <>
      <Paper elevation={3} className={styles.papergrid}>
        <div className={`${styles.flexRow} ${styles.mainBtnContainer}`}>
          {pathname === '/courses-overview' && courses?.edges.length > 0 && (
            <Button
              variant="contained"
              className={styles.btn}
              onClick={() => {
                history.push('/all-courses');
              }}
            >
              View All Courses
            </Button>
          )}
        </div>
        <Grid container spacing={2} className={styles.coursesgrid}>
          {courses?.edges.length > 0 ? (
            courses.edges.map((course, i) => {
              const { name, code, id } = course.node;
              return <CourseBox name={name} id={id} key={i} />;
            })
          ) : (
            <div className={styles.flexRow}>
              <h3 style={{ fontWeight: 'bolder' }}>No Courses Found</h3>
              <Button
                variant="contained"
                className={styles.btn}
                onClick={() => {
                  history.push('/all-courses');
                }}
              >
                View All Courses
              </Button>
            </div>
          )}
          <div ref={ref} />
        </Grid>
      </Paper>
    </>
  );
};

export default CourseGrid;
