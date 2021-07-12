import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileSideView from '../FileSideView/FileSideView';
import Discussions from '../DiscussionsPanel/DiscussionsPanel';
import { useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import { QUESTION_DETAIL } from './Queries';

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontSize: '45px',
    color: '#000000',
    fontWeight: 'bolder',
  },
  box: {
    padding: '30px',
  },
}));

const DiscussionsPanel = () => {
  const { id: questionId } = useParams();
  const {
    loading: questionLoading,
    data: questionData,
    error: questionError,
  } = useQuery(QUESTION_DETAIL, {
    pollInterval: 2 * 1000 * 60,
    variables: {
      id: questionId,
    },
  });
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (questionLoading) {
    return <div>{questionLoading}</div>;
  }
  if (questionError) {
    return <div>{questionError}</div>;
  }

  const fileExists = (questionData.questions.file !== null)? true : false;

  //  If there is a file associated with the question, the size of the Grid item holding
  //  the Discussions component should be of size 9 (so as to accomodate the FileSideView component)
  //  else 12, such that the entire space is occupied since there wouldn't be a FileSideView component
  const discussionsSpacing = fileExists? 9 : 12;

  return (
    <Box className={classes.box}>
      <Grid container spacing={2}>
        {/* The FileSideView should render only if there is a file associated with the question */}
        {
          fileExists && (
            <Grid item lg={3}>
              <FileSideView file={questionData.questions.file} />
            </Grid>
          )
        }
        <Grid item lg={discussionsSpacing}>
          <Discussions
            questionData={questionData}
            questionError={questionError}
            questionLoading={questionLoading}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscussionsPanel;
