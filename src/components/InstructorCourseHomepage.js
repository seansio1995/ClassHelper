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
import InstructorDiscussion from "../InstructorDiscussion";
import InstructorQuiz from "./InstructorQuiz";
import InstructorLimit from "./InstructorLimit";

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

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div style={pageStyle}>
            <div style={headerStyle}>
                <Link to = "/studentHomepage" style = {linkStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
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
                            <Tab label="Lock" {...a11yProps(4)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Paper className={classes.root} width={1000}>
                                <h1 align="left">18XXX: Introduction to Software Engineering</h1>
                                <h1 align="left">Instructor: Mary</h1>
                                <h1 align="left">Teaching Assistants: Kevin, Stan</h1>
                                <h1 align="left">Time: 1:00PM - 3:00PM, Monday and Friday</h1>
                                <h1 align="left">Room: 1027, Building 23</h1>
                                <h1 align="left">Introduction: Software engineering sees its practitioners as individuals who follow well-defined engineering. </h1>
                                <h1 align="left">Plan: See this link demo.html/page2/section3</h1>
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <InstructorDiscussion/>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <h1 align="left">Team Formation for 18XXX: Introduction to Software Engineering</h1>
                            <h1 align="left">Your Team:</h1>
                            <h1 align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team3 : Lebron, Kevin, Ben <button variant="contained" color="primary">Chatting</button> <button size="large">Leave</button></h1>
                            <h1 align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team10: Adam, Devin, Mark <button variant="contained" color="primary">Chatting</button> <button size="large">Leave</button></h1>
                            <h1 align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team11: Dan, Kathy, Anthony <button variant="contained" color="primary">Chatting</button> <button size="large">Leave</button></h1>
                            <h1 align="left">Do you want to join a new team? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button size="large"><Link to="/studentHomepage">New Team</Link></button></h1>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <InstructorQuiz/>
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            <InstructorLimit/>
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </Grid>
        </div>
    );
}

const pageStyle = {
    textAlign: "center"
}

const headerStyle = {
    fontSize: "30px",
    textAlign: "center"
}

const linkStyle = {
    textDecoration: 'none',
    color : "#000000"
}