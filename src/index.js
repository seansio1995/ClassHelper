import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Homepage from './components/Homepage';
import Limit from './components/Limit';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path = "/login" component={Login} />
            <Route path = "/homepage" component = {Homepage} />
            <Route path = "/limit" component = {Limit}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
