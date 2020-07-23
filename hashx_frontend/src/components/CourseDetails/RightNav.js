import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import '../../styles/RightNav.css';
import { secondaryColor } from '../../theme/theme';

const RightNav = ({ id, path }) => {
  return (
    <>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: '20px',
          textAlign: 'center',
          height: '617px',
          backgroundColor: `${secondaryColor}`,
          color: '#FBF9FF',
          marginTop: '-30px',
        }}
      >
        <br />
        <br />
        <NavLink
          exact
          to={`/course/tutorials/${id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Grid
            container
            spacing={2}
            style={
              path === 'tutorials'
                ? {
                    backgroundColor: '#7c73f0',
                    borderRadius: '10px',
                    textAlign: 'right',
                    paddingLeft: '30px',
                  }
                : { textAlign: 'right', paddingLeft: '30px' }
            }
            className="hover-4"
          >
            <Grid item xs={2}>
              <i className="fas fa-book-open fa-2x" />
            </Grid>
            <Grid
              item
              xs={10}
              style={{ textAlign: 'left', paddingLeft: '20px' }}
            >
              <h4>Tutorials</h4>
            </Grid>
          </Grid>
        </NavLink>
        <br />
        <NavLink
          exact
          to={`/course/books/${id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Grid
            container
            spacing={2}
            className="hover-4"
            style={
              path === 'books'
                ? {
                    backgroundColor: '#7c73f0',
                    borderRadius: '10px',
                    textAlign: 'right',
                    paddingLeft: '30px',
                  }
                : { textAlign: 'right', paddingLeft: '30px' }
            }
          >
            <Grid item xs={2}>
              <i className="fas fa-book fa-2x" />
            </Grid>
            <Grid
              item
              xs={10}
              style={{ textAlign: 'left', paddingLeft: '20px' }}
            >
              <h4>Books</h4>
            </Grid>
          </Grid>
        </NavLink>
        <br />
        <NavLink
          exact
          to={`/course/notes/${id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Grid
            container
            spacing={2}
            style={
              path === 'notes'
                ? {
                    backgroundColor: '#7c73f0',
                    borderRadius: '10px',
                    textAlign: 'right',
                    paddingLeft: '30px',
                  }
                : { textAlign: 'right', paddingLeft: '30px' }
            }
            className="hover-4"
          >
            <Grid item xs={2}>
              <i className="fas fa-play-circle fa-2x" />
            </Grid>
            <Grid
              item
              xs={10}
              style={{ textAlign: 'left', paddingLeft: '20px' }}
            >
              <h4>Notes/Slides</h4>
            </Grid>
          </Grid>
        </NavLink>
        <br />
        <NavLink
          exact
          to={`/course/previousyearpapers/${id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Grid
            container
            spacing={2}
            style={
              path === 'previousyearpapers'
                ? {
                    backgroundColor: '#7c73f0',
                    borderRadius: '10px',
                    textAlign: 'right',
                    paddingLeft: '30px',
                  }
                : { textAlign: 'right', paddingLeft: '30px' }
            }
            className="hover-4"
          >
            <Grid item xs={2}>
              <i className="fas fa-sticky-note fa-2x" />
            </Grid>
            <Grid
              item
              xs={10}
              style={{ textAlign: 'left', paddingLeft: '20px' }}
            >
              <h4>Previous Year Papers</h4>
            </Grid>
          </Grid>
        </NavLink>
        <br />
        <NavLink
          exact
          to={`/course/tutorialssolution/${id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Grid
            container
            spacing={2}
            style={
              path === 'tutorialssolution'
                ? {
                    backgroundColor: '#7c73f0',
                    borderRadius: '10px',
                    textAlign: 'right',
                    paddingLeft: '30px',
                  }
                : { textAlign: 'right', paddingLeft: '30px' }
            }
            className="hover-4"
          >
            <Grid item xs={2}>
              <i className="fas fa-clipboard-check fa-2x" />
            </Grid>
            <Grid
              item
              xs={10}
              style={{ textAlign: 'left', paddingLeft: '20px' }}
            >
              <h4>Tutorials Solution</h4>
            </Grid>
          </Grid>
        </NavLink>
      </Paper>
    </>
  );
};

export default RightNav;
