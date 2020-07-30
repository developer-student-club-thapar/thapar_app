import React from 'react';
import { Hidden } from '@material-ui/core';
import { Box, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { Root } from '@mui-treasury/layout';
import { gql } from 'apollo-boost';
import { useHistory } from 'react-router-dom';
import Tutorials from '../components/CourseDetails/Tutorials';
import Books from '../components/CourseDetails/Books';
import Notes from '../components/CourseDetails/Notes';
import PreviousYearPapers from '../components/CourseDetails/PreviousYearPapers';
import { makeStyles } from '@material-ui/core/styles';
import TutorialsSolution from '../components/CourseDetails/TutorialsSolution';
import { secondaryColor } from '../theme/theme';
import {
  DrawerSidebar,
  useStyles,
  SidebarContent,
  scheme,
  Content,
} from '../components/home/Global';
import Sidebar from '../components/Dashboard/Sidebar';

const useClasses = makeStyles(() => ({
  box: {
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  logo: {
    fontSize: '36px',
    fontWeight: 'bolder',
    color: '#C4C5D1',
  },
  breadCrumbs: {
    height: '5vh',
    display: 'grid',
    placeItems: 'center',
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: `${secondaryColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  breadCrumbsText: {
    color: '#747474',
    fontSize: 25,
    margin: '0 auto',
  },
  heroPaper: {
    margin: 10,
    borderRadius: 15,
    textAlign: 'center',
    height: '100vh',
    backgroundColor: `${secondaryColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 45,
  },
  navigatioBar: {
    backgroundColor: '#00293B',
    height: '15vh',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '85.7vw',
  },
  listItemPrimary: {
    display: 'grid',
    placeItems: 'center',
    height: '150px',
  },
  listItem: {
    display: 'grid',
    placeItems: 'center',
    height: '150px',
    fontFamily: 'Lato',
    '&:hover': {
      backgroundColor: '#F0F0F3',
      cursor: 'pointer',
    },
  },
  logoIcons: {
    height: '70px',
    width: '70px',
    backgroundImage:
      'linear-gradient(224.38deg, #E9E9E9 5.75%, #E9E9E9 93.61%)',
    borderRadius: '20px',
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
  },
  listText: {
    fontSize: '17px',
    color: '#ffffff',
    '&:hover': {
      color: '#00293B',
    },
  },
  listItemActive: {
    display: 'grid',
    placeItems: 'center',
    height: '150px',
    backgroundColor: '#F0F0F3',
    fontFamily: 'Lato',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  logoIconsActive: {
    height: '70px',
    width: '70px',
    backgroundImage:
      'linear-gradient(224.38deg, #E9E9E9 5.75%, #E9E9E9 93.61%)',
    borderRadius: '20px',
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
    boxShadow:
      '10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px #FFFFFF',
  },
  listTextActive: {
    fontSize: '17px',
    color: '#00293B',
  },
}));

const CourseDetail = (props) => {
  const history = useHistory();
  const classes = useClasses();
  const styles = useStyles();
  const id = props.match.params.id;
  const path = history.location.pathname.split('/')[2];
  const COURSE_QUERY = gql`
    query CourseQuery {
      course(id: "${props.match.params.id}") {
        name
        code
      }
    }
  `;
  const { loading, error, data } = useQuery(COURSE_QUERY);
  if (loading) return <h4>Loading....</h4>;
  if (error) {
    console.log(error);
  }
  console.log(data);
  const renderComponent = () => {
    if (path === 'tutorials') {
      return <Tutorials id={id} path={path} />;
    } else if (path === 'books') {
      return <Books id={id} path={path} />;
    } else if (path === 'notes') {
      return <Notes id={id} path={path} />;
    } else if (path === 'previousyearpapers') {
      return <PreviousYearPapers id={id} path={path} />;
    } else if (path === 'tutorialssolution') {
      return <TutorialsSolution id={id} path={path} />;
    }
  };
  return (
    <Root scheme={scheme}>
      <DrawerSidebar
        sidebarId="primarySidebar"
        PaperProps={{ className: styles.sidebar }}
      >
        <SidebarContent>
          {/* <TextSidebar /> */}
          <Sidebar />
        </SidebarContent>
        {/* <CollapseBtn className={cx(styles.collapseBtn)} /> */}
      </DrawerSidebar>
      <Content className={styles.content}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12} lg={12} xl={12}>
            <Box
              elevation={0}
              style={{
                backgroundImage: `${secondaryColor}`,
              }}
            >
              <Grid
                container
                justify="flex-start"
                alignItems="stretch"
                style={{ padding: 30 }}
              >
                <Grid item xs={3}>
                  <img
                    src={require('../assets/kid.svg')}
                    style={{ marginLeft: '2vw' }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="flex-start"
                  >
                    <Grid item xs={5}>
                      <h1 className={classes.title}>
                        Computer{' '}
                        <span style={{ color: '#898989' }}>Science</span>
                      </h1>
                    </Grid>

                    <Grid item xs={4}>
                      <Paper
                        elevation={3}
                        className={classes.breadCrumbs}
                        style={{
                          width: '10vw',
                        }}
                      >
                        <h1 className={classes.breadCrumbsText}>UCS001</h1>
                      </Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper
                        elevation={3}
                        className={classes.breadCrumbs}
                        style={{
                          width: '15vw',

                          marginTop: 10,
                        }}
                      >
                        <h1 className={classes.breadCrumbsText}>
                          {'View Course Site ->'}
                        </h1>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className={classes.heroPaper}>
              <Grid item xs={2}>
                <Box className={classes.navigatioBar}>
                  <Grid container>
                    <Grid item xs={2} className={classes.listItem}>
                      <Paper elevation={0} className={classes.logoIcons}>
                        <i
                          className="fas fa-book fa-2x"
                          style={{ color: '#00293B' }}
                        />
                      </Paper>
                      <h2 className={classes.listText}>Courses</h2>
                    </Grid>
                    <Grid item xs={2} className={classes.listItem}>
                      <Paper elevation={0} className={classes.logoIcons}>
                        <i
                          className="fas fa-book fa-2x"
                          style={{ color: '#00293B' }}
                        />
                      </Paper>
                      <h2 className={classes.listText}>Courses</h2>
                    </Grid>
                    <Grid item xs={2} className={classes.listItem}>
                      <Paper elevation={0} className={classes.logoIcons}>
                        <i
                          className="fas fa-book fa-2x"
                          style={{ color: '#00293B' }}
                        />
                      </Paper>
                      <h2 className={classes.listText}>Courses</h2>
                    </Grid>
                    <Grid item xs={2} className={classes.listItem}>
                      <Paper elevation={0} className={classes.logoIcons}>
                        <i
                          className="fas fa-book fa-2x"
                          style={{ color: '#00293B' }}
                        />
                      </Paper>
                      <h2 className={classes.listText}>Courses</h2>
                    </Grid>
                    <Grid item xs={2} className={classes.listItem}>
                      <Paper elevation={0} className={classes.logoIcons}>
                        <i
                          className="fas fa-book fa-2x"
                          style={{ color: '#00293B' }}
                        />
                      </Paper>
                      <h2 className={classes.listText}>Courses</h2>
                    </Grid>
                    <Grid item xs={2} className={classes.listItem}>
                      <Paper elevation={0} className={classes.logoIcons}>
                        <i
                          className="fas fa-book fa-2x"
                          style={{ color: '#00293B' }}
                        />
                      </Paper>
                      <h2 className={classes.listText}>Courses</h2>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Hidden lgUp>
                <Grid
                  container
                  spacing={2}
                  style={{ height: '200px', textAlign: 'center' }}
                >
                  <Grid item xs={12}>
                    <select
                      name="course1"
                      id="course1"
                      style={{
                        width: '100%',
                        height: '50px',
                      }}
                    >
                      <option>About</option>
                      <option>Forums</option>
                      <option>Teacher's Details</option>
                      <option>Syllabus</option>
                    </select>
                  </Grid>
                  <Grid item xs={12}>
                    <select
                      name="course2"
                      id="course2"
                      style={{
                        width: '100%',
                        height: '50px',
                      }}
                    >
                      <option
                        onClick={() => {
                          history.push(`/course/tutorials/${id}`);
                        }}
                      >
                        Tutorials
                      </option>
                      <option
                        onClick={() => {
                          history.push(`/course/books/${id}`);
                        }}
                      >
                        Books
                      </option>
                      <option
                        onClick={() => {
                          history.push(`/course/notes/${id}`);
                        }}
                      >
                        Notes/Slides
                      </option>
                      <option
                        onClick={() => {
                          history.push(`/course/previousyearpapers/${id}`);
                        }}
                      >
                        Previous Year Papers
                      </option>
                      <option
                        onClick={() => {
                          history.push(`/course/tutorialssolution/${id}`);
                        }}
                      >
                        Tutorials Solution
                      </option>
                    </select>
                  </Grid>
                </Grid>
                <br />
                <br />
              </Hidden>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
                  {renderComponent()}
                </Grid>
                {/* <Hidden mdDown>
            <Grid item lg={3}>
              <RightNav id={props.match.params.id} path={path} />
            </Grid>
          </Hidden> */}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Content>
    </Root>
  );
};

export default CourseDetail;

// <Container fixed>
// <h1
//   style={{
//     paddingTop: '10px',
//     paddingLeft: '10px',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   }}
// >
//   'lol'
// </h1>
// {/* <h3 style={{ paddingLeft: '10px' }}>{data.course.code}</h3> */}
// <div style={{ textAlign: 'center' }}>
//   <Button
//     variant="contained"
//     color="primary"
//     size="large"
//     style={{ backgroundColor: `${secondaryColor}` }}
//     onClick={() => {
//       window.open(
//         'https://sites.google.com/a/thapar.edu/uta018/l',
//       );
//     }}
//   >
//     {/* {data.course.code} */}'uta019'
//   </Button>
// </div>
// </Container>
