import React, {Component} from 'react';
import "./Style/Signup.scss";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
//import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// import lock from "./img/lock.jfif"

class Limit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectFaculty : "student"
        }
    }

    render() {
        if(this.state.selectFaculty == "faculty")
        {
            return (
                <div> </div>
            )
        }
        else{
            return (
                <div style = {pageStyle}>
                    <div style = {headerStyle}>
                        <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                    </div>
                    <img src = {process.env.PUBLIC_URL + "lock.jfif"}/>
                    <div>
                        <div>Your Browser is Locked by your professor. You can only use discussion board and Quiz during class.</div>
                    </div>
                    <div>
                        <button>
                            <Link to = "/homepage">
                                Goto homepage
                            </Link>
                        </button>
                        <button>
                            <Link to = "/discussion">
                                Goto discussion
                            </Link>
                        </button>
                        <button>
                            <Link to = "/quiz">
                                Goto quiz
                            </Link>
                        </button>
                    </div>
                </div>
            )
        }

    }
}

const pageStyle = {
    textAlign: "center"
}

const headerStyle = {
    fontSize : "30px",
    textAlign : "center"
}

const containerStyle = {
    marginTop : "10%"
}

const buttonStyle = {
    marginTop : "10px"
}
export default Limit;