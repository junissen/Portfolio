import React, { Component } from 'react';
import "./Navbar.css";
import NavLink from "./NavLink.js";
import $ from "jquery";

class Navbar extends Component {

    state = {
        currentScreen: "default",
        currentScreenId: "default"
    }

    componentDidMount = () => {
        // if (this.props.currentScreen === "home") {
        //     this.setState({currentScreen: "home"})
        //     this.setState({currentScreenId: "firstHomeNavbar"})
        // }
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

        if ((this.props.currentScreen === "home") && (this.state.currentScreenId === "default")) {
            this.setState({currentScreen: "home"})
            this.setState({currentScreenId: "firstHomeNavbar"})
        }

        else if (this.props.currentScreen !== this.state.currentScreen) {
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

        if ($(event.target).attr('id') === "aboutNav") {
            $(event.target).css("color", "#01ABAA")
        }

        if ($(event.target).attr('id') === "portfolioNav") {
            $(event.target).css("color", "#FEA680")
        }

        if ($(event.target).attr('id') === "contactNav") {
            $(event.target).css("color", "#FB6F00")
        }

        if ($(event.target).attr('id') === "homeNav") {
            $(event.target).css("color", "#FEDC3D")
        } 
        
        $(event.target).css("cursor", "pointer")
    }

    nonHover = (event) => {
        $(event.target).css("color", "black")
    }

    onAboutClick = () => {
        this.props.changeScreen("currentScreen", "about")

        if (this.state.currentScreen === "home") {
            let self = this
            $('.casetteDiv').attr("id", "transitionCasette")
            setTimeout(function() {
                self.props.changeScreen("showHome", false)
                self.props.changeScreen("showAbout", true)
                $('.aboutBlock').attr("id", "homeTransition")
            }, 400)
        }

        if (this.state.currentScreen === "portfolio") {
            this.props.changeScreen("showPortfolio", false)
            this.props.changeScreen("showAbout", true)
        }

        if (this.state.currentScreen === "contact") {
            this.props.changeScreen("showContact", false)
            this.props.changeScreen("showAbout", true)
        }

        
    }

    onPortfolioClick = () => {
        this.props.changeScreen("currentScreen", "portfolio")

        if (this.state.currentScreen === "home") {
            let self = this
            $('.casetteDiv').attr("id", "transitionCasette")
            setTimeout(function() {
                self.props.changeScreen("showHome", false)
                self.props.changeScreen("showPortfolio", true)
            }, 400)

        }

        if (this.state.currentScreen === "about") {
            this.props.changeScreen("showAbout", false)
            this.props.changeScreen("showPortfolio", true)
        }

        if (this.state.currentScreen === "contact") {
            this.props.changeScreen("showContact", false)
            this.props.changeScreen("showPortfolio", true)
        }
    }

    onContactClick = () => {
        this.props.changeScreen("currentScreen", "contact")

        if (this.state.currentScreen === "home") {
            let self = this
            $('.casetteDiv').attr("id", "transitionCasette")
            setTimeout(function() {
                self.props.changeScreen("showHome", false)
                self.props.changeScreen("showContact", true)
            }, 400)

        }
        if (this.state.currentScreen === "portfolio") {
            this.props.changeScreen("showPortfolio", false)
            this.props.changeScreen("showContact", true)
        }

        if (this.state.currentScreen === "about") {
            this.props.changeScreen("showAbout", false)
            this.props.changeScreen("showContact", true)
        }
    }

    onHomeClick = () => {
        this.props.changeScreen("currentScreen", "home")

        if (this.state.currentScreen === "about") {
            this.props.changeScreen("showAbout", false)
            this.props.changeScreen("showHome", true)
        }

        if (this.state.currentScreen === "portfolio") {
            this.props.changeScreen("showPortfolio", false)
            this.props.changeScreen("showHome", true)
        }

        if (this.state.currentScreen === "contact") {
            this.props.changeScreen("showContact", false)
            this.props.changeScreen("showHome", true)
        }
    }


    render() {
        return (
            <div className="navbarDiv">

                { this.state.currentScreen === "home" ?
                    <nav className="navbar" id={this.state.currentScreenId}>
                        <ul className="navbar-nav">
                            <div className="row">
                                <div className="col-4 navCol"> 
                                    <NavLink title="about" name="aboutNav" onClick={this.onAboutClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                                <div className="col-4 navCol">
                                    <NavLink title="portfolio" name="portfolioNav" onClick={this.onPortfolioClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                                <div className="col-4 navCol">
                                    <NavLink title="contact" name="contactNav" onClick={this.onContactClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                            </div>
                        </ul>
                    </nav>
                : null }

                { this.state.currentScreen === "about" ?
                    <nav className="navbar" id={this.state.currentScreenId}>
                        <ul className="navbar-nav">
                            <div className="row">
                                <div className="col-4 navCol"> 
                                    <NavLink title="home" name="homeNav" onClick={this.onHomeClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                                <div className="col-4 navCol">
                                    <NavLink title="portfolio" name="portfolioNav" onClick={this.onPortfolioClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                                <div className="col-4 navCol">
                                    <NavLink title="contact" name="contactNav" onClick={this.onContactClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                            </div>
                        </ul>
                    </nav>
                : null }

                { this.state.currentScreen === "portfolio" ?
                    <nav className="navbar" id={this.state.currentScreenId}>
                        <ul className="navbar-nav">
                            <div className="row">
                                <div className="col-4 navCol"> 
                                    <NavLink title="about" name="aboutNav" onClick={this.onAboutClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                                <div className="col-4 navCol">
                                    <NavLink title="home" name="homeNav" onClick={this.onHomeClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                                <div className="col-4 navCol">
                                    <NavLink title="contact" name="contactNav" onClick={this.onContactClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                            </div>
                        </ul>
                    </nav>
                : null }

                { this.state.currentScreen === "contact" ?
                    <nav className="navbar" id={this.state.currentScreenId}>
                        <ul className="navbar-nav">
                            <div className="row">
                                <div className="col-4 navCol"> 
                                    <NavLink title="about" name="aboutNav" onClick={this.onAboutClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                                <div className="col-4 navCol">
                                    <NavLink title="portfolio" name="portfolioNav" onClick={this.onPortfolioClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                                <div className="col-4 navCol">
                                    <NavLink title="home" name="homeNav" onClick={this.onHomeClick} onMouseOver={this.onHover} onMouseLeave={this.nonHover}></NavLink>
                                </div>
                            </div>
                        </ul>
                    </nav>
                : null }


                
                

            </div>
        );
    }


}

export default Navbar