import React, { Component } from 'react';
import "./Style/Signup.scss";
import Container from "@material-ui/core/Container";
//import Col from "@material-ui/core/Col"
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
//import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Student from "../student.png";

class InstructorHomepage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <img src={Student}  width={150} />
                    </Grid>
                    <Grid item xs>
                        <Paper >xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper >xs</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper>xs</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper >xs=6</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>xs</Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

const pageStyle = {
    textAlign: "center"
}

const headerStyle = {
    fontSize: "30px",
    textAlign: "center"
}

const containerStyle = {
    marginTop: "10%"
}

const buttonStyle = {
    marginTop: "10px"
}
export default InstructorHomepage;