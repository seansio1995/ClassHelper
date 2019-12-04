import React, { Component } from 'react';
import "./Style/Signup.scss";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Button from '@material-ui/core/Button';
import StudentQuiz from "../StudentQuiz";
import StudentDiscussion from "../StudentDiscussion";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 1000,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function FullWidthTabsSurvey() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const handleChatting = event => {
        setValue(1);
    }

    return (
        <div style={pageStyle}>
            <div style={headerStyle}>
                <Link to="/studentHomepage" style={linkStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                </Link>
            </div>
            <div style={goBackLinkStyle}>
                <Link to="/studentHomepage"> 
                Back to Dashboard and Profile
                </Link>
            </div>
            <Grid container spacing={3} justify="center"
                alignItems="center">
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Home" {...a11yProps(0)} />
                            <Tab label="Discuss" {...a11yProps(1)} />
                            <Tab label="Team" {...a11yProps(2)} />
                            <Tab label="Quiz" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div style={headerStyle}>
                                <h2>Introduction</h2>
                            </div>
                            <Paper className={classes.root} width={1000}>
                                <h2 align="left">18XXX: Introduction to Software Engineering</h2>
                                <h2 align="left">Instructor: Mary</h2>
                                <h2 align="left">Teaching Assistants: Kevin, Stan</h2>
                                <h2 align="left">Time: 1:00PM - 3:00PM, Monday and Friday</h2>
                                <h2 align="left">Room: 1027, Building 23</h2>
                                <h2 align="left">Introduction: Software engineering sees its practitioners as individuals who follow well-defined engineering. </h2>
                                <h2 align="left">Plan: See this link demo.html/page2/section3</h2>
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <StudentDiscussion />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <div style={headerStyle}>
                                <h2>Team</h2>
                            </div>
                            <h2 align="left">Your Team:</h2>
                            <Grid container spacing={3}>
                                <Grid sm={6}>
                                    <h3 align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team3 : Lebron, Kevin, Ben </h3>

                                </Grid>
                                <Grid sm={3}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={buttonStyle}
                                        onClick={handleChatting}
                                    >
                                        Discussion
                            </Button>
                                </Grid>
                                <Grid sm={3}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={buttonStyle}
                                    >
                                        Leave
                            </Button> </Grid>
                                <Grid sm={6}>
                                    <h3 align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team6 : Anna, Deron, Prince </h3>

                                </Grid>
                                <Grid sm={3}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={buttonStyle}
                                        onClick={handleChatting}
                                    >
                                        Discussion
                            </Button>
                                </Grid>
                                <Grid sm={3}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={buttonStyle}
                                    >
                                        Leave
                            </Button> </Grid>
                                <Grid sm={6}>
                                    <h3 align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team7 : Kerr, Micheal, Jane </h3>

                                </Grid>
                                <Grid sm={3}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={buttonStyle}
                                        onClick={handleChatting}
                                    >
                                        Discussion
                            </Button>
                                </Grid>
                                <Grid sm={3}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={buttonStyle}
                                    >
                                        Leave
                            </Button>
                                </Grid>
                                    <Grid sm="9">
                                        <h2 align="left">Do you want to join a new team? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h2>
                                    </Grid>
                                    <Grid sm="3">
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            style={buttonStyle}
                                        >
                                            <Link to="/CourseHomepageStudentSurvey">New Team</Link>
                                        </Button>
                                    </Grid>
                                </Grid>
                        </TabPanel>
                            <TabPanel value={value} index={3} dir={theme.direction}>
                                <StudentQuiz />
                            </TabPanel>
                    </SwipeableViews>
                </div>
            </Grid>
        </div>
            );
        }
        
const buttonStyle = {
                marginTop : "10px",
            width: "60%",
            align : "right"
        }
        
const pageStyle = {
                textAlign: "center"
        }
        
const headerStyle = {
                fontSize: "25px",
            textAlign: "center"
        }
        
const linkStyle = {
                textDecoration: 'none',
            color : "#000000"
        }

const goBackLinkStyle = {
    marginBottom: "20px",
    textAlign: "left",
    marginLeft: "16%"
}
        //export default CourseHomepageStudent;
