import React from 'react';
import { Container, CssBaseline, Hidden } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Discussions from '../components/HostelDiscussions/HostelDiscussions';
import Complaints from '../components/Complaints/Complaints';
import MessMenu from '../components/MessMenu/MessMenu';
import { tertiaryColor } from '../theme/theme';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  heading: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  text: {
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
    },
  },
  MessMenuGrid: {
    [theme.breakpoints.down('md')]: {
      marginTop: '50px',
    },
  },
}));

const Hostel = () => {
  const classes = useStyles();
  return (
    <>
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
              height: '230px',
              backgroundImage: `${tertiaryColor}`,
              color: '#FFFFFF',
            }}
          >
            <Container fixed>
              <Grid container spacing={2}>
                <Hidden mdDown>
                  <Grid
                    item
                    xs={false}
                    sm={false}
                    md={false}
                    lg={2}
                    xl={2}
                    style={{ marginTop: '30px' }}
                  >
                    <Avatar
                      alt="Hostel"
                      src="https://picsum.photos/200/300"
                      className={classes.large}
                      style={{ border: '10px solid #1BA3DE' }}
                    />
                  </Grid>
                </Hidden>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={3}
                  xl={3}
                  style={{ marginTop: 'auto', marginBottom: 'auto' }}
                  className={classes.heading}
                >
                  <h1 style={{ fontWeight: 'bold' }} className={classes.text}>
                    Hostel H
                  </h1>
                </Grid>
                <Hidden lgUp>
                  <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: '#1B233A', color: 'white' }}
                      size="large"
                    >
                      Details
                    </Button>
                  </Grid>
                </Hidden>
                <Hidden mdDown>
                  <Grid item xs={false} sm={false} md={false} lg={7} xl={7}>
                    <Grid container spacing={2} style={{ marginTop: '30px' }}>
                      <Grid item xs={3}>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: '#1B233A', color: 'white' }}
                          size="large"
                        >
                          About
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: '#1B233A', color: 'white' }}
                          size="large"
                        >
                          Warden
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: '#1B233A', color: 'white' }}
                          size="large"
                        >
                          Caretaker
                        </Button>
                      </Grid>
                      <br />
                      <Grid
                        container
                        spacing={0}
                        justify="space-around"
                        style={{ marginTop: '20px' }}
                      >
                        <Grid item xs={3} style={{ textAlign: 'center' }}>
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: '#1B233A',
                              color: 'white',
                            }}
                            size="large"
                          >
                            Contact
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: '#1B233A',
                              color: 'white',
                            }}
                            size="large"
                          >
                            Capacity
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <Container fixed>
        <Grid container spacing={2} style={{ marginTop: '100px' }}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Grid container spacing={2}>
              <Discussions />
              <Complaints />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            className={classes.MessMenuGrid}
          >
            <MessMenu />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hostel;
