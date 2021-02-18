import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Document from '../Document/Document';
import SidePanel from '../SidePanel/SidePanel';
import { useQuery } from '@apollo/client';
import { FILE_QUESTIONS } from './Queries';
import Error from '../Error/Error';

const useStyles = makeStyles(() => ({
  headerText: {
    fontSize: '45px',
    color: '#000000',
    fontWeight: 'bolder',
  },
  box: {
    padding: '30px',
  },
}));

const ForumDetail = () => {
  const { data, loading, error } = useQuery(FILE_QUESTIONS, {
    variables: {
      file: 'RmlsZU5vZGU6MDAzZDIzZTgtM2QxOC00NGE1LWIwNTEtOWFjN2JhZDY1YWVl',
    },
  });
  const classes = useStyles();

  if (loading) return <div>Loading..</div>;
  if (
    error ||
    data.allQuestions.edges[0] === undefined ||
    data.allQuestions.edges[0] === null
  )
    return <Error />;
  console.log(data);
  const { file } = data.allQuestions.edges[0].node;
  console.log(file);
  return (
    <Box className={classes.box}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 className={classes.headerText}>
            <span style={{ color: '#747474' }}>{file.name}</span>
          </h1>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Document file={data?.allQuestions.edges[0].node.file} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <SidePanel data={data} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForumDetail;
