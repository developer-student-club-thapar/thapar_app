import React from 'react';
import './styles.css';
import { Grid } from '@material-ui/core';
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Timetable = () => {
  return (
    <>
      <Grid item xs={12}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          themeSystem="standard"
        />
      </Grid>
    </>
  );
};

export default Timetable;
