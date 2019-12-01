import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Limit from './components/Limit';
import StudentHomepage from './components/StudentHomepage'
import InstructorHomepage from './components/InstructorHomepage'
import CourseHomepageStudent from './components/CourseHomepageStudent'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path = "/login" component={Login} />
            <Route path = "/studentHomepage" component = {StudentHomepage} />
            <Route path = "/instructorHomepage" component = {InstructorHomepage} />
            <Route path = "/limit" component = {Limit}/>
            <Route path = "/CourseHomepageStudent" component = {CourseHomepageStudent} />
            <Route path ="/messageWarning" component = {MessageWarning} />
            <Route path ="/facialWarning" component = {FacialWarning} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
