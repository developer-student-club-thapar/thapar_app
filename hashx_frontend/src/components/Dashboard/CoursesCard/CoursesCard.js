import React from 'react';
import { Grid, Divider, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CourseBox from './CourseBox';
import img from '../../../assets/Landing-page-Cards/1.png';
import me from '../../../assets/Landing-page-Cards/1.png';
import { secondaryColor, textColor } from '../../../theme/theme';

const useStyles = makeStyles(() => ({
  papergrid: {
    borderRadius: '20px',
    textAlign: 'center',
    height: '500px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    marginTop: '15px',
  },
  team: {
    borderRadius: '40px',
    height: '270px',
    background: '#f0f0f3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  body: {
    padding: '100px',
  },
  title: {
    fontSize: '20px',
    display: 'inline-block',
  },
  btn: {
    borderRadius: '40px',
    height: '40px',
    background: '#00293b',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
}));

const CoursesCard = (props) => {
  const styles = useStyles();
  return (
    <Paper elevation={3} className={styles.papergrid}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4} xl={4}>
          {[
            'OPERATING SYSTEMS',
            'COMPUTER NETWORKS',
            'NUMERICAL ANALYSIS',
            'ENGINEERING MATERIALS',
            'ENGINEERING DESIGN',
            'DISCRETE MATHEMATICS',
          ].map((ele, i) => {
            return <CourseBox subject={ele} key={i} />;
          })}
        </Grid>
        <Grid lg={3} xl={3} />
        <Grid
          item
          xs={12}
          lg={5}
          xl={5}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid conatiner style={{ paddingRight: '10px' }}>
            <Grid item xs={12}>
              <img
                src={img}
                alt=" "
                style={{
                  height: '150px',
                  width: '150',
                  marginBottom: '50px',
                }}
              />
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ paddingRight: '10px' }}>
            <Grid item>
              <Paper elevation={3} className={styles.team}>
                <div style={{ textAlign: 'center' }}>
                  <h3 className={styles.title}>YOUR STREAMMATES</h3>
                  <Divider variant="middle" />
                  <Grid container style={{ marginTop: '10px' }} spacing={0}>
                    <Grid item xs={4}>
                      <img
                        src={me}
                        alt=" "
                        height="40px"
                        style={{ borderRadius: '50%' }}
                      />
                    </Grid>
                    <Grid xs={6} dispay="column">
                      <div style={{ textAlign: 'center', padding: '0' }}>
                        <h1 style={{ fontSize: '10px' }}>Divanshu Agarwal</h1>
                        <h1
                          style={{
                            fontSize: '10px',
                            color: 'gray',
                          }}
                        >
                          @divanshuroxs
                        </h1>
                      </div>
                    </Grid>
                    <Grid item xs={2} />
                  </Grid>
                </div>
                <Grid container spacing={0}>
                  <Grid item xs={3} />
                  <Grid item xs={6}>
                    <Paper elevation={3} className={styles.btn}>
                      <Grid item xs={12}>
                        <h1
                          style={{
                            fontSize: '17px',
                            color: 'white',
                            position: 'relative',
                            left: '1px',
                            top: '5px',
                          }}
                        >
                          SEE ALL
                        </h1>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={3} />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CoursesCard;
