import React, { useState, useRef, useEffect } from 'react';
import { Grid, Paper, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor, textColor } from '../../theme/theme';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  panelText: {
    fontWeight: 'bolder',
    padding: '20px',
    color: '#00000',
  },
  addIconGrid: {
    display: 'grid',
    placeItems: 'center',
  },
  addGrid: {
    borderRadius: '10px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    height: '50px',
    width: '50px',
    display: 'grid',
    placeItems: 'center',
  },
  addText: {
    color: '#747474',
    fontWeight: 'bolder',
  },
  chatBox: {
    height: '450px',
    overflowY: 'scroll',
  },
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
  chatItem: {
    justifyContent: 'flex-end',
  },
  inputBox: {
    backgroundColor: '#ffffff',
  },
  sendButton: {
    backgroundColor: '#F0F0F3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  profileAvatarMessage: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const Discussions = () => {
  const classes = useStyles();
  const messageBox = useRef();
  const [messages, setMessages] = useState([
    {
      sender: 'lorem_ipsum',
      message: 'I really think the answer is so wrong lol',
      likes: 10,
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const addMessage = (event) => {
    setCurrentMessage(event.target.value);
  };
  const sendMessage = () => {
    const obj = {
      sender: 'lorem_ipsum',
      message: currentMessage,
      likes: 10,
    };
    setMessages([...messages, obj]);
    setCurrentMessage('');
  };
  const scrollToBottom = () => {
    messageBox.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paperGrid}>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <h3 className={classes.panelText}>
                  Discussion <span style={{ color: '#747474' }}>Panel</span>
                </h3>
              </Grid>
              <Grid item xs={3} className={classes.addIconGrid}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className={classes.addIconGrid}>
                    <h5 className={classes.addText}>Add a Post&nbsp;</h5>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={3} className={classes.addGrid}>
                      <i
                        className="fas fa-plus fa-lg"
                        style={{ color: '#000000' }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
                      <h4 className={classes.primaryGridText}>
                        Processes in Queue&nbsp;&nbsp;
                      </h4>
                      <h6 className={classes.profileId}>@lorem_ipsum</h6>
                      <p>
                        Consider three processes (process id 0, 1, 2
                        respectively) with compute time bursts 2, 4 and 8 time
                        units. All processes arrive at time zero......
                      </p>
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

            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.chatBox}>
                <Grid container spacing={2} className={classes.chatItem}>
                  {messages.map((item, index) => (
                    <Grow in key={index}>
                      <Grid item xs={9}>
                        <Paper elevation={3} className={classes.discussionItem}>
                          <Grid container spacing={2}>
                            <Grid item xs={2} style={{ padding: '10px' }}>
                              <Avatar
                                alt="Profile"
                                src="https://picsum.photos/200/300"
                                className={classes.profileAvatarMessage}
                              />
                            </Grid>
                            <Grid item xs={10}>
                              <h6 className={classes.profileId}>
                                @{item.sender}
                              </h6>
                              <p>{item.message}</p>
                              <Grid container spacing={2}>
                                <Grid item xs={2}>
                                  <h6 style={{ fontWeight: 'bolder' }}>
                                    <i
                                      className="far fa-heart fa-lg"
                                      style={{ color: '#E10505' }}
                                    />
                                    &nbsp;{item.likes}
                                  </h6>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grow>
                  ))}
                  <div ref={messageBox} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} justify="space-around">
              <Grid item xs={10}>
                <TextField
                  id="message-box"
                  fullWidth
                  variant="outlined"
                  className={classes.inputBox}
                  placeholder="Send a Message"
                  onChange={(event) => {
                    addMessage(event);
                  }}
                  value={currentMessage}
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  className={classes.sendButton}
                  onClick={sendMessage}
                >
                  <i
                    className="fas fa-paper-plane fa-3x"
                    style={{ color: '#7D74EF' }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Discussions;
