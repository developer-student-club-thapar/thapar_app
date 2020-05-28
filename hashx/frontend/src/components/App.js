import React, { Component, Fragment } from 'react';
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

const client = new ApolloClient({
  uri: '/graphql/',
});

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router history={history}>
          <div className="App">
            <Routes />
          </div>
        </Router>
      </ApolloProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
