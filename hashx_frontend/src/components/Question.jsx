import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { secondaryColor, textColor } from '../theme/theme';

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

// The Question component, given the details of a question in its props, returns a card 
// having the question, its content, the question asker and so on
const Question = (props) => {
  const { key, questionId, questionTitle, questionUserName, questionContent} = props;
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
            {
              /* On clicking the title of a question, the discussion panel corresponding to the question
                is displayed. 
                The hyperLink class is added due to a bug which resulted in the cursor not changing to 
                a pointer on hovering over the title of the question
              */
            }
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

export default memo(Question);