import React, { Component } from 'react';
import "./Navbar.css";
import NavLink from "./NavLink.js";
import $ from "jquery";

class Navbar extends Component {

    state = {
        currentScreen: "default",
        currentScreenId: ""
    }

    componentDidMount = () => {
        if (this.props.currentScreen === "home") {
            this.setState({currentScreen: "home"})
            this.setState({currentScreenId: "homeNavbar"})
        }
        if (this.props.currentScreen === "about") {
            this.setState({currentScreen: "about"})
            this.setState({currentScreenId: "aboutNavbar"})
        }
        if (this.props.currentScreen === "portfolio") {
            this.setState({currentScreen: "portfolio"})
            this.setState({currentScreenId: "portfolioNavbar"})
        }
        if (this.props.currentScreen === "contact") {
            this.setState({currentScreen: "contact"})
            this.setState({currentScreenId: "contactNavbar"})
        }
    }

    componentDidUpdate = () => {
        if (this.props.currentScreen !== this.state.currentScreen) {
            if (this.props.currentScreen === "home") {
                this.setState({currentScreen: "home"})
                this.setState({currentScreenId: "homeNavbar"})
            }
            if (this.props.currentScreen === "about") {
                this.setState({currentScreen: "about"})
                this.setState({currentScreenId: "aboutNavbar"})
            }
            if (this.props.currentScreen === "portfolio") {
                this.setState({currentScreen: "portfolio"})
                this.setState({currentScreenId: "portfolioNavbar"})
            }
            if (this.props.currentScreen === "contact") {
                this.setState({currentScreen: "contact"})
                this.setState({currentScreenId: "contactNavbar"})
            }
        }
    }

    onHover = (event) => {

        if ($(event.target).attr('id') === "about") {
            $(event.target).css("color", "#01ABAA")
        }

        if ($(event.target).attr('id') === "portfolio") {
            $(event.target).css("color", "#FEA680")
        }

        if ($(event.target).attr('id') === "contact") {
            $(event.target).css("color", "#FB6F00")
        }
        
        $(event.target).css("cursor", "pointer")
    }

    nonHover = (event) => {
        $(event.target).css("color", "black")
    }

    onAboutClick = () => {
        console.log("ABOUT CLICK")
    }

    onPortfolioClick = () => {
        console.log("PORTFOLIO CLICK")
    }

    onContactClick = () => {
        console.log("CONTACT CLICK")
    }


    render() {
        return (
            <div>
                <nav className="navbar" id={this.state.currentScreenId}>
                    <ul className="navbar-nav">
                        <div className="row">
                            <div className="col-4 navCol"> 
                               <NavLink name="about" onClick={this.onAboutClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                            </div>
                            <div className="col-4 navCol">
                                <NavLink name="portfolio" onClick={this.onPortfolioClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                            </div>
                            <div className="col-4 navCol">
                                <NavLink name="contact" onClick={this.onContactClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                            </div>
                        </div>
                    </ul>
                </nav>

            </div>
        );
    }


}

export default Navbar