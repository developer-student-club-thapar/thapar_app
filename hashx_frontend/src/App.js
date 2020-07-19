import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import firebase from './components/init-fcm';
import { Provider } from 'react-redux';
import SideNav from './components/SideNav';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import Nav from './components/Nav';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import UserContextProvider from './context/UserProvider';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: '/graphql',
  credentials: 'include',
  request: (operation) => {
    
    operation.setContext({
      headers: {

      },
    });
  },
  cache: new InMemoryCache(),
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
          <Router history={history}>
            <div className="App">
              <Routes />
            </div>
          </Router>
        </UserContextProvider>
      </ApolloProvider>
  );
};

export default App;
