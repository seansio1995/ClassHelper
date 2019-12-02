import React, { Component } from 'react';
import {Link} from "react-router-dom";

class InstructorQuiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <Link to = "/instructorHomepage" style = {linkStyle}>
                        <h3>Quiz For 18658</h3>
                    </Link>
                </div>

                <div style = {{textAlign :"center", fontSize : "30px",margin:"0 auto", border: '3px solid blue', width : "600px", height : "150px"}}>
                    <div style = {{marginTop : "50px"}}><Link to="createquiz">Submit a new quiz question</Link></div>
                </div>

                <div style = {{marginTop : "25px"}}>

                </div>
                <div style = {{textAlign :"center", fontSize : "30px", margin:"0 auto", border: '3px solid blue', width : "600px", height : "150px"}}>
                    <div style = {{marginTop : "50px"}}><Link to="rankboard">Check Performance</Link></div>
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

const linkStyle = {
    textDecoration: 'none',
    color : "#000000"
}

export default InstructorQuiz;