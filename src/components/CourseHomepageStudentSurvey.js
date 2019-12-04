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
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    const [value, setValue] = React.useState(2);

    const [state, setState] = React.useState({
        size: '',
        name: 'hai',
    });

    const [value1, setValue1] = React.useState('weak');
    const [value2, setValue2] = React.useState('weak');
    const [value3, setValue3] = React.useState('male');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const handleChangeNum = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleChangeRadio1 = event => {
        setValue1(event.target.value);
    };

    const handleChangeRadio2 = event => {
        setValue2(event.target.value);
    };

    const handleChangeRadio3 = event => {
        setValue3(event.target.value);
    };

    const handleChangeSubmit = event => {
        setValue(1);
    }

    return (
        <div style={pageStyle}>
            <div style={headerStyle}>
                <Link to="/studentHomepage" style={linkStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                </Link>
            </div>
            <div style={headerStyle}>
                <h2>Team Survey</h2>
            </div>
            <div style={{ margin: "0 auto", width: "800px" }}>
                <Grid container >
                    <Grid sm={9}>
                        <h3 align="left" sm={9}>Team Size You Are Looking For? </h3>
                    </Grid>
                    <Grid sm={3}>
                        <FormControl align="right" className={classes.formControl}>
                            <InputLabel shrink htmlFor="age-native-label-placeholder">
                                Size
        </InputLabel>
                            <NativeSelect
                                value={state.size}
                                onChange={handleChangeNum('size')}
                                inputProps={{
                                    name: 'size',
                                    id: 'age-native-label-placeholder',
                                }}
                            >
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid sm={9}>
                        <h3 align="left">Are You Willing to Lead a Team? </h3></Grid>
                    <Grid sm={3}>
                        <FormControl component="fieldset" >
                            <RadioGroup aria-label="leadTeam" name="leadTeam" value={value1} onChange={handleChangeRadio1}>
                                <FormControlLabel value="weak" control={<Radio />} label="Weak" />
                                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                                <FormControlLabel value="strong" control={<Radio />} label="Strong" />
                            </RadioGroup>
                        </FormControl></Grid>
                    <Grid sm={9}>
                        <h3 align="left">Are You an Outgoing Person?</h3> </Grid>
                    <Grid sm={3}><FormControl component="fieldset" >

                        <RadioGroup aria-label="person" name="person" value={value2} onChange={handleChangeRadio2}>
                            <FormControlLabel value="weak" control={<Radio />} label="Weak" />
                            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                            <FormControlLabel value="strong" control={<Radio />} label="Strong" />
                        </RadioGroup>
                    </FormControl></Grid>
                    <Grid sm={9}>
                        <h3 align="left">Are You a Male or Female? </h3> </Grid>
                    <Grid sm={3}>
                        <FormControl component="fieldset" >
                            <RadioGroup aria-label="gender" name="gender" value={value3} onChange={handleChangeRadio3}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl></Grid>
                    <Grid sm={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={buttonStyle}
                        >
                            <Link to="CourseHomepageStudent">Submit </Link>
                            </Button>
                    </Grid>
                </Grid>
            </div>
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
    color: "#000000"
}

const buttonStyle = {
    marginTop: "10px",
    width: "15%"
}
//export default CourseHomepageStudent;
