import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    minHeight: '70px',
    // marginLeft: '20px',
    // marginRight: '20px',

    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Emptycard = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}> </Box>
    </>
  );
};

export default Emptycard;
