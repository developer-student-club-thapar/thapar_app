import React from 'react';
import { Box, Grid, Paper, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { secondaryColor, textColor } from '../theme/theme';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  discussionItem: {
    borderRadius: '30px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '30px',
    margin: '0 40px 20px 40px',
  },
  profileAvatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
  primaryGridText: {
    fontWeight: 'bolder',
  },
  profileId: {
    color: '#747474',
  },
  hyperLink: {
    cursor: 'pointer',
  }
}));

const Question = (props) => {
  const { questionId, questionTitle, questionUserName, questionContent} = props;
  const classes = useStyles();
  const history = useHistory();

  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} className={classes.discussionItem}>
          <Grid container spacing={2}>
            <Grid item xs={2} style={{ padding: '20px' }}>
              <Avatar
                alt="Profile"
                src="https://picsum.photos/200/300"
                className={classes.profileAvatar}
              />
            </Grid>
            <Grid item xs={10}>
              <h4 className={`${classes.primaryGridText} ${classes.hyperLink}`} onClick={() => {
                history.push(`/forum/discussion-panel/${questionId}`)
              }}>
                {questionTitle}&nbsp;&nbsp;
              </h4>
              <h6 className={classes.profileId}>
                {questionUserName}
              </h6>
              <p>{questionContent}</p>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <h6 style={{ fontWeight: 'bolder' }}>
                    <i
                      className="far fa-heart fa-lg"
                      style={{ color: '#E10505' }}
                    />
                    &nbsp;10
                  </h6>
                </Grid>
                <Grid item xs={2}>
                  <h6 style={{ fontWeight: 'bolder' }}>
                    <i
                      className="far fa-edit fa-lg"
                      style={{ color: '#7C73F0' }}
                    />
                    &nbsp;10
                  </h6>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Question;