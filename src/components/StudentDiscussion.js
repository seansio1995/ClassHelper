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
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
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
import {ThumbDown, ThumbUp} from '@material-ui/icons';

class StudentDiscussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            discuss : [
            	{
            		id : "discuss1",
            		content : "In dual-track agile, I think team's focus will shift to delivery phase as time goes by.",
            		up : 5,
            		down : 1
            	},
            	{
            		id : "discuss2",
            		content : "Rapid prototyping is a great way to gather quick feedback. We could adopt it in out project by prototyping features in the MVP first.",
            		up : 3,
            		down : 0
            	}
            ],
            newMessage : {}
        }
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.newDiscussChange = this.newDiscussChange.bind(this);
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

    sortDiscussion(a, b) {
    	if(b["up"] == a["up"]) {
    		return a["down"] - b["down"];
    	}
    	return b["up"] - a["up"];
    }

    handleUpVote = (id) => {
    	let newDiscuss = this.state.discuss;
    	for (let key in newDiscuss) {
  			if(newDiscuss[key]["id"] === id) {
  				newDiscuss[key]["up"] = newDiscuss[key]["up"] + 1;
  			}
  		}
  		newDiscuss.sort(this.sortDiscussion);
  		this.setState({discuss : newDiscuss});
    }

    handleDownVote = (id) => {
    	let newDiscuss = this.state.discuss;
    	for (let key in newDiscuss) {
  			if(newDiscuss[key]["id"] === id) {
  				newDiscuss[key]["down"] = newDiscuss[key]["down"] + 1;
  			}
  		}
  		newDiscuss.sort(this.sortDiscussion);
  		this.setState({discuss : newDiscuss});
    }

    addDiscussMessage = () => {
    	if(this.state.newMessage.length === undefined)
    		return;
    	let newDiscuss = this.state.discuss;
    	let newMessage = this.state.newMessage;
    	newDiscuss.push(newMessage);
    	newDiscuss.sort(this.sortDiscussion);
    	this.setState({discuss : newDiscuss});
    }

    newDiscussChange = (e) => {
    	e.preventDefault();
    	console.log(e.target);
    	let newMessage = {
    		id : "discuss" + toString(this.state.discuss.length+1),
    		up : 0,
    		down : 0,
    		content : "content"
    	}
    	this.setState({newMessage : newMessage});
    }

    render() {

    	const discussionMessage = []

  		for (let key in this.state.discuss) {
  			let dict = this.state.discuss[key];
    		discussionMessage.push(<Grid item xs={9} style={discussionStyle}>
                    		{dict["content"]} </Grid>);
            discussionMessage.push(<Grid item xs={2}>
                    		<IconButton onClick={ (e) => this.handleUpVote(dict["id"]) }><ThumbUp /> {dict["up"]} </IconButton> 
                    		<IconButton onClick={ (e) => this.handleDownVote(dict["id"]) }><ThumbDown /> {dict["down"]} </IconButton>
                    	</Grid>)
  		}

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
                    	{discussionMessage}
                    </Grid>

                    <form fullWidth style={discussionInputStyle}>
  						<InputLabel style={{"text-align": "left", marginTop : "30px"}}>What do you think?</InputLabel>
  						<OutlinedInput fullWidth multiline onChange={this.handleUpVote}/>
  						<Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                style = {buttonStyle}
                                onClick={this.addDiscussMessage}
                            >
                            Submit
                            </Button>
					</form>
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
    marginTop : "10px",
    width: "15%"
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

const discussionStyle = {
	textAlign : "left",
	backgroundColor: "lightGrey",
	marginBottom: "5px",
	marginLeft: "10px"
}

const discussionInputStyle = {

}

export default StudentDiscussion;