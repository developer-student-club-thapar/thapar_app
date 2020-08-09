import React from 'react';
import { Paper, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor, textColor } from '../../../theme/theme';
import { Document, Page, pdfjs } from 'react-pdf';
import sample from '../../../assets/sample.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
  },
  paperButtons2: {
    background: '#F0F0F3',
    height: '60px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '29px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  paperButtons3: {
    background: 'rgba(214, 7, 7, 0.47)',
    height: '60px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '29px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
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

const DocumentPreview = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paperGrid}>
        <Grid
          container
          spacing={2}
          justify="space-around"
          style={{ paddingTop: '30px' }}
        >
          <Grid item lg={3}>
            <Paper elevation={3} className={classes.paperButtons1}>
              <span className={classes.previewText}>
                <i className="fas fa-share-square fa-lg" />
                &nbsp;&nbsp;Preview
              </span>
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper elevation={3} className={classes.paperButtons2}>
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
            <Document file={sample}>
              <Page pageNumber={1} />
            </Document>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default DocumentPreview;
