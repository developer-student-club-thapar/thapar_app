import React from 'react';
import { Box, Grid, Paper, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';

import { ALL_QUESTIONS } from './Queries'

import { secondaryColor, textColor } from '../../theme/theme';
import Error from '../Error/Error';
import Avatar from '@material-ui/core/Avatar';

import LayoutWrapper from '../Layout/Layout';
import RocketAnimation from '../RocketAnimation';

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontSize: '45px',
    color: '#000000',
    fontWeight: 'bolder',
  },
  box: {
    padding: '30px',
  },
  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  panelText: {
    fontWeight: 'bolder',
    padding: '20px',
    color: '#00000',
  },
  addIconGrid: {
    display: 'grid',
    placeItems: 'center',
  },
  addGrid: {
    borderRadius: '10px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    height: '50px',
    width: '50px',
    display: 'grid',
    placeItems: 'center',
  },
  addText: {
    color: '#747474',
    fontWeight: 'bolder',
  },
  chatBox: {
    height: '60vh',
    overflowY: 'scroll',
  },
  discussionItem: {
    borderRadius: '30px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '30px',
    margin: '0 40px 20px 40px',
  },
  profileAvatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
  primaryGridText: {
    fontWeight: 'bolder',
  },
  profileId: {
    color: '#747474',
  },
  chatItem: {
    justifyContent: 'flex-end',
  },
  input: {
    borderRadius: '20px',
    backgroundColor: '#ffffff',
  },
  sendButton: {
    backgroundColor: '#F0F0F3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    '&:focus': {
      outline: 'none',
    },
  },
  profileAvatarMessage: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  contentBox: {
    width: '90%',
    wordBreak: 'break-word',
  },
}));

const ForumExplore = () => {
  const classes = useStyles();
  const { data, loading, error } = useQuery(ALL_QUESTIONS);
  if(loading){
    return (
      <LayoutWrapper>
        <RocketAnimation />
      </LayoutWrapper>
    );
  }
  if( error || data.allQuestions.edges == undefined || data.allQuestions.edges == null){
    return <Error />;
  }
  const questions = data.allQuestions.edges;
  
  return(
    <>
    <Box className={classes.box}>

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} className={classes.paperGrid}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h3 className={classes.panelText}>
                Forum <span style={{ color: '#747474' }}>Explore</span>
              </h3>
            </Grid>
            <Grid item xs={3} className={classes.addIconGrid}>
              <Grid container spacing={2}>
                <Grid item xs={6} className={classes.addIconGrid}>
                  <h5 className={classes.addText}>Add a Post&nbsp;</h5>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={3} className={classes.addGrid}>
                    <i
                      className="fas fa-plus fa-lg"
                      style={{ color: '#000000' }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.discussionItem}>
                  <Grid container spacing={2}>
                    <Grid item xs={2} style={{ padding: '20px' }}>
                      <Avatar
                        alt="Profile"
                        src="https://picsum.photos/200/300"
                        className={classes.profileAvatar}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <h4 className={classes.primaryGridText}>
                        {questions[0].node.title}&nbsp;&nbsp;
                      </h4>
                      <h6 className={classes.profileId}>
                        {'Suprit Behera'}
                      </h6>
                      <p>{'This is a sample testing question, do not mind me'}</p>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <h6 style={{ fontWeight: 'bolder' }}>
                            <i
                              className="far fa-heart fa-lg"
                              style={{ color: '#E10505' }}
                            />
                            &nbsp;10
                          </h6>
                        </Grid>
                        <Grid item xs={2}>
                          <h6 style={{ fontWeight: 'bolder' }}>
                            <i
                              className="far fa-edit fa-lg"
                              style={{ color: '#7C73F0' }}
                            />
                            &nbsp;10
                          </h6>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.discussionItem}>
                  <Grid container spacing={2}>
                    <Grid item xs={2} style={{ padding: '20px' }}>
                      <Avatar
                        alt="Profile"
                        src="https://picsum.photos/200/300"
                        className={classes.profileAvatar}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <h4 className={classes.primaryGridText}>
                        {'Hello World'}&nbsp;&nbsp;
                      </h4>
                      <h6 className={classes.profileId}>
                        {'Suprit Behera'}
                      </h6>
                      <p>{'This is a sample testing question, do not mind me'}</p>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <h6 style={{ fontWeight: 'bolder' }}>
                            <i
                              className="far fa-heart fa-lg"
                              style={{ color: '#E10505' }}
                            />
                            &nbsp;10
                          </h6>
                        </Grid>
                        <Grid item xs={2}>
                          <h6 style={{ fontWeight: 'bolder' }}>
                            <i
                              className="far fa-edit fa-lg"
                              style={{ color: '#7C73F0' }}
                            />
                            &nbsp;10
                          </h6>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>


        </Paper>
        </Grid>
      </Grid>

      </Box>
    </>

  )
}

export default ForumExplore;