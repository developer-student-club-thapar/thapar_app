import { gql } from '@apollo/client';

export const ALL_COURSES = gql`
  query AllCourses($id: ID!) {
    branch(id: $id) {
      name
      course {
        edges {
          node {
            name
            id
            code
          }
        }
      }
    }
  }
`;
