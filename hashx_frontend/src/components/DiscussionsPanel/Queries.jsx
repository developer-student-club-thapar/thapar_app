import { gql } from 'apollo-boost';

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
