import React, { Component } from 'react';
import "./Portfolio.css";


class Portfolio extends Component {

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
            <div id="portfolioCompleteDiv">
                {/* <Navbar currentScreen={this.props.currentScreen} changeScreen={this.props.changeScreen}/>  */}
                <div id="aboutDiv">
                    <div className="row" >
                        <div className="col-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio