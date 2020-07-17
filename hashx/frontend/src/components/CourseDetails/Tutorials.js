import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Bounce from 'react-reveal/Bounce';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';
import image from '../../assets/img.jpg';
import { useHistory } from 'react-router-dom';
import CourseDetail from '../../pages/CourseDetail';
import { FILE_TYPE_QUERY } from './Queries';
import FileList from './FileList';

//call file type query before loading the component

const Tutorials = (props) => {
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
        <h1 style={{ fontWeight: '400' }}>Tutorials</h1>
        <Grid container spacing={2}>
          <FileList typeId={typeId} courseId={courseId} history = {history} />
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Tutorials;
