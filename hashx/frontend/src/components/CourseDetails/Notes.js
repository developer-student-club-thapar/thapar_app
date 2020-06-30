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
import image from '../../assets/img.jpg';
import { useHistory } from 'react-router-dom';

const Notes = () => {
  let history = useHistory();
  const tutorialsheets = [];
  for (let i = 0; i < 6; i++) {
    tutorialsheets.push(
      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <img
          src="https://picsum.photos/150/220"
          style={{ borderRadius: '10px', cursor: 'pointer' }}
          onClick={() => {
            history.push(`/pdfview`);
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
          <div style={{ paddingTop: '10px' }}>Operator Overloading</div>
        </div>
      </Grid>,
    );
  }
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
        <h1 style={{ fontWeight: '400' }}>Notes/Slides</h1>
        <Grid container spacing={2}>
          {tutorialsheets}
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Notes;
