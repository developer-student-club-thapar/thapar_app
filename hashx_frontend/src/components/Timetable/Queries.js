import { gql } from '@apollo/client';

let fragments = {
  day: gql`
    fragment Day on OnlineClassNode {
      id
      day
      meetingURL
      course {
        id
        name
        code
      }
      period {
        edges {
          node {
            id
            startTime
            endTime
          }
        }
      }
    }
  `,
};

export const TIMETABLE_DAY = gql`
  query getTimetable($batch: [ID]) {
    monday: allOnlineclasses(day: "Monday", batch: $batch) {
      edges {
        node {
          ...Day
        }
      }
    }
    tuesday: allOnlineclasses(day: "Tuesday", batch: $batch) {
      edges {
        node {
          ...Day
        }
      }
    }
    wednesday: allOnlineclasses(day: "Wednesday", batch: $batch) {
      edges {
        node {
          ...Day
        }
      }
    }
    thursday: allOnlineclasses(day: "Thursday", batch: $batch) {
      edges {
        node {
          ...Day
        }
      }
    }
    friday: allOnlineclasses(day: "Friday", batch: $batch) {
      edges {
        node {
          ...Day
        }
      }
    }
    saturday: allOnlineclasses(day: "Saturday", batch: $batch) {
      edges {
        node {
          ...Day
        }
      }
    }
  }
  ${fragments.day}
`;
