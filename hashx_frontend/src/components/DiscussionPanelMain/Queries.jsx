import { gql } from '@apollo/client';
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
        webContentLink
        thumbnailImage
      }
      content
      replies {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;
