import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor, textColor } from '../../theme/theme';
import assignment from '../../assets/img.jpg';

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
    marginTop: 10,
  },
  paperButtons3: {
    background: 'rgba(7, 127, 214, 0.47)',
    height: '60px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '29px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    marginTop: 10,
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
  whatsappText: {
    color: '#00293B',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  img: {
    width: '100%',
    objectFit: 'contain',
    padding: 30,
  },
  buttonGrid: {
    marginTop: 30,
  },
}));

const FileSideView = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paperGrid}>
            <img src={assignment} className={classes.img} alt="assignment" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <h4>Operator Overloading</h4>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.buttonGrid}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paperButtons1}>
            <span className={classes.previewText}>
              <i className="fas fa-share-square fa-lg" />
              &nbsp;&nbsp;Preview
            </span>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paperButtons2}>
            <span className={classes.downloadText}>
              <i className="fas fa-download fa-lg" />
              &nbsp;&nbsp;Download
            </span>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paperButtons3}>
            <span className={classes.whatsappText}>
              <i className="fas fa-share fa-lg" />
              &nbsp;&nbsp;Share on Whatsapp
            </span>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default FileSideView;
