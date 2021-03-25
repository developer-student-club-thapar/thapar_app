import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginLeft: '20px',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  day: {
    fontWeight: 'bolder',
    color: '#2b2d42',
  },
  date: {
    fontSize: '0.75rem',
    opacity: '0.75',
    alignSelf: 'flex-end',
  },
}));
const nowDate = new Date();
const date =
  nowDate.getDate() +
  '-' +
  (nowDate.getMonth() + 1) +
  '-' +
  nowDate.getFullYear();
const DayHeaderCard = ({ day }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="span" className={classes.day}>
        {day}
      </Typography>
      <Typography component="span" className={classes.date}>
        {date}
      </Typography>
    </Box>
  );
};

export default memo(DayHeaderCard);
