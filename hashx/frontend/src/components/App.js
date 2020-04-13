import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import store from '../store';
import { Provider } from 'react-redux';


class App extends Component {
    render() {
        return (
            <h1>Hello world it works !</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));