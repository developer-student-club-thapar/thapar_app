import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '125px',
    margin: '15px 0px 10px 0px',
    position: 'relative',
    paddingTop: '-2px',
    fontSize: '16px',
    fontWeight: '800',
    fontStyle: 'italic',
    opacity: '.75',
  },
}));

const time = [
  '8:00',
  '8:50',
  '9:40',
  '10:30',
  '11:20',
  '12:10',
  '1:00',
  '1:50',
  '2:40',
  '3:30',
  '4:20',
  '5:10',
];

const SideTime = () => {
  const classes = useStyles();
  return (
    <>
      <Box style={{ visibility: 'hidden' }}>r </Box>
      {time.map((element, index) => {
        return (
          <Box key={index} className={classes.root}>
            {element}
          </Box>
        );
      })}
    </>
  );
};

export default SideTime;
