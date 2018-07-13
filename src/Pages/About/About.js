import React, { Component } from 'react';
import "./About.css";


class About extends Component {

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
            <div id="aboutCompleteDiv">
                {/* <Navbar currentScreen={this.props.currentScreen} changeScreen={this.props.changeScreen}/>  */}
                <div id="aboutDiv">
                    <div className="row" >
                        <div className="col-12">
                            <div className="aboutBlock">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About