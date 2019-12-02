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
import Student from "../student.png";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import TwitterIcon from "../twitter.png";
import FacebookIcon from "../facebook.png";
import Modal from '@material-ui/core/Modal';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

class StudentDiscussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
        }
    }

    showMessageWarning = () => {
        this.setState({open : true});
    }

    handleClose = () => {
        this.setState({open : false});
    }

    handleStay = () => {
        this.setState({open : false})
    }

    render() {

        return (
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
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
                    <h2>Discussion</h2>
                    <Grid container spacing={3}>
                    	<Grid item xs={8}>
                    	</Grid>
                    </Grid>
				</Paper>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={modalStyle}>
                        <h2 id="simple-modal-title">WARNING</h2>
                        <p id="simple-modal-description">
                            You are trying to leave the current page and browse another page. Please be aware that you will lose points by doing so.
                        </p>
                        <div style = {{display : "inline-flex", marginLeft : "150px"}}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style = {{marginRight : "50px"}}
                                onClick = {this.handleStay}
                            > Stay </Button>

                            <Link to="messageWarning">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                            > Leave </Button>
                            </Link>

                        </div>

                    </div>
                </Modal>
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

const distractionStyle = {
    marginTop : "320px"
}

const modalStyle = {
    marginTop : "200px",
    marginLeft : "30%",
    height : "200px",
    width : "600px",
    backgroundColor : "grey",
    padding : "20px"
}

const paperStyle = {
    marginLeft : "15%",
    marginRight : "15%",
    height : "500px",
    borderColor : "grey",
    padding : "20px",
    borderWidth: "thick"

}

export default StudentDiscussion;