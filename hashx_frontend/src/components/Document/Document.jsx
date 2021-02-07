import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor, textColor } from '../../theme/theme';
import sample from '../../assets/sample.pdf';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'inline-block',
    [theme.breakpoints.only('xs')]: {
      fontSize: '30px',
    },
  },
  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  paperButtons1: {
    background: 'rgba(26, 248, 22, 0.35)',
    height: '60px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '29px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    cursor: 'pointer',
  },
  paperButtons2: {
    background: '#F0F0F3',
    height: '60px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '29px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    cursor: 'pointer',
  },
  paperButtons3: {
    background: 'rgba(214, 7, 7, 0.47)',
    height: '60px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '29px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    cursor: 'pointer',
  },
  previewText: {
    color: '#466D3D',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  downloadText: {
    color: '#00293B',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  forumText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
}));

const DocumentPreview = ({ file }) => {
  const classes = useStyles();
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Paper elevation={3} className={classes.paperGrid}>
          <Grid
            container
            spacing={2}
            justify="space-around"
            style={{ paddingTop: '30px' }}
          >
            <Grid item lg={3}>
              <Paper
                elevation={3}
                className={classes.paperButtons1}
                onClick={() => {
                  window.open(`${file.webContentLink}`);
                }}
              >
                <span className={classes.previewText}>
                  <i className="fas fa-share-square fa-lg" />
                  &nbsp;&nbsp;Preview
                </span>
              </Paper>
            </Grid>
            <Grid item lg={3}>
              <Paper
                elevation={3}
                className={classes.paperButtons2}
                onClick={() => {
                  window.open(`${file.webContentLink}`);
                }}
              >
                <span className={classes.downloadText}>
                  <i className="fas fa-download fa-lg" />
                  &nbsp;&nbsp;Download
                </span>
              </Paper>
            </Grid>
            <Grid item lg={3}>
              <Paper elevation={3} className={classes.paperButtons3}>
                <span className={classes.forumText}>
                  <i className="fas fa-paperclip fa-lg" />
                  &nbsp;&nbsp;Vexio Forums
                </span>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: '30px' }}>
            <Grid item lg={12}>
              <div
                style={{
                  height: '900px',
                }}
              >
                <Viewer fileUrl={sample} />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Worker>
    </>
  );
};

export default DocumentPreview;
