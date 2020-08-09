import {gql} from '@apollo/client'

export const ALL_COURSES = gql`
query CoursesQuery {
  allCourses {
    edges {
      node {
        code
        id
      }
    }
  }
}
`;