import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./components/Style/Signup.scss";
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
import Student from "./student.png";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {ThumbDown, ThumbUp} from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';

class InstructorDiscussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            discuss : [
            	{
            		id : "discuss1",
            		content : "Haoze Zhang: In dual-track agile, I think team's focus will shift to delivery phase as time goes by.",
            		up : 5,
            		down : 1
            	},
            	{
            		id : "discuss2",
            		content : "Yi Zhu: Rapid prototyping is a great way to gather quick feedback. We could adopt it in out project by prototyping features in the MVP first.",
            		up : 3,
            		down : 0
            	},
                {
                    id : "discuss3",
                    content : "Chufan Xiao: Some discussion.",
                    up : 2,
                    down : 0
                },
                {
                    id : "discuss4",
                    content : "Zihan Ban: Some more discussion.",
                    up : 2,
                    down : 1
                }
            ],
        history : [
            {
                "11/29/2019": [
                    {
                        id : "discuss1",
                        content : "Haoze Zhang: Something posted on 11/29/2019.",
                        up : 5,
                        down : 1
                    },
                    {
                        id : "discuss2",
                        content : "Yi Zhu: Something more posted on 11/29/2019.",
                        up : 3,
                        down : 0
                    }]
            },
            {
                "11/25/2019": [
                    {
                        id : "discuss1",
                        content : "Haoze Zhang: Something posted on 11/25/2019.",
                        up : 5,
                        down : 1
                    },
                    {
                        id : "discuss2",
                        content : "Yi Zhu: Something more posted on 11/25/2019.",
                        up : 3,
                        down : 0
                    }]
            },
            {
                "11/21/2019": [
                    {
                        id : "discuss1",
                        content : "Haoze Zhang: Something posted on 11/21/2019.",
                        up : 5,
                        down : 1
                    },
                    {
                        id : "discuss2",
                        content : "Yi Zhu: Something more posted on 11/21/2019.",
                        up : 3,
                        down : 0
                    }]
            }
        ],
        dateSelected : "now"
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

    sortDiscussion(a, b) {
    	if(b["up"] == a["up"]) {
    		return a["down"] - b["down"];
    	}
    	return b["up"] - a["up"];
    }

    handleClickCurrentDiscussion = () => {
        this.setState({dateSelected : "now"});
    }

    handleClickHistoryDiscussion = (e) => {
        if(e.target.id === "history") {
            this.setState({dateSelected : "11/29/2019"});
        } else {
            this.setState({dateSelected : e.target.id});
        }
    }

    render() {

    	const currentDiscussionMessage = []
        const historyDiscussionMessage = []
        let discussionMessage = []
        let historyDates = []

  		for (let key in this.state.discuss) {
  			let dict = this.state.discuss[key];
    		currentDiscussionMessage.push(<Grid item xs={9} style={discussionStyle}>
                    		{dict["content"]} </Grid>);
            currentDiscussionMessage.push(<Grid item xs={2}>
                    		<ThumbUp /> {dict["up"]}
                    		<ThumbDown /> {dict["down"]}
                    	</Grid>)
  		}

        if (this.state.dateSelected === "now") {
            discussionMessage = currentDiscussionMessage;
        } else {
            let dates = []
            for (let entry in this.state.history) {
                let dicth = this.state.history[entry];
                let date = Object.keys(dicth)[0];
                dates.push(<Link color="inherit" id={date} onClick={this.handleClickHistoryDiscussion}>{date}</Link>);
            }
            historyDates.push(<Breadcrumbs aria-label='breadcrumb' style={{'margin-bottom': '20px'}}>{dates}</Breadcrumbs>);
            for (let entry in this.state.history) {
                let dicth = this.state.history[entry];
                let date = Object.keys(dicth)[0];
                if(date === this.state.dateSelected) {
                    let historyMessages = dicth[date];
                    for (let key in historyMessages) {
                        let dict = historyMessages[key];
                        historyDiscussionMessage.push(<Grid item xs={9} style={discussionStyle}>
                                        {dict["content"]} </Grid>);
                        historyDiscussionMessage.push(<Grid item xs={2}>
                                        <ThumbUp /> {dict["up"]}
                                        <ThumbDown /> {dict["down"]}
                                    </Grid>)
                    }
                }
            }
            discussionMessage = historyDiscussionMessage;
        }

        return (
                <div style={pageStyle}>
                <h1>Discussion</h1>
                <Breadcrumbs aria-label="breadcrumb" style={{"margin-bottom": "20px"}}>
                  <Link color="inherit" onClick={this.handleClickCurrentDiscussion}>
                    Current Discussion
                  </Link>
                  <Link color="inherit" id = "history" onClick={this.handleClickHistoryDiscussion}>
                    History
                  </Link>
                </Breadcrumbs>
                {historyDates}
                    <Grid container spacing={3}>
                    	{discussionMessage}
                    </Grid>

                    <form fullWidth>
  						<Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                style = {buttonStyle}
                                onClick={this.addDiscussMessage}
                            >
                            Class is over.
                            </Button>
					</form>
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
    marginTop : "20px",
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

const linkStyle = {
    textDecoration: 'none',
    color : "#000000"
}

export default InstructorDiscussion;