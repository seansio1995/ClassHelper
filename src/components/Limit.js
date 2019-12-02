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

                    </div>
                    <img src = {process.env.PUBLIC_URL + "lock.jfif"}/>
                    <div>
                        <h2>Your Browser is Locked by your professor. You can only use discussion board and Quiz during class.</h2>
                    </div>
                    <Grid  item xs={18}>
                        <div style = {buttonStyle}>
                            <Grid justify="center" container spacing={2}>
                                <Grid item>
                                    <Link to = "/studentHomepage">
                                        <Button variant="contained" color="secondary">  
                                                Goto homepage
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to = "/StudentDiscussion">
                                        <Button variant="contained" color="secondary">
                                                Goto discussion
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to = "/studentquiz">
                                        <Button variant="contained" color="primary">
                                                Goto quiz
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
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
    textAlign : "center",
}

const linkStyle = {
    textDecoration: 'none',
    color : "#000000"
}

const containerStyle = {
    marginTop : "10%"
}

const buttonStyle = {
    marginTop : "10px"
}

export default Limit;