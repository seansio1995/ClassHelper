import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./Style/Signup.scss";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
//import Col from "@material-ui/core/Col"
import CssBaseline from "@material-ui/core/CssBaseline";
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
import Instructor from "../instructor.png";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

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
                    <Grid item xs={3} >
                        <Grid>
                            <img src={Instructor} width={150} />
                        </Grid>
                        <Grid>
                            <h2>Name: Jack</h2>
                            <h2>School: CMU</h2>
                            <h2>Department: ECE</h2>
                            <h2>Role: Instructor</h2>
                        </Grid>
                    </Grid>
                    <Grid container xs={9} >
                        <Card sm={8}>
                            <CardHeader
                                title="Introduction to Test Software"
                                subheader="18471"
                            />
                            <CardMedia
                                src={Instructor}
                                title="Paella dish"
                            />
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">  
                                    <Link to = '/InstructorCourseHomepage'>
                                    Course Page
                                </Link>
                                </IconButton>
                                <IconButton aria-label="share">
                                    Drop
                                </IconButton>
                            </CardActions>
                        </Card>
                        <Card sm={8}>
                            <CardHeader
                                title="Introduction to Data Software "
                                subheader="18471"
                            />
                            <CardMedia
                                src={Instructor}
                                title="Paella dish"
                            />
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">  
                                    <Link to = '/InstructorCourseHomepage'>
                                    Course Page
                                </Link>
                                </IconButton>
                                <IconButton aria-label="share">
                                    Drop
                                </IconButton>
                            </CardActions>
                        </Card>
                        <Card sm={8}>
                            <CardHeader
                                title="Introduction to Java Software "
                                subheader="18471"
                            />
                            <CardMedia
                                src={Instructor}
                                title="Paella dish"
                            />
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">  
                                    <Link to = '/InstructorCourseHomepage'>
                                    Course Page
                                </Link>
                                </IconButton>
                                <IconButton aria-label="share">
                                    Drop
                                </IconButton>
                            </CardActions>
                        </Card>
                        <Card sm={8}>
                            <CardHeader
                                title="Introduction to C++ Software "
                                subheader="18471"
                            />
                            <CardMedia
                                src={Instructor}
                                title="Paella dish"
                            />
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">  
                                    <Link to = '/InstructorCourseHomepage'>
                                    Course Page
                                </Link>
                                </IconButton>
                                <IconButton aria-label="share">
                                    Drop
                                </IconButton>
                            </CardActions>
                        </Card>
                        <Card sm={8}>
                            <CardHeader
                                title="Introduction to Demo Software "
                                subheader="18471"
                            />
                            <CardMedia
                                src={Instructor}
                                title="Paella dish"
                            />
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">  
                                    <Link to = '/InstructorCourseHomepage'>
                                    Course Page
                                </Link>
                                </IconButton>
                                <IconButton aria-label="share">
                                    Drop
                                </IconButton>
                            </CardActions>
                        </Card>
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