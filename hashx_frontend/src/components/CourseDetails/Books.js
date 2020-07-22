import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { FILE_TYPE_QUERY } from './Queries';
import FileList from './FileList';

const Books = (props) => {
  let history = useHistory();
  const { id: courseId, path } = props;
  const {
    loading: fileTypeLoading,
    error: fileTypeError,
    data: fileTypeData,
  } = useQuery(FILE_TYPE_QUERY, { variables: { slug: `${path}` } });
  if (fileTypeLoading) {
    return <div> loading...</div>;
  }
  if (fileTypeError) {
    return <div>Error..</div>;
  }
  if (!fileTypeData || fileTypeData === undefined) {
    return <div>No Files</div>;
  }
  const typeId = fileTypeData.allFiletypes.edges[0].node.id;
  return (
    <Fragment>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: '20px',
          textAlign: 'center',
          backgroundColor: '#2C3055',
          color: '#FBF9FF',
          marginTop: '-30px',
        }}
      >
        <br />
        <h1 style={{ fontWeight: '400' }}>Books</h1>
        <Grid container spacing={2}>
          <FileList typeId={typeId} courseId={courseId} history={history} />
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Books;
