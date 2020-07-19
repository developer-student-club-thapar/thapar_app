import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Deck from '../components/Deck';
import Scroll from '../components/Scroll';

import { spacing } from '@material-ui/system';
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) =>
  createStyles({
    landingRoot: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      overflowX: 'hidden',
    },
    item: {
      width: '',
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: 'transparent',
    },
    deckBox: {
      position: 'relative',
      zIndex: '2',
      [theme.breakpoints.down('sm')]: { height: '35vh' },
      [theme.breakpoints.up('sm')]: { height: '50vh' },
      [theme.breakpoints.up('md')]: { height: '70vh' },
      [theme.breakpoints.up('lg')]: { height: '70vh' },
      [theme.breakpoints.up('xl')]: { height: '70vh' },
    },
    iconGridContainer: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        justify: 'flex-start',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        justify: 'center',
        alignItems: 'center',
      },
    },
  })
);

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 1)',
    boxShadow: theme.shadows[2],
    fontSize: '14px',
    borderRadius: '25px',
  },
}))(Tooltip);

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.landingRoot}>
      <Scroll />
      <Navbar />

      <br />
      <Box p={2}>
        <Grid
          container
          direction="row-reverse"
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} md={7}>
            <Box className={classes.deckBox}>
              {/* <Paper elevation={4} className={classes.deck}>
                yo
              </Paper> */}
              <Deck />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h3">PLACEHOLDER TEXT</Typography>
            </Paper>
          </Grid>
          <Grid
            container
            item
            className={classes.iconGridContainer}
            xs={12}
            md={1}
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <LightTooltip
                TransitionComponent={Zoom}
                title="Next Post"
                placement="right"
              >
                <IconButton aria-label="next">
                  <SkipNextIcon style={{ color: 'black' }} />
                </IconButton>
              </LightTooltip>
            </Grid>
            <Grid item>
              <LightTooltip
                TransitionComponent={Zoom}
                title="Previous Post"
                placement="right"
              >
                <IconButton aria-label="delete">
                  <SkipPreviousIcon style={{ color: 'black' }} />
                </IconButton>
              </LightTooltip>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Landing;
