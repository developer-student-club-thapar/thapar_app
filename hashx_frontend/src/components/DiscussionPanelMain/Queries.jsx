import { gql } from 'apollo-boost';
export const QUESTION_DETAIL = gql`
  query QuestionDetail($id: ID!) {
    questions(id: $id) {
      id
      owner {
        username
      }
      title
      file {
        name
        id
      }
      content
      replies {
        edges {
          node {
            id
            creator {
              username
              id
            }
            content
          }
        }
      }
    }
  }
`;
