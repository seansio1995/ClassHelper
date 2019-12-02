import React, { Component } from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class StudentQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstColor : "primary",
            secondColor : "primary",
            thirdColor : "primary",
            correctAnswer : "first",
            correct : null,
            rankShow : false,
            correctMessage : "",
            correctMessageColor : ""
        }
    }

    handleChoice = (choice) => {
        switch (choice) {
            case "first":
                this.setState({firstColor : "secondary", secondColor : "primary", thirdColor : "primary"});
                break;
            case "second":
                this.setState({firstColor: "primary", secondColor : "secondary", thirdColor : "primary"});
                break;
            case "third":
                this.setState({firstColor: "primary", secondColor:"primary", thirdColor : "secondary"});
                break;
        }

        if (choice === this.state.correctAnswer) {
            this.setState({
                correctMessage : "Correct!",
                correctMessageColor : "green"
            })
        } else {
            this.setState({
                correctMessage : "Oops! You are close...",
                correctMessageColor : "red"
            })
        }

        this.setState({
            rankShow : true
        });
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

                {
                    this.state.rankShow && <div>
                        <div style={ { color: `${ this.state.correctMessageColor }` } }>
                           <h1>{this.state.correctMessage}</h1>
                        </div>
                        <div style = {{textAlign : "left", marginLeft : "40%"}}>
                            <h3>You currently have <span style={{color:"red"}}>986</span> points</h3>
                            <p>The Rank Board:</p>
                            <p>1. Eric the Flash: 1456 points</p>
                            <p>2. Garry Botter: 1332 points</p>
                            <p>3. You know my name: 1100 points</p>
                        </div>
                    </div>
                }

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