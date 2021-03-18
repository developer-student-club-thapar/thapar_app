import { gql } from '@apollo/client';

export const ALL_COURSES = gql`
  query AllCourses($after: String) {
    allCourses(first: 10, after: $after) {
      edges {
        node {
          name
          id
          code
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

export const MY_COURSES = gql`
  query MyCourses($id: ID!) {
    student(id: $id) {
      subscribedCourses {
        edges {
          node {
            id
            name
            code
          }
        }
      }
    }
  }
`;
