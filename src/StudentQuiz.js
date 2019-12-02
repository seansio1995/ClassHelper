import React, { Component } from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class StudentQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstColor : "primary",
            secondColor : "primary",
            thirdColor : "primary"
        }
    }

    handleChoice = (choice) => {
        switch (choice) {
            case "first":
                this.setState({firstColor : "secondary"});
                break;
            case "second":
                this.setState({secondColor : "secondary"});
                break;
            case "third":
                this.setState({thirdColor : "secondary"});
                break;
        }
    }

    render() {
        return (
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                </div>

                <div style = {{margin:"0 auto", border: '3px solid blue', width : "600px", height : "150px"}}>
                    <h3>Question</h3>
                    <p>Which of the following is included in the requirements pyramid?</p>
                </div>

                <div style={{marginTop : "50px"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        color={this.state.firstColor}
                        style = {{marginRight : "50px"}}
                        onClick = {() => this.handleChoice("first")}
                    > Both </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        color={this.state.secondColor}
                        style = {{marginRight : "50px"}}
                        onClick = {() => this.handleChoice("second")}
                    > Need </Button>


                    <Button
                        type="submit"
                        variant="contained"
                        color={this.state.thirdColor}
                        style = {{marginRight : "50px"}}
                        onClick = {() => this.handleChoice("third")}
                    > Feature </Button>
                </div>
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
export default StudentQuiz;