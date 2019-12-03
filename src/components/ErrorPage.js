import React,{ PureComponent } from 'react'
import {Link} from 'react-router-dom'
class Error extends PureComponent {
    render(){
        return(
            <div className="container">
                <div className="post" style={{fontSize:"40px",textAlign:'center', marginTop:'20px'}}>
                <p>Sorry Invalid URL. </p>
                <Link to="/">
                    Please visit ClassHelper homepage.
                </Link>
                </div>
            </div>
        );
    }
}
export default Error;