import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  graphQLErrors?.forEach((element) => {
    if ('code' in element && element.code === 401) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('token');
    }
  });
});

export const client = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache(),
});
