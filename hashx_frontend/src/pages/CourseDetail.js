import React from 'react';
import { Container, CssBaseline, Hidden } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Nav from '../components/Nav';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Tutorials from '../components/CourseDetails/Tutorials';
import RightNav from '../components/CourseDetails/RightNav';
import Books from '../components/CourseDetails/Books';
import Notes from '../components/CourseDetails/Notes';
import PreviousYearPapers from '../components/CourseDetails/PreviousYearPapers';
import TutorialsSolution from '../components/CourseDetails/TutorialsSolution';
import { secondaryColor, tertiaryColor } from '../theme/theme';

const CourseDetail = (props) => {
  const history = useHistory();
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
    <>
      {console.log(path)}
      <Nav />
      <CssBaseline />
      <Grid
        container
        spacing={2}
        style={{ marginTop: '50px', height: '190px' }}
      >
        <Grid item xs={12} lg={12} xl={12}>
          <Paper
            elevation={0}
            style={{
              height: '200px',
              backgroundImage: `${tertiaryColor}`,
              color: '#FFFFFF',
            }}
          >
            <Container fixed>
              <h1
                style={{
                  paddingTop: '10px',
                  paddingLeft: '10px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {data.course.name}
              </h1>
              {/* <h3 style={{ paddingLeft: '10px' }}>{data.course.code}</h3> */}
              <div style={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ backgroundColor: `${secondaryColor}` }}
                  onClick={() => {
                    window.open(
                      'https://sites.google.com/a/thapar.edu/uta018/l',
                    );
                  }}
                >
                  {data.course.code}
                </Button>
              </div>
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <Container fixed>
        <Hidden mdDown>
          <Grid
            container
            spacing={4}
            style={{ position: 'relative', bottom: '60px' }}
          >
            <Grid item lg={3} xl={3}>
              <Paper
                elevation={0}
                style={{
                  height: '160px',
                  backgroundColor: `${secondaryColor}`,
                  borderRadius: '20px',
                }}
              >
                <Paper
                  elevation={0}
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundImage:
                      'linear-gradient(to bottom right, #7C73F0, #405AF9)',
                    borderRadius: '20px',
                    marginTop: '40px',
                    marginLeft: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                >
                  <i
                    className="fas fa-book fa-2x"
                    style={{ color: '#FBF9FF', marginTop: '20px' }}
                  />
                </Paper>
                <h3
                  style={{
                    marginLeft: '120px',
                    marginTop: '-50px',
                    color: '#FBF9FF',
                    fontWeight: 'bold',
                  }}
                >
                  About
                </h3>
              </Paper>
            </Grid>
            <Grid item lg={3} xl={3}>
              <a href="#events">
                <Paper
                  elevation={0}
                  style={{
                    height: '160px',
                    backgroundColor: `${secondaryColor}`,
                    borderRadius: '20px',
                  }}
                >
                  <Paper
                    elevation={0}
                    style={{
                      height: '70px',
                      width: '70px',
                      backgroundImage:
                        'linear-gradient(to bottom right, #FA7087, #F5405F)',
                      borderRadius: '20px',
                      marginTop: '40px',
                      marginLeft: '20px',
                      display: 'inline-block',
                      textAlign: 'center',
                    }}
                  >
                    <i
                      className="fas fa-user-friends fa-2x"
                      style={{ color: '#FBF9FF', marginTop: '20px' }}
                    />
                  </Paper>
                  <h3
                    style={{
                      marginLeft: '100px',
                      marginTop: '-50px',
                      color: '#FBF9FF',
                      fontWeight: 'bold',
                    }}
                  >
                    Forums
                  </h3>
                </Paper>
              </a>
            </Grid>
            <Grid item lg={3} xl={3}>
              <Paper
                elevation={0}
                style={{
                  height: '160px',
                  backgroundColor: `${secondaryColor}`,
                  borderRadius: '20px',
                }}
              >
                {' '}
                <Paper
                  elevation={0}
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundImage:
                      'linear-gradient(to bottom right, #37B88F, #12A767)',
                    borderRadius: '20px',
                    marginTop: '40px',
                    marginLeft: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                >
                  <i
                    className="fas fa-user fa-2x"
                    style={{ color: '#FBF9FF', marginTop: '20px' }}
                  />
                </Paper>
                <h3
                  style={{
                    marginLeft: '100px',
                    marginTop: '-65px',
                    color: '#FBF9FF',
                    fontWeight: 'bold',
                  }}
                >
                  Teacher's Details
                </h3>
              </Paper>
            </Grid>
            <Grid item lg={3} xl={3}>
              <Paper
                elevation={0}
                style={{
                  height: '160px',
                  backgroundColor: `${secondaryColor}`,
                  borderRadius: '20px',
                }}
              >
                <Paper
                  elevation={0}
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundImage:
                      'linear-gradient(to bottom right, #F2931F, #FF5E54)',
                    borderRadius: '20px',
                    marginTop: '40px',
                    marginLeft: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                >
                  <i
                    className="fas fa-calendar-alt fa-2x"
                    style={{ color: '#FBF9FF', marginTop: '20px' }}
                  />
                </Paper>
                <h3
                  style={{
                    marginLeft: '100px',
                    marginTop: '-50px',
                    color: '#FBF9FF',
                    fontWeight: 'bold',
                  }}
                >
                  Syllabus
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </Hidden>
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
          <Hidden mdDown>
            <Grid item lg={3}>
              <RightNav id={props.match.params.id} path={path} />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  );
};

export default CourseDetail;
