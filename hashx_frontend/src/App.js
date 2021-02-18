import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import firebase from './util/init-fcm';
import Routes from './routes';
import UserContextProvider from './context/UserProvider';
import { cache } from './graphql/Cache.js';

const httpLink = createHttpLink({
  uri: 'https://tietdev.vexio.in/graphql/',
  credentials: 'include',
});

const client = new ApolloClient({
  link: httpLink,
  cache: cache,
  // ! Disables in production
  connectToDevTools: process.env.NODE_ENV === 'production' ? false : true,
});

const App = () => {
  useEffect(() => {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        console.log('Have Permission');
        return messaging.getToken();
      })
      .then((token) => {
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Router>
          <div className="App">
            <Routes />
          </div>
        </Router>
      </UserContextProvider>
    </ApolloProvider>
  );
};

export default App;
