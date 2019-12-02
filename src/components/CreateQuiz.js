import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Box from "@material-ui/core/Box";

class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers : ["Both", "Need", "Feature"]
        }
        this.deleteQuestion = this.deleteQuestion.bind(this);
    }

    createQuestion = () => {
        let currAns = this.state.answers;
        currAns.push("");
        this.setState({
            answers : currAns
        })
    }

    deleteQuestion = (i) => {
        let currentAns = this.state.answers;
        currentAns.splice(i,1);
        this.setState({
            answers : currentAns
        })
    }

    render() {
        let answerItems = this.state.answers.map((answer,i) => {
            return <div key = {i} style={{marginTop : "20px"}}>
                <Box display="flex" flexDirection="row" p={1} m={1} >
                    <Box>
                        <h3>Choice {i+1}</h3>
                    </Box>
                    <Box style = {{marginLeft : "20px"}}>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue={answer}
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
                            onClick={() => this.deleteQuestion(i)}
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
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.createQuestion}
                > Create Question </Button>

                <div style={{marginLeft : "30%"}} >
                    {answerItems}
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