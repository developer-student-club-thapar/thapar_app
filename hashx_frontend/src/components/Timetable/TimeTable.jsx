import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ClassCard from './ClassCard';
import { makeStyles } from '@material-ui/core/styles';
import DayHeaderCard from './DayHeaderCard';
import EmptyCard from './Emptycard.jsx';
import './style.css';
import SideTime from './SideTime';
import { useQuery } from '@apollo/client';
import { TIMETABLE_DAY } from './Queries';
import LayoutWrapper from '../Layout/Layout';
import Error from '../Error/Error';
import RocketAnimation from '../RocketAnimation';
import { UserContext } from '../../context/UserProvider';
import { timeTableMap } from '../../util/timetableMap';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    height: 'fit-content',
  },
}));

const Timetable = () => {
  const classes = useStyles();
  const { student } = useContext(UserContext);
  const { data, error, loading } = useQuery(TIMETABLE_DAY, {
    variables: {
      batch: [student.batch?.id],
    },
  });
  if (loading) {
    return (
      <LayoutWrapper>
        <RocketAnimation />
      </LayoutWrapper>
    );
  }
  if (error || !data) {
    return (
      <LayoutWrapper>
        <Error />
      </LayoutWrapper>
    );
  }

  const displayData = (day) => {
    let cardIndex = 0;
    return Object.keys(timeTableMap).map((key) => {
      if (
        timeTableMap[key] ===
        data[day]?.edges[cardIndex]?.node.period.edges[0].node.startTime
      ) {
        cardIndex = cardIndex + 1;
        console.log(cardIndex, 'index');
        console.log(data[day]?.edges[cardIndex]);
        return <ClassCard item={data[day]?.edges[cardIndex - 1]} />;
      } else {
        return <EmptyCard />;
      }
    });
  };

  return (
    <LayoutWrapper>
      <Grid className={classes.root}>
        <Grid item direction="column">
          <SideTime />
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="MONDAY" />
          <Box class="main-1">{displayData('monday')}</Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="TUESDAY" />
          <Box class="main-1">{displayData('tuesday')}</Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="WEDNESDAY" />
          <Box class="main-1">{displayData('wednesday')}</Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="THURSDAY" />
          <Box class="main-1">{displayData('thursday')}</Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="FRIDAY" />
          <Box class="main-1">{displayData('friday')}</Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="SATURDAY" />
          <Box class="main-1">{displayData('saturday')}</Box>
        </Grid>
      </Grid>
    </LayoutWrapper>
  );
};

export default Timetable;
