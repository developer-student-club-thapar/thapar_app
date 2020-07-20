import { gql } from 'apollo-boost';

export const SEND_STUDENT_DETAILS = gql`
  mutation CreateStudent($branch: String, $batch: String, $gender: String) {
    createStudent(input: { branch: $branch, batch: $batch, gender: $gender }) {
      student {
        id
      }
    }
  }
`;
