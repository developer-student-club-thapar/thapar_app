import React from 'react';
import { Grid, Divider, Paper } from '@material-ui/core';
import guy from '../assets/guy.svg';
import { makeStyles } from '@material-ui/core/styles';
import CourseTeam from '../components/CourseTeam/CourseTeam';
import CourseGrid from '../components/CourseGrid/CourseGrid';
import LayoutWrapper from '../components/Layout/Layout';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
  team: {
    borderRadius: '40px',
    height: '500px',
    background: '#f0f0f3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '10px',
    textAlign: 'center',
  },
  body: {
    padding: '50px',
  },
  title: {
    fontSize: '1.7rem',
    display: 'inline-block',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  btn: {
    borderRadius: '27px',
    background: '#00293B',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    marginTop: '30px',
    display: 'grid',
    placeItems: 'center',
    height: '50px',
    fontSize: '16px',
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#F0F0F3',
  },
  collapseBtn: {
    color: '#fff',
    minWidth: 0,
    width: 40,
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0.24)',
    margin: '0 auto 16px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.38)',
    },
  },
  sidebar: {
    backgroundColor: '#00293B',
    border: 'none',
  },
  content: {
    backgroundColor: '#F0F0F3',
  },
}));

const Button = () => {
  const styles = useStyles();
  return (
    <Grid container spacing={0} justify="space-around">
      <Grid item xs={6}>
        <Paper elevation={3} className={styles.btn}>
          SEE ALL
        </Paper>
      </Grid>
    </Grid>
  );
};

const App = () => {
  const styles = useStyles();
  const history = useHistory();
  const {
    location: { pathname },
  } = history;

  return (
    <LayoutWrapper>
      <div className={styles.body}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={10} xl={10}>
            <Grid container spacing={4}>
              <Grid item xs={12} lg={8} xl={8}>
                <CourseGrid pathname={pathname} />
              </Grid>
              <Grid item xs={12} lg={4} xl={4}>
                <Grid container spacing={2} justify="center">
                  <Grid item xs={10}>
                    <img
                      src={guy}
                      alt="guy"
                      style={{
                        height: '200px',
                        width: '300px',
                        objectFit: 'contain',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={3} className={styles.team}>
                      <h3 className={styles.title}>YOUR STREAMMATES</h3>
                      <Divider variant="middle" />
                      <CourseTeam />
                      <Button />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LayoutWrapper>
  );
};

export default App;
