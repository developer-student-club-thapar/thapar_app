import { gql } from 'apollo-boost';
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
