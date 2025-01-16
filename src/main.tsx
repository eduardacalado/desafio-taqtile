import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import { client } from './graphql/client';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    users: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: 1,
          email: 'duda@email.com',
          name: 'eduarda teste',
        },
        {
          id: 2,
          email: 'duda2@email.com',
          name: 'eduardo calado',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';
    this.passthrough('https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql');
    this.get('/users', () => {
      return this.schema.all('users');
    });
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
  </StrictMode>,
);
