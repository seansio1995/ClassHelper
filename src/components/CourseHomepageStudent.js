import React, {Component} from 'react';
import "./Style/Signup.scss";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class CourseHomepageStudent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style = {pageStyle}>
                <div style = {headerStyle}>
                    <Link to = "/studentHomepage" style = {linkStyle}>
                        <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                    </Link>
                </div>
                   <Paper style={paperStyle}>
                
                    <div>
                        <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to="/CourseHomepageStudent">
                        Home
                        </Link>
                        <Link color="inherit" to="/studentDiscussion" > Discussion </Link>
                        </Breadcrumbs>            
                    </div>
                </Paper>

                
            </div>

        )
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

const paperStyle = {
    marginLeft : "15%",
    marginRight : "15%",
    height : "500px",
    borderColor : "grey",
    padding : "20px",
    borderWidth: "thick"

}

const linkStyle = {
    textDecoration: 'none',
    color : "#000000"
}

export default CourseHomepageStudent;