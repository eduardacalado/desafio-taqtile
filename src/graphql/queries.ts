import { gql } from '@apollo/client';

export const getUsersList = gql`
  query UsersList($offset: Int!, $limit: Int!) {
    users(data: { offset: $offset, limit: $limit }) {
      nodes {
        name
        email
      }
    }
  }
`;
