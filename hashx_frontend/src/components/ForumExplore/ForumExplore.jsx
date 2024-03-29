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

const useStyles = makeStyles(() => ({
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
    marginLeft: '-30px',
  },
  addText: {
    color: '#747474',
    fontWeight: 'bolder',
  },
}));

const ForumExplore = () => {
  // classes stores and gives you access to all the Material UI classes made using makeStyles()
  const classes = useStyles();
  const { data, loading, error } = useQuery(ALL_QUESTIONS);
  if(loading){
    return (
      <LayoutWrapper>
        <RocketAnimation />
      </LayoutWrapper>
    );
  }
  if( error || data.allQuestions.edges === undefined || data.allQuestions.edges === null){
    return <Error />;
  }
  // questions stores an array having all the questions retreived from the allQuestions query
  const questions = data.allQuestions.edges;
  
  return(
    <>
    <Box className={classes.box}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h3 className={classes.panelText}>
                Forum <span style={{ color: '#747474' }}>Explore</span>
              </h3>
            </Grid>
            <Grid item xs={3} className={classes.addIconGrid}>
              <Grid container spacing={3}>
                <Grid item xs={8} className={classes.addIconGrid}>
                  <h5 className={classes.addText}>Add a Post&nbsp;</h5>
                </Grid>
                <Grid item xs={4}>
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

          {/* For every question stored in questions, its id, title and other properties are extracted
              and sent to the Question component as props. The Question component then returns an entire card
              having one single question card
            */}
          {
            questions.map((question) => {
              const questionId = question.node.id;
              const questionTitle = question.node.title
              const questionUserName = question.node.owner.username;
              const questionContent = question.node.content;
              const questionFile = question.node.file
              return(
                <Question 
                  key = {questionId}
                  questionId = {questionId}
                  questionTitle = {questionTitle}
                  questionUserName = {questionUserName}
                  questionContent = {questionContent}
                  questionFile = {questionFile}
                />
              )
            })
          }
        </Grid>
      </Grid>
    </Box>
    </>

  )
}

export default ForumExplore;