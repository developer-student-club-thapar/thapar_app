import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery, useLazyQuery } from '@apollo/client';
import { FILES_QUERY, CDN_URL } from './Queries';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import NoPreviewImg from '../../assets/no-preview.png';

const useClasses = makeStyles((theme) => ({
  thumbnail: {
    height: '200px',
    width: '400px',
    cursor: 'pointer',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '250px',
    },
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
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

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

  return (
    <>
      {filesData.allFiles.edges &&
        filesData.allFiles.edges.map((files) => {
          const { thumbnailImage, name, id } = files.node;
          return (
            <Grid item xs={6} sm={6} md={6} lg={4} xl={4} key={id}>
              <motion.div whileHover={{ scale: 0.9 }} transition={transition}>
                <img
                  src={thumbnailImage !== '' ? thumbnailImage : NoPreviewImg}
                  className={classes.thumbnail}
                  alt="thumbnail"
                  onClick={() => {
                    history.push(`/forum/forum-details/${id}`); // file
                  }}
                />
                <div
                  className={classes.thumbnailTitleBox}
                  onClick={() => {
                    history.push(`/forum/forum-details/${id}`);
                  }}
                >
                  <div
                    style={{
                      padding: '10px',
                      width: '100%',
                      wordWrap: 'break-word',
                    }}
                  >
                    {name}
                  </div>
                </div>
              </motion.div>
            </Grid>
          );
        })}
    </>
  );
};

export default FileList;
