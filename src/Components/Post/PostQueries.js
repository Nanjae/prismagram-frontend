import { gql } from "apollo-boost";

export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation addComent($postId: String!, $text: String!) {
    addComent(postId: $postId, text: $text) {
      id
      text
      user {
        username
      }
    }
  }
`;
