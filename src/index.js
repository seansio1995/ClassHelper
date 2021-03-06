import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Limit from './components/Limit';
import StudentHomepage from './components/StudentHomepage'
import InstructorHomepage from './components/InstructorHomepage'
import CourseHomepageStudent from './components/CourseHomepageStudent'
import CourseHomepageStudentSurvey from './components/CourseHomepageStudentSurvey'
import StudentDiscussion from './StudentDiscussion'
import InstructorDiscussion from './InstructorDiscussion'
import MessageWarning from "./MessageWarning";
import FacialWarning from "./FacialWarning";
import InstructorLimit from './components/InstructorLimit'
import StudentQuiz from "./StudentQuiz";
import InstructorQuiz from "./components/InstructorQuiz";
import CreateQuiz from "./components/CreateQuiz";
import RankBoard from "./components/RankBoard";
import InstructorCourseHomepage from "./components/InstructorCourseHomepage";
import ErrPage from "./components/ErrorPage";

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path = "/login" component={Login} />
            <Route path = "/studentHomepage" component = {StudentHomepage} />
            <Route path = "/instructorHomepage" component = {InstructorHomepage} />
            <Route path = "/InstructorCourseHomepage" component = {InstructorCourseHomepage} />
            <Route path = "/limit" component = {Limit}/>
            <Route path = "/CourseHomepageStudent" component = {CourseHomepageStudent} />
            <Route path = "/CourseHomepageStudentSurvey" component = {CourseHomepageStudentSurvey} />
            <Route path = "/StudentDiscussion" component = {StudentDiscussion} />
            <Route path = "/InstructorDiscussion" component = {InstructorDiscussion} />
            <Route path ="/messageWarning" component = {MessageWarning} />
            <Route path ="/facialWarning" component = {FacialWarning} />
            <Route path='/twitter' component={() => {
                window.location.href = 'https://www.twitter.com';
                return null;
            }}/>
            <Route path = "/instructorLimit" component = {InstructorLimit}/>
            <Route path = "/studentquiz" component = {StudentQuiz}/>
            <Route path = "/instructorquiz" component = {InstructorQuiz}/>
            <Route path = "/createquiz" component = {CreateQuiz}/>
            <Route path = "/rankboard" component = {RankBoard}/>
            <Route component={ErrPage} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
