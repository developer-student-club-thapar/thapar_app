import { gql  } from "@apollo/client";

let fragments = {
    day : gql`
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

{
    monday : allOnlineclasses(day:"Monday"){
        edges{
            node{
                ...Day
            }
        }
    }
    tuesday : allOnlineclasses(day:"Tuesday"){
        edges{
            node{
                ...Day
            }
        }
    }
    wednesday : allOnlineclasses(day:"Wednesday"){
        edges{
            node{
                ...Day
            }
        }
    }
    thursday : allOnlineclasses(day:"Thursday"){
        edges{
            node{
                ...Day
            }
        }
    }
    friday : allOnlineclasses(day:"Friday"){
        edges{
            node{
                ...Day
            }
        }
    }
    saturday : allOnlineclasses(day:"Saturday"){
        edges{
            node{
                ...Day
            }
        }
    }
}
${fragments.day}
`;