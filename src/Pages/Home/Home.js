import React, { Component } from 'react';
import "./Home.css";
import casette from "../../assets/images/casette/casette_without.png";
import casetteIcon from "../../assets/images/casette/casette_icon.png";


class Home extends Component {

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
            <div id="homeCompleteDiv">
                {/* <Navbar currentScreen={this.props.currentScreen} changeScreen={this.props.changeScreen}/>  */}
                <div id="homeDiv">
                    <div className="row" >
                        <div className="col-12 casetteCol">
                            <div className="casetteDiv">
                                <img src={casette} alt="casette" id="casetteLogo" />
                                    <div className="casetteDivLeft">
                                        <img className="rotating" src={casetteIcon} alt="casetteIcon" id="casetteIconLeft" />
                                    </div>
                                    <div className="casetteDivRight">
                                        <img className="rotating" src={casetteIcon} alt="casetteIcon" id="casetteIconRight" />
                                    </div>
                                    <div className="casetteTextTitleDiv">
                                        <p>Julia Nissen</p>
                                    </div>

                                    <div className="casetteTextSubTitleDiv">
                                        <p id="subtitleText">Full Stack Developer</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home