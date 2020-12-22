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
  mutation SocialAuth {
    socialAuth(
      accessToken: "ya29.a0AfH6SMDFCwccHFvJ66CnCUf_IahVV5f94Fht5zejWKj3SeoUYG2Qb8X6sWOTC8C3m8rTHyyPYcvSKVXIRWquWr4nf_Ck57UV1eJSMTTTE-MvdGzJhzhi6bvv9H5hQmvPrbDL7kG8eAZrsqMJgce5AjZMlSzl9BcXv1GQBjhd6pGwyw"
      provider: "google-oauth2"
    ) {
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
