import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Box from "@material-ui/core/Box";
import { v4 } from 'uuid'
import {Link} from "react-router-dom";

class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers : [{text : "Both", id : v4()},
                {text : "Need", id : v4()},
                {text: "Feature", id : v4()}]
        }
        this.deleteQuestion = this.deleteQuestion.bind(this);
    }

    createQuestion = () => {
        let currAns = this.state.answers;
        currAns.push({
            text : "",
            id : v4()
        });
        this.setState({
            answers : currAns
        })
    }

    deleteQuestion = (id) => {
        console.log(id);
        let currentAns = this.state.answers.filter((answer) => {
            return answer.id != id;
        });
        this.setState({
            answers : currentAns
        })
    }

    render() {
        let answerItems = this.state.answers.map((answer,i) => {
            return <div key = {answer.id} style={{marginTop : "20px"}}>
                <Box display="flex" flexDirection="row" p={1} m={1} >
                    <Box>
                        <h3>Choice {i+1}</h3>
                    </Box>
                    <Box style = {{marginLeft : "20px"}}>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue={answer.text}
                            margin="normal"
                        />
                    </Box>
                    <Box style = {{marginLeft : "20px"}}>
                        <FormControlLabel value="female" control={<Radio />} label="Correct Answer" labelPlacement="end" />
                    </Box>
                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            onClick={() => this.deleteQuestion(answer.id)}
                        > Delete </Button>
                    </Box>
                </Box>
            </div>
        });
        return(
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                </div>
                <h3>Create Quiz Tool</h3>
                <Box>
                    <h1>Type Question:</h1>

                    <TextField
                        multiline={true}
                        style = {{width : "400px"}}
                        rows={3}
                        rowsMax={20}
                        defaultValue="Question:
                        Which of the following is included in the requirements pyramid?"
                    />
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.createQuestion}
                    style = {{marginTop : "20px"}}
                > Add Answer </Button>

                <div style={{marginLeft : "30%"}} >
                    {answerItems}
                </div>

                <div style={{marginTop : "40px"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{marginRight : "30px"}}
                    >
                        <Link to="instructorquiz"> Submit </Link>
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                    >
                        <Link to="instructorquiz"> Cancel </Link>
                    </Button>
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



export default CreateQuiz;