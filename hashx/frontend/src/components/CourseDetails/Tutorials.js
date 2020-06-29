import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Bounce from 'react-reveal/Bounce';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  return (
    <Fragment>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: '20px',
          textAlign: 'center',
          height: '500px',
          backgroundColor: '#2C3055',
          color: '#FBF9FF',
          marginTop: '-30px',
        }}
      >
        <br />
        <h1 style={{ fontWeight: '400' }}>Tutorials</h1>
      </Paper>
    </Fragment>
  );
};

export default Tutorials;
