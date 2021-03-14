import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, CircularProgress, Paper, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { FILE_TYPE_QUERY } from './Queries';
import FileList from './FileList';
import { secondaryColor } from '../../theme/theme';

// call file type query before loading the component

const useClasses = makeStyles((theme) => ({
  mainPaper: {
    textAlign: 'center',
    backgroundColor: `${secondaryColor}`,
    color: '#FBF9FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    [theme.breakpoints.only('xs')]: {
      backgroundColor: '#ffffff',
      padding: 20,
    },
    [theme.breakpoints.only('sm')]: {
      padding: '2rem',
      width: '90vw',
    },
    [theme.breakpoints.only('md')]: {
      padding: '2rem',
      width: '90vw',
    },
  },
  boxNavigation: {
    [theme.breakpoints.only('xs')]: {
      backgroundColor: `${secondaryColor}`,
      borderRadius: 10,
      padding: '1rem',
      boxShadow:
        '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4)',
    },
  },
}));

const Resource = (props) => {
  const history = useHistory();
  const { id: courseId, path } = props;
  const classes = useClasses();

  const {
    loading: fileTypeLoading,
    error: fileTypeError,
    data: fileTypeData,
  } = useQuery(FILE_TYPE_QUERY, { variables: { slug: `${path}` } });

  if (fileTypeLoading) {
    return (
      <Paper elevation={3} className={classes.mainPaper}>
        <CircularProgress />
      </Paper>
    );
  }
  if (fileTypeError) {
    return <div>Error..</div>;
  }
  if (!fileTypeData || fileTypeData === undefined) {
    return <div>No Files</div>;
  }
  const typeId =
    fileTypeData.allFiletypes.edges[0] &&
    fileTypeData.allFiletypes.edges[0].node.id;
  return (
    <>
      <Paper elevation={3} className={classes.mainPaper}>
        <br />
        <Grid container spacing={2} className={classes.boxNavigation}>
          <FileList typeId={typeId} courseId={courseId} history={history} />
        </Grid>
      </Paper>
    </>
  );
};

export default Resource;
