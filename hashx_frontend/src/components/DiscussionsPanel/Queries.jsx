import { gql } from '@apollo/client';

export const REPLY_MUTATION = gql`
  mutation ReplyMutation($question: String!, $content: String!) {
    createReply(input: { question: $question, content: $content }) {
      reply {
        id
        creator {
          username
          id
        }
        content
      }
    }
  }
`;

export const QUESTION_REPLIES = gql`
  query QuestionReplies($question: ID!) {
    allReplies(question: $question) {
      edges {
        node {
          id
          content
          creator {
            username
          }
        }
      }
    }
  }
`;
