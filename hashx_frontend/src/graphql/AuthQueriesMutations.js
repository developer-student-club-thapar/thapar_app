import { gql } from '@apollo/client';

export const SEND_STUDENT_DETAILS = gql`
  mutation CreateStudent(
    $branch: String!
    $batch: String!
    $gender: String!
    $rollno: Int!
    $bio: String!
    $invitedCode: String!
  ) {
    createStudent(
      input: {
        branch: $branch
        batch: $batch
        gender: $gender
        rollno: $rollno
        bio: $bio
        invitedCode: $invitedCode
      }
    ) {
      student {
        id
      }
    }
  }
`;

export const GET_BATCHES = gql`
  query GetBatches($branch: ID!) {
    allBatches(branch: $branch) {
      edges {
        node {
          id
          num
        }
      }
    }
  }
`;

export const GET_BRANCHES = gql`
  query GetBranches($year: String!) {
    allBranches(year: $year) {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`;

export const SOCIAL_AUTH = gql`
  mutation SocialAuth($accessToken: String!) {
    socialAuth(accessToken: $accessToken, provider: "google-oauth2") {
      token
      jwtRefreshToken
      newUser
      user {
        username
        id
      }
    }
  }
`;
