import { gql } from '@apollo/client';

export const FILE_TYPE_QUERY = gql`
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

export const FILES_QUERY = gql`
  query AllFiles($course: ID!, $type: ID!) {
    allFiles(course: $course, type: $type) {
      edges {
        node {
          name
          thumbnailImage
          id
          file
        }
      }
    }
  }
`;

export const COURSE_QUERY = gql`
  query CourseQuery($id: ID!) {
    course(id: $id) {
      name
      courseSite
      code
      id
    }
  }
`;
export const CDN_URL = gql`
  query CdnUrl($fileid: String!) {
    amazonurl(fileid: $fileid)
  }
`;

export const SUBSCRIBE_COURSE = gql`
  mutation subscribeCourse($input: SubscribeToCourseInput!) {
    subscribeToCourse(input: $input) {
      success
    }
  }
`;
