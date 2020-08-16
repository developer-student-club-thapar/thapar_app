import React from 'react';
import { Paper, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor, textColor } from '../../../theme/theme';
import { Document, Page, pdfjs } from 'react-pdf';
import sample from '../../../assets/sample.pdf';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';

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
  addIconGrid: {
    display: 'grid',
    placeItems: 'center',
  },
  discussionItem: {
    borderRadius: '30px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '20px',
    margin: '10px',
  },
  panelText: {
    fontWeight: 'bolder',
    padding: '20px',
  },
  profileAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  primaryGridText: {
    fontWeight: 'bolder',
  },
  paperButtons1: {
    background: '#00293B',
    height: '60px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '29px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    margin: '10px',
    cursor: 'pointer',
  },
  seeMoreText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
}));

const SidePanel = () => {
  const classes = useStyles();
  const history = useHistory();
  const discussionCards = [];
  for (let i = 0; i < 4; i++) {
    discussionCards.push(
      <Grid item xs={12}>
        <Paper elevation={3} className={classes.discussionItem}>
          <Grid container spacing={2}>
            <Grid item xs={2} style={{ padding: '10px' }}>
              <Avatar
                alt="Profile"
                src="https://picsum.photos/200/300"
                className={classes.profileAvatar}
              />
            </Grid>
            <Grid item xs={10}>
              <h4 className={classes.primaryGridText}>
                Processes in Queue&nbsp;&nbsp;
                <i
                  className="fas fa-share-square"
                  style={{ color: '#466D3D' }}
                />
              </h4>
              <p>
                Consider three processes (process id 0, 1, 2 respectively) with
                compute time bursts 2, 4 and 8 time units. All processes arrive
                at time zero......
              </p>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <h6 style={{ fontWeight: 'bolder' }}>
                    <i
                      class="far fa-heart fa-lg"
                      style={{ color: '#E10505' }}
                    />
                    &nbsp;10
                  </h6>
                </Grid>
                <Grid item xs={2}>
                  <h6 style={{ fontWeight: 'bolder' }}>
                    <i class="far fa-edit fa-lg" style={{ color: '#7C73F0' }} />
                    &nbsp;10
                  </h6>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>,
    );
  }
  return (
    <>
      <Paper elevation={3} className={classes.paperGrid}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <h3 className={classes.panelText}>Discussion Panel</h3>
          </Grid>
          <Grid item xs={3} className={classes.addIconGrid}>
            <i className="fas fa-plus fa-2x" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {discussionCards}
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              className={classes.paperButtons1}
              onClick={() => {
                history.push('/forum/discussion-panel');
              }}
            >
              <span className={classes.seeMoreText}>
                See More&nbsp;&nbsp;&nbsp;
                <i className="fas fa-share-square fa-lg" />
              </span>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default SidePanel;
