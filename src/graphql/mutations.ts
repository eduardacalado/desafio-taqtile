import { gql } from '@apollo/client';

export const MutationLogin = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export const MutationCreateUser = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      id
      name
      email
      phone
      birthDate
      role
    }
  }
`;
