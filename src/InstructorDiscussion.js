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
//import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Student from "./student.png";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {ThumbDown, ThumbUp} from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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
                        content : "Jiarui Gao: Something posted on 11/25/2019.",
                        up : 5,
                        down : 1
                    },
                    {
                        id : "discuss2",
                        content : "Zihan Ban: Something more posted on 11/25/2019.",
                        up : 3,
                        down : 0
                    }]
            },
            {
                "11/21/2019": [
                    {
                        id : "discuss1",
                        content : "Chufan Xiao: Something posted on 11/21/2019.",
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

    handleClickHistoryDiscussion = (date) => {
        if(date === "history") {
            this.setState({dateSelected : "11/29/2019"});
        } else {
            this.setState({dateSelected : date});
        }
    }

    saveHistory = (e) => {
        let history = this.state.history;
        let newDayMessage = {"01/12/2019" : this.state.discuss};
        history.unshift(newDayMessage);
        this.setState({history : history, discuss: []});
    }



    render() {

    	const currentDiscussionMessage = []
        const historyDiscussionMessage = []
        let discussionMessage = []
        let historyDates = []
        let classOverButton = []

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
            classOverButton.push(<form fullWidth>
                        <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                style = {buttonStyle}
                                onClick={this.saveHistory}
                            >
                            Class is over.
                            </Button>
                    </form>);
        } else {
            let dates = []
            for (let entry in this.state.history) {
                let dicth = this.state.history[entry];
                let date = Object.keys(dicth)[0];
                dates.push(<StyledBreadcrumb color="inherit" id={date} onClick={ (e) => this.handleClickHistoryDiscussion(date) } label={date} />);
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
                  <StyledBreadcrumb color="inherit" id = "current" label="Current Discussion" onClick={this.handleClickCurrentDiscussion}/>             
                  <StyledBreadcrumb color="inherit" id = "history" label="History" onClick={ (e) => this.handleClickHistoryDiscussion("history") }/>
                </Breadcrumbs>
                {historyDates}
                    <Grid container spacing={3}>
                    	{discussionMessage}
                    </Grid>

                    {classOverButton}
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
    width: "20%"
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
	backgroundColor: "#f5f5f5",
	marginBottom: "5px",
	marginLeft: "10px"
}

const linkStyle = {
    textDecoration: 'none',
    color : "#000000"
}

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

export default InstructorDiscussion;