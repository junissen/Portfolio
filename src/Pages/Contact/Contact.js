import React, { Component } from 'react';
import "./Contact.css";


class Contact extends Component {

    state = {
        subtitleArray: [
            "Full Stack Developer",
            "Web Designer",
            "Data Analyst"
        ]
    }

    componentDidMount = () => {
        
    }

    render() {
        return (
            <div id="contactCompleteDiv">
                {/* <Navbar currentScreen={this.props.currentScreen} changeScreen={this.props.changeScreen}/>  */}
                <div id="contactDiv">
                    <div className="row" >
                        <div className="col-12">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact