import React, { Component, Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import { Provider } from 'react-redux';
import SideNav from './SideNav';
import { HashRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import history from '../services/history';
import Nav from './Nav';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import UserContextProvider from '../context/UserProvider';

import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'graphql/',
  credentials: 'same-origin',
  request: (operation) => {
    const accessToken = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: accessToken ? `JWT ${accessToken}` : '',
      },
    });
  },
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <UserContextProvider>
          <Router history={history}>
            <div className="App">
              <Routes />
            </div>
          </Router>
        </UserContextProvider>
      </ApolloProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
