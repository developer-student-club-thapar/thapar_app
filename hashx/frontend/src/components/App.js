import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// import Header from './layout/Header';
// import Dashboard from './leads/Dashboard';
import store from '../store';
import { Provider } from 'react-redux';
import SideNav from './SideNav';
import { HashRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import history from '../services/history';
import Nav from './Nav';

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        {/* <SideNav /> */}
        <Nav />
        <Routes />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
