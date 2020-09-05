import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ClassCard from './ClassCard';
import { makeStyles } from '@material-ui/core/styles';
import DayHeaderCard from './DayHeaderCard';
import EmptyCard from './Emptycard.jsx';
import './style.css';
import SideTime from './SideTime';
import { useQuery  } from "@apollo/client";
import {TIMETABLE_DAY} from './Queries';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    // backgroundColor: '#f4f1de',
    height: '100%',
  },
}));

const Timetable = () => {
  const classes = useStyles();
  const { data , error , loading} = useQuery(TIMETABLE_DAY);
  if(loading){
    return <div>{loading}</div>

  }
  if(error){
    return <div>{error}</div>

  }
 if(data){
   console.log(data);
 }
  return (

<Grid className={classes.root}>
      <Grid item direction="column">
        <SideTime />
      </Grid>
      <Grid item direction="column">
        <DayHeaderCard />
        <Box class="main-1">
          <ClassCard />
          <ClassCard />
        </Box>
      </Grid>
      <Grid item direction="column">
        <DayHeaderCard />
        <Box class="main-1">
          <ClassCard />
          <ClassCard />
        </Box>
      </Grid>
      <Grid item direction="column">
        <DayHeaderCard />
        <Box class="main-1">
          <ClassCard />
        </Box>
      </Grid>
      <Grid item direction="column">
        <DayHeaderCard />
        <Box class="main-1">
          <ClassCard />
          <ClassCard />
        </Box>
      </Grid>
    
      <div>Hey there</div>
    </Grid>
  );
};

export default Timetable;