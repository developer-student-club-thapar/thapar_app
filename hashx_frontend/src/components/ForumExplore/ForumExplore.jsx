import React from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';

import { ALL_QUESTIONS } from './Queries'

import { secondaryColor, textColor } from '../../theme/theme';
import Error from '../Error/Error';

import LayoutWrapper from '../Layout/Layout';
import RocketAnimation from '../RocketAnimation';

import Question from '../Question'

const useStyles = makeStyles((theme) => ({
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

          {
            questions.map((question) => {
              let questionId = question.node.id;
              let questionTitle = question.node.title
              let questionUserName = question.node.owner.username;
              let questionContent = question.node.content;
              return(
                <Question 
                  questionId = {questionId}
                  questionTitle = {questionTitle}
                  questionUserName = {questionUserName}
                  questionContent = {questionContent}
                />
              )
            })
          }

          {/* <Grid container spacing={2}>
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
                        {questions[0].node.owner.username}
                      </h6>
                      <p>{questions[0].node.content}</p>
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
            </Grid> */}

            <Question 
              questionId = {123}
              questionTitle = {'Dummy Question'}
              questionUserName = {'Dummy Author'}
              questionContent = {'Dummy Content'}
            />

            
        </Paper>
        </Grid>
      </Grid>

      </Box>
    </>

  )
}

export default ForumExplore;