import React, { Component } from 'react';
import {Redirect} from "react-router";


class MessageWarning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 5000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return(
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                </div>
                {  this.state.redirect
                    ? <Redirect to="twitter" />
                    : <div style = {{fontSize : "20px", color : "red"}}>You will lose 10 points. You will be redirected soon</div>}
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

export default MessageWarning;