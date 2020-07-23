import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { FILE_TYPE_QUERY } from './Queries';
import FileList from './FileList';
import { secondaryColor } from '../../theme/theme';

const TutorialsSolution = (props) => {
  const history = useHistory();
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
  const typeId =
    fileTypeData.allFiletypes.edges[0] &&
    fileTypeData.allFiletypes.edges[0].node.id;
  return (
    <>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: '20px',
          textAlign: 'center',
          backgroundColor: `${secondaryColor}`,
          color: '#FBF9FF',
          marginTop: '-30px',
        }}
      >
        <br />
        <h1 style={{ fontWeight: '400' }}>Tutorial Solutions</h1>
        <Grid container spacing={2}>
          <FileList typeId={typeId} courseId={courseId} history={history} />
        </Grid>
      </Paper>
    </>
  );
};

export default TutorialsSolution;
