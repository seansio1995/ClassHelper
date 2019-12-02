import React, {Component} from 'react';
import "./Style/Signup.scss";

import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from "@material-ui/core/Input"
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid";



class InstructorLimit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectFaculty : "instructor"
        }
    }

    render() {

        return (
            
            <div style = {pageStyle}>
                {/* <div style = {headerStyle}>
                    <Link to = "/instructorHomepage" style = {linkStyle}>
                        <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                    </Link>
                </div> */}
                <div>
                    <h2>Please select the student you want to limit their browser </h2>
                </div>
                <br></br>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select student</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Alice"
                    />
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Bob"
                    />
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Cathy"
                    />
                    </FormGroup>
                </FormControl>
                <Grid  item xs={18}>
                    <div style = {buttonStyle}>
                        <Grid justify="center" container spacing={2}>
                            <Grid item>
                                <Button variant="contained" color="secondary">
                                    Lock
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="secondary">
                                    Lock ALL
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    UnLock
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </div>

        )
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
    marginTop : "10px",
    marginRight : "100px",
    marginLeft : "100px",
    
}

export default InstructorLimit;