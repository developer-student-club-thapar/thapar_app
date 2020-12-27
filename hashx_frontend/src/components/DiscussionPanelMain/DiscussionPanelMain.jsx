import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileSideView from '../FileSideView/FileSideView';
import Discussions from '../DiscussionsPanel/DiscussionsPanel';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const questionId = history.location.pathname.split('/')[3];
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
  return (
    <Box className={classes.box}>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <FileSideView file={questionData.questions.file} />
        </Grid>
        <Grid item lg={9}>
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
