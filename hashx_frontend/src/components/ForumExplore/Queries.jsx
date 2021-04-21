import { gql } from '@apollo/client';
export const ALL_QUESTIONS = gql`
  query AllQuestions{
    allQuestions{
      edges {
        node {
          title
          content
          id
          owner {
            username
          }
          file{
            id
            name
            webContentLink
          }
        }
      }
    }
  }
`;
