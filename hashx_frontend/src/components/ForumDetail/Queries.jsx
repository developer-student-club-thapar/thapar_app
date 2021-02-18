import { gql } from '@apollo/client';
export const FILE_QUESTIONS = gql`
  query FileQuestions($file: ID!) {
    allQuestions(file: $file) {
      edges {
        node {
          title
          content
          id
          file {
            id
            thumbnailImage
            name
            file
            webContentLink
          }
          owner {
            username
          }
          replies {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;
