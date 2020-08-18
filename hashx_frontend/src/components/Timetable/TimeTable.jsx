import React from 'react';
import './style.css';
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  TimelineMonth,
  TimelineViews,
  ViewsDirective,
  ViewDirective,
} from '@syncfusion/ej2-react-schedule';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { Box } from '@material-ui/core';
// import { spacing } from '@material-ui/system';

function Timetable() {
  return (
    <Box p={3}>
      <ScheduleComponent height="100%" currentView="week">
        <ViewsDirective>
          <ViewDirective option="Day" startHour="9:00" endHour="18:00" />
          <ViewDirective option="Week" />
          <ViewDirective
            option="Month"
            isSelected
            showWeekNumber
            showWeekend
            displayName="timetable"
          />
          <ViewDirective option="Agenda" />
        </ViewsDirective>
        <Inject
          services={[
            Day,
            Week,
            Month,
            Agenda,
            TimelineViews,
            TimelineMonth,
            WorkWeek,
          ]}
        />
      </ScheduleComponent>
    </Box>
  );
}

export default Timetable;
