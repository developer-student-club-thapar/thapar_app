import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Route, Redirect, withRouter } from 'react-router-dom';
import CoursesSkeleton from './CoursesSkeleton';
import { motion } from 'framer-motion';

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

const COURSES_QUERY = gql`
  query CoursesQuery {
    allCourses {
      edges {
        node {
          code
          id
        }
      }
    }
  }
`;

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
}));

const Courses = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { loading, error, data } = useQuery(COURSES_QUERY);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  if (loading) return <CoursesSkeleton />;
  if (error) {
    <CoursesSkeleton />;
  }
  console.log(data);
  console.log(props);
  return (
    <Fragment>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: '20px',
          textAlign: 'center',
          height: '500px',
          backgroundColor: '#2C3055',
          color: '#FBF9FF',
        }}
      >
        <IconButton
          color="inherit"
          style={{
            height: '35px',
            float: 'right',
          }}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Paper elevation={0} style={{ width: '' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h5 style={{ margin: 'auto' }}>
                <i class="fas fa-eye"></i> View More
              </h5>
            </Link>
          </Paper>
        </Popover>
        <br />
        <br />
        <h1 style={{ display: 'inline-block' }}>
          <i
            className="fas fa-book fa-sm"
            style={{ display: 'inline-block' }}
          />{' '}
          Courses
        </h1>
        <br />
        <br />
        <Grid container spacing={2} style={{ justifyContent: 'space-around' }}>
          {data.allCourses !== null &&
            data.allCourses.edges.map((course) => {
              const colorBG = `${RandomColor()}`;
              return (
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
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Paper
                      elevation={0}
                      className={classes.courseCard}
                      style={{ backgroundColor: `${colorBG}` }}
                      onClick={() => {
                        props.history.push(
                          `/course/tutorials/${course.node.id}`,
                        );
                      }}
                    >
                      <h3
                        style={{
                          color: 'white',
                          paddingTop: '34px',
                          fontWeight: 'bold',
                        }}
                      >
                        {course.node.code}
                      </h3>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
        </Grid>
        <br />
        <br />
      </Paper>
    </Fragment>
  );
};

export default withRouter(Courses);
