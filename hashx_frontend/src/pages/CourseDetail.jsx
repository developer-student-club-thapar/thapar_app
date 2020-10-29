import React from 'react';
import { Box, Paper, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import { COURSE_QUERY } from '../components/CourseDetails/Queries';
import { Root } from '@mui-treasury/layout';
import { gql } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
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
} from '../components/Global/Global';
import Sidebar from '../components/Sidebar/Sidebar';
import backgroundText from '../assets/cs.svg';
import Error from '../components/Error/Error';
import LayoutWrapper from '../components/Layout/Layout';

const useClasses = makeStyles((theme) => ({
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
    height: '60px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: 29,
    textAlign: 'center',
    backgroundColor: `${secondaryColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    '&:hover': {
      transform: 'scale(1.2)',
    },
    [theme.breakpoints.only('xs')]: {
      height: '45px',
    },
  },
  breadCrumbsText: {
    color: '#747474',
    fontSize: 25,
    fontWeight: 'bolder',
    margin: '0 auto',
    [theme.breakpoints.only('xs')]: {
      fontSize: 20,
    },
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
    height: '140px',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '90vw',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      borderRadius: 0,
      height: '110px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
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
    [theme.breakpoints.only('xs')]: {
      height: '110px',
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
    [theme.breakpoints.only('xs')]: {
      height: '40px',
      width: '40px',
      borderRadius: 9,
    },
  },
  listText: {
    fontSize: '17px',
    color: '#ffffff',
    '&:hover': {
      color: '#00293B',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.8rem',
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
  boxWrapper: {
    margin: 30,
    [theme.breakpoints.only('xs')]: {
      margin: 0,
    },
  },
  paperlinkContainer: {
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
  paperBackground: {
    backgroundColor: `${secondaryColor}`,
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${backgroundText})`,
      backgroundRepeat: 'no-repeat',
    },
  },
}));

const CourseDetail = (props) => {
  const history = useHistory();
  const classes = useClasses();
  const styles = useStyles();
  const { content, id } = useParams();
  const courseId = id; //props.match.params.id
  const path = content;
  const list = [
    {
      mainText: 'Tutorial',
      path: `/courses/${courseId}/tutorials`,
      iconClassName: 'fas fa-book fa-2x',
      iconClassNameMoblie: 'fas fa-book fa-lg',
    },
    {
      mainText: 'Lab',
      path: '/courses',
      iconClassName: 'fas fa-book fa-2x',
      iconClassNameMoblie: 'fas fa-book fa-lg',
    },
    {
      mainText: 'Courses',
      path: '/dashboard/timetable',
      iconClassName: 'fas fa-book fa-2x',
      iconClassNameMoblie: 'fas fa-book fa-lg',
    },
    {
      mainText: 'Courses',
      path: '/forum/forum-details',
      iconClassName: 'fas fa-book fa-2x',
      iconClassNameMoblie: 'fas fa-book fa-lg',
    },
    {
      mainText: 'Courses',
      path: '/forum/forum-details',
      iconClassName: 'fas fa-book fa-2x',
      iconClassNameMoblie: 'fas fa-book fa-lg',
    },
    {
      mainText: 'Courses',
      path: '/forum/forum-details',
      iconClassName: 'fas fa-book fa-2x',
      iconClassNameMoblie: 'fas fa-book fa-lg',
    },
  ];

  const { loading, error, data } = useQuery(COURSE_QUERY, {
    variables: {
      id: courseId,
    },
  });
  if (loading) return <h4>Loading....</h4>;
  if (error || data.course === undefined || data.course === null) {
    return <Error />;
  }
  console.log(data);
  const renderComponent = () => {
    if (path === 'tutorials') {
      return <Tutorials id={courseId} path={path} />;
    } else if (path === 'books') {
      return <Books id={courseId} path={path} />;
    } else if (path === 'notes') {
      return <Notes id={courseId} path={path} />;
    } else if (path === 'previousyearpapers') {
      return <PreviousYearPapers id={courseId} path={path} />;
    } else if (path === 'tutorialssolution') {
      return <TutorialsSolution id={courseId} path={path} />;
    }
  };
  if (data) {
    return (
      <LayoutWrapper>
        {' '}
        <Grid container spacing={2} direction="column">
          <Grid item xs={12} lg={12} xl={12}>
            <Box
              elevation={0}
              style={{
                backgroundImage: `${secondaryColor}`,
              }}
            >
              <Grid container justify="flex-start" style={{ padding: 30 }}>
                <Hidden mdDown>
                  <Grid item xs={3}>
                    <img
                      src={require('../assets/kid.svg')}
                      style={{ marginLeft: '2vw', objectFit: 'contain' }}
                      alt="kid"
                    />
                  </Grid>
                </Hidden>
                <Grid item xs={12} lg={9}>
                  <Paper elevation={0} className={classes.paperBackground}>
                    <Grid
                      container
                      direction="column"
                      justify="space-around"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Grid item xs={12}>
                        <h1 className={classes.title}>{data.course.name}</h1>
                      </Grid>

                      <Grid item xs={4}>
                        <Paper
                          elevation={3}
                          className={classes.breadCrumbs}
                          style={{
                            width: '150px',
                          }}
                        >
                          <h1 className={classes.breadCrumbsText}>
                            {data.course.code}
                          </h1>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          spacing={3}
                          className={classes.paperlinkContainer}
                        >
                          <Grid item xs={7}>
                            <Paper
                              elevation={3}
                              className={classes.breadCrumbs}
                              style={{
                                width: '280px',
                              }}
                              onClick={() => {
                                data.course.courseSite !== '' &&
                                  window.open(data.course.courseSite);
                              }}
                            >
                              <h1 className={classes.breadCrumbsText}>
                                View Course Site &nbsp;
                                <i className="fas fa-long-arrow-alt-right" />
                              </h1>
                            </Paper>
                          </Grid>
                          <Grid item xs={5}>
                            <Paper
                              elevation={3}
                              className={classes.breadCrumbs}
                              style={{
                                width: '190px',
                              }}
                            >
                              <h1 className={classes.breadCrumbsText}>
                                Syllabus &nbsp;
                                <i className="fas fa-long-arrow-alt-right" />
                              </h1>
                            </Paper>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={classes.boxWrapper}>
              <Grid item xs={12}>
                <Grid item xs={12} className={classes.navigatioBar}>
                  <Grid container>
                    {list.map((item, index) => (
                      <Grid
                        item
                        xs={2}
                        className={classes.listItem}
                        key={index}
                        onClick={() => {
                          history.push(`${item.path}`);
                        }}
                      >
                        <Paper elevation={0} className={classes.logoIcons}>
                          <Hidden only="xs">
                            <i
                              className={item.iconClassName}
                              style={{ color: '#00293B' }}
                            />
                          </Hidden>
                          <Hidden smUp>
                            <i
                              className={item.iconClassNameMoblie}
                              style={{ color: '#00293B' }}
                            />
                          </Hidden>
                        </Paper>
                        <h2 className={classes.listText}>{item.mainText}</h2>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  {renderComponent()}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </LayoutWrapper>
    );
  }
};

export default CourseDetail;
