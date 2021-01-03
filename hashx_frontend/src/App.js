import React, { useEffect } from 'react';
import firebase from './util/init-fcm';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import UserContextProvider from './context/UserProvider';
import { ApolloClient, ApolloProvider } from '@apollo/client';
// import { getApiUrl } from './util/url';
import { cache } from './graphql/Cache.js';
// import { getAccessToken } from './util/token';
import { createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://tietdev.vexio.in/graphql/',
  credentials: 'include',
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   // const token = localStorage.getItem('accessToken');
//   // // // return the headers to the context so httpLink can read them
//   // // TODO Add https cookie from server side
//   // return {
//   //   headers: {
//   //     ...headers,
//   //     authorization: token ? `JWT ${token}` : '',
//   //   },
//   // };
// });

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache: cache,
});

// const client = new ApolloClient({
//   uri: 'https://tietdev.vexio.in/graphql/',
//   credentials: 'include',

//   request: (operation) => {
//     const accessToken = getAccessToken();
//     operation.setContext({
//       headers: {
//         authorization: accessToken ? `JWT ${accessToken}` : '',
//       },
//     });
//   },
//   cache: cache,
// });

// const requestLink = new ApolloLink(
//   (operation, forward) =>
//     new Observable((observer) => {
//       let handle;
//       Promise.resolve(operation)
//         .then((operation) => {
//           const accessToken = getAccessToken();
//           operation.setContext({
//             headers: {
//               authorization: accessToken ? `JWT ${accessToken}` : '',
//             },
//           });
//         })
//         .then(() => {
//           handle = forward(operation).subscribe({
//             next: observer.next.bind(observer),
//             error: observer.error.bind(observer),
//             complete: observer.complete.bind(observer),
//           });
//         })
//         .catch(observer.error.bind(observer));

//       return () => {
//         if (handle) handle.unsubscribe();
//       };
//     }),
// );

// const client = new ApolloClient({
//   link: ApolloLink.from([
//     new TokenRefreshLink({
//       isTokenValidOrUndefined: () => {
//         const token = getAccessToken();
//         if (!token) {
//           return true;
//         }

//         try {
//           const { exp } = jwtDecode(token);
//           if (Date.now() >= exp * 1000) {
//             return false;
//           } else {
//             return true;
//           }
//         } catch {
//           return false;
//         }
//       },
//       fetchAccessToken: async () => {
//         const resp = await fetch('http://localhost:8000/graphql/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//           body: JSON.stringify({
//             query,
//           }),
//         });
//         let k = await resp.json();
//         console.log(k);
//         k = k.data.refreshToken.token;
//         console.log(k);
//         return JSON.stringify({ access_token: `${k}` });
//       },
//       handleResponse: (operation, accessTokenField) => (response) => {
//         setAccessToken(response.access_token);
//       },
//       handleError: (err) => {
//         console.warn('Your refresh token is invalid. Try to relogin');
//         console.log('Error', err);
//       },
//     }),
//     onError(({ graphQLErrors, networkError }) => {
//       console.log(graphQLErrors);
//       console.log(networkError);
//     }),
//     requestLink,
//     new HttpLink({
//       uri: 'http://localhost:8000/graphql/',
//       credentials: 'include',
//     }),
//   ]),
//   cache,
//   resolvers: {
//     Mutation: {
//       updateNetworkStatus: (_, { isConnected }, { cache }) => {
//         cache.writeData({ data: { isConnected } });
//         return null;
//       },
//     },
//   },
// });

// cache.writeData({
//   data: {
//     isConnected: true,
//   },
// });

// // const fetch = createApolloFetch({
// //   uri: 'http://localhost:8000/graphql',
// // });

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
