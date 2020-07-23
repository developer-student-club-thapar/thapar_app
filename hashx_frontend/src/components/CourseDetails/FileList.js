import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { FILES_QUERY } from './Queries';

const FileList = (props) => {
  const { typeId, courseId, history } = props;
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
                src={thumbnailImage}
                style={{ borderRadius: '10px', cursor: 'pointer' }}
                alt="thumbnail"
                onClick={() => {
                  history.push(`/pdfview`); // file
                }}
              />
              <div
                style={{
                  position: 'relative',
                  bottom: '40px',
                  background: 'rgba(57, 57, 57, 0.5)',
                  width: '150px',
                  height: '40px',
                  borderRadius: '0px 0px 10px 10px',
                  cursor: 'pointer',
                  margin: 'auto',
                  textAlign: 'center',
                }}
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
