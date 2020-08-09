import { gql } from "@apollo/client";

export const ALL_COURSES = gql`
  query CoursesQuery {
    allCourses(first:10) {
      edges {
        node {
          code
          id
        }
      }
    }
  }
`;

export const STUDENT_DETAILS = gql`
  query StudentDetail($user: ID!) {
    allStudent(user: $user) {
      edges {
        node {
          branch {
            id
            name
            code
          }
          batch {
            id
            num
          }
        }
      }
    }
  }
`;
