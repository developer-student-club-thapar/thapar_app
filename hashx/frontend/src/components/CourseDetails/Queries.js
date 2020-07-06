import { gql } from 'apollo-boost';

const FILE_TYPE_QUERY = gql`
  query AllFileTypes($slug: String!) {
    allFiletypes(slug: $slug) {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`;

const FILES_QUERY = gql`
  query AllFiles($course: ID!, $type: ID!) {
    allFiles(course: $course, type: $type) {
      edges {
        node {
          name
          thumbnailImage
          file
          id
        }
      }
    }
  }
`;
