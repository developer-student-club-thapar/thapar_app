import React, { Fragment, useRef } from 'react';
import { Container, CssBaseline, Hidden } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CourseDetail = props => {
  console.log(props.match.params.id);
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
  return (
    <Fragment>
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
              height: '160px',
              backgroundImage: 'linear-gradient(to right, #D04682 , #4A55EB)',
              color: '#FFFFFF',
            }}
          >
            <Container fixed>
              <h1
                style={{
                  paddingTop: '10px',
                  paddingLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                {data.course.name}
              </h1>
              <h3 style={{ paddingLeft: '10px' }}>{data.course.code}</h3>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CourseDetail;
