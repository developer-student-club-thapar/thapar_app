import { gql } from 'apollo-boost';

export const SEND_STUDENT_DETAILS = gql`
  mutation CreateStudent(
    $branch: String!
    $batch: String!
    $gender: String!
    $rollno: Int!
  ) {
    createStudent(
      input: {
        branch: $branch
        batch: $batch
        gender: $gender
        rollno: $rollno
      }
    ) {
      student {
        id
      }
    }
  }
`;

export const ALL_BATCHES = gql`
  {
    allBatches {
      edges {
        node {
          id
          num
        }
      }
    }
  }
`;

export const ALL_BRANCHES = gql`
  {
    allBranches {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`;
