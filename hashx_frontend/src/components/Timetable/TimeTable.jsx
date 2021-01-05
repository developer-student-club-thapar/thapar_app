import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    // backgroundColor: '#f4f1de',
    height: 'fit-content',
  },
}));

const Timetable = () => {
  const classes = useStyles();
  const { data, error, loading } = useQuery(TIMETABLE_DAY);
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
  return (
    <LayoutWrapper>
      <Grid className={classes.root}>
        <Grid item direction="column">
          <SideTime />
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="MONDAY" />
          <Box class="main-1">
            {data?.monday?.edges?.map((item, index) => (
              <ClassCard key={index} item={item} />
            ))}
          </Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="TUESDAY" />
          <Box class="main-1">
            {data?.tuesday?.edges?.map((item, index) => (
              <ClassCard key={index} item={item} />
            ))}
          </Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="WEDNESDAY" />
          <Box class="main-1">
            {data?.wednesday?.edges?.map((item, index) => (
              <ClassCard key={index} item={item} />
            ))}
          </Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="THURSDAY" />
          <Box class="main-1">
            {data?.thursday?.edges?.map((item, index) => (
              <ClassCard key={index} item={item} />
            ))}
          </Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="FRIDAY" />
          <Box class="main-1">
            {data?.friday?.edges?.map((item, index) => (
              <ClassCard key={index} item={item} />
            ))}
          </Box>
        </Grid>
        <Grid item direction="column">
          <DayHeaderCard day="SATURDAY" />
          <Box class="main-1">
            {data?.saturday?.edges?.map((item, index) => (
              <ClassCard key={index} item={item} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </LayoutWrapper>
  );
};

export default Timetable;
