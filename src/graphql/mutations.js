import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String) {
    createReview(
      review: { 
        ownerName: $ownerName, 
        repositoryName: $repositoryName, 
        rating: $rating, 
        text: $text 
      }
    ) {
      id
      user {
        id
        username
      }
      rating
      createdAt
      text
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(
      user: { 
        username: $username, 
        password: $password, 
      }
    ) {
      id
      username
    }
  }
`;