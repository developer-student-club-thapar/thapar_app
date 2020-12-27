import { gql } from '@apollo/client';

export const ALL_CLASSMATES = gql`
  query AllClassmates($id: ID!) {
    batch(id: $id) {
      studentSet {
        edges {
          node {
            user {
              username
              firstName
              lastName
            }
          }
        }
      }
    }
  }
`;
