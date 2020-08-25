import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { FILES_QUERY, CDN_URL } from './Queries';
import { makeStyles } from '@material-ui/core/styles';

const useClasses = makeStyles(() => ({
  thumbnail: {
    height: '200px',
    width: '400px',
    cursor: 'pointer',
    borderRadius: '10px',
  },
  thumbnailTitleBox: {
    position: 'relative',
    bottom: '40px',
    background: '#597480',
    width: '400px',
    height: '60px',
    borderRadius: '0px 0px 10px 10px',
    cursor: 'pointer',
    margin: 'auto',
    textAlign: 'left',
    paddingLeft: 5,
    fontWeight: 'bolder',
    fontSize: '17px',
  },
}));

const FileList = (props) => {
  const { typeId, courseId, history } = props;
  const classes = useClasses();
  const [getUrl, { loading, data, error }] = useLazyQuery(CDN_URL, {});
  const {
    loading: filesLoading,
    error: filesError,
    data: filesData,
  } = useQuery(FILES_QUERY, {
    variables: { course: `${courseId}`, type: `${typeId}` },
  });
  if (filesLoading) return <div>Loading....</div>;
  if (filesError) return <div> Error..</div>;
  console.log(filesData);
  return (
    <>
      {filesData.allFiles.edges &&
        filesData.allFiles.edges.map((files) => {
          const { thumbnailImage, name, id } = files.node;
          return (
            <Grid item xs={6} sm={6} md={6} lg={4} xl={4} key={id}>
              <img
                src={
                  thumbnailImage !== ''
                    ? thumbnailImage
                    : 'https://picsum.photos/400/200'
                }
                className={classes.thumbnail}
                alt="thumbnail"
                onClick={() => {
                  history.push(`/pdfview`); // file
                }}
              />
              <div
                className={classes.thumbnailTitleBox}
                onClick={() => {
                  history.push(`/pdfview`);
                }}
              >
                <div style={{ paddingTop: '10px' }}>{name}</div>
              </div>
            </Grid>
          );
        })}
    </>
  );
};

export default FileList;
