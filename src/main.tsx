import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import { client } from './graphql/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
  </StrictMode>,
);
