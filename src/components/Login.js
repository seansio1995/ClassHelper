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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homepage : "studentHomepage"
        }
    }

    handleSelection = (e) => {
        if (e.target.value == "student")
            this.setState({homepage : "/studentHomepage"});
        else
        this.setState({homepage : "/instructorHomepage"});
    }

    render() {
        return (
            <div style = {pageStyle}>
                <div style = {headerStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                </div>
                <Container component="main" maxWidth="xs" style={containerStyle}>
                    <CssBaseline />
                    <div>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <form  noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12} style = {{alignContent : "center"}}>
                                    <Select labelId="label"
                                            id="select"
                                            value={this.state.selectFaculty}
                                            onChange={this.handleSelection}
                                    >
                                        <MenuItem value="student">Student</MenuItem>
                                        <MenuItem value="instructor">Instructor</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style = {buttonStyle}
                            >
                                <Link to = {this.state.homepage}>
                                    LOG IN
                                </Link>
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/">
                                        Didn't have an account? Sign up
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
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
export default Login;