import { gql } from '@apollo/client';

export const getUsersList = gql`
  query UsersList($offset: Int!, $limit: Int!) {
    users(data: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        email
      }
    }
  }
`;

export const getUserDetail = gql`
  query UserDetail($userId: ID) {
    user(id: $userId) {
      name
      email
      phone
      birthDate
      role
    }
  }
`;
