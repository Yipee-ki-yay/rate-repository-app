import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $after: String
    $first: Int, 
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection, 
    $searchKeyword: String
    $ownerName: String
  ) {
    repositories (
      after: $after
      first: $first, 
      orderBy: $orderBy, 
      orderDirection: $orderDirection, 
      searchKeyword: $searchKeyword,
      ownerName: $ownerName
    ) {
      edges {
        node {
          createdAt
          description
          forksCount
          fullName
          id
          language
          name
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasPreviousPage
        hasNextPage
      }
      totalCount
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query authorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            repository {
              name
              ownerName
              id
            }
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasPreviousPage
          hasNextPage
        }
        totalCount
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ownerAvatarUrl
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      id
      url
    }
  }
`;

export const GET_REVIEWS = gql`
  query repository($id: ID!, $after: String, $first: Int) {
    repository(id: $id) {
      id
      fullName
      reviews(after: $after, first: $first) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasPreviousPage
          hasNextPage
        }
        totalCount
      }
    }
  }
`;