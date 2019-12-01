import React, { Component } from 'react';
import Webcam from "react-webcam";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';

class FacialWarning extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                </div>

                <h2 style = {{color:"red"}}>You Are Not Paying Attention</h2>

                <div style = {{display : "inline-flex"}}>
                    <Webcam
                        audio={false}
                        height={360}
                        screenshotFormat="image/jpeg"
                        width={640}
                    />

                    <Box borderColor="primary.main" {...defaultProps} >
                        <List>
                            <ListItem>
                                Name : Chufan Xiao
                            </ListItem>
                            <ListItem>
                                Age : 24
                            </ListItem>
                            <ListItem>
                                Pay Attention : No
                            </ListItem>
                            <ListItem>
                                Accuracy : 95%
                            </ListItem>
                            <ListItem>
                                Date : 2019-10-20 11:23:20 AM
                            </ListItem>
                        </List>
                    </Box>
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

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '15rem', height: '20rem'},
};

export default FacialWarning;