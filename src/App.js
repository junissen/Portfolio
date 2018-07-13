import React, { Component } from 'react';
import $ from "jquery"; 
import "./App.css"
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";


class App extends Component {

  state = {
    showHome: false,
    showAbout: false,
    showPortfolio: false,
    showContact: false,
    currentScreen: "",
    currentScreenId: "appHomeDiv"
  }

  componentDidMount = () => {

    let self = this;

    setTimeout(function() {
      $('#loadingScreen').remove()
      self.setState({currentScreen: "home"}, function() {
        self.setState({showHome: true})
      })
    }, 3000)
  }

  componentChange = (field, value) => {
    this.setState({[field]: value})
  }

  render() {
    return (
      <div id={this.state.currentScreen}>
         <Navbar currentScreen={this.state.currentScreen} changeScreen={this.componentChange.bind(this)}/> 
         
         { this.state.showHome ?
          <div>
            <Home currentScreen={this.state.currentScreen} changeScreen={this.componentChange.bind(this)}></Home>
          </div>
        : null } 

        { this.state.showAbout ? 
          <div> 
            <About currentScreen={this.state.currentScreen} changeScreen={this.componentChange.bind(this)}></About>
          </div>
        : null }

        { this.state.showPortfolio ? 
          <div> 
            <Portfolio currentScreen={this.state.currentScreen} changeScreen={this.componentChange.bind(this)}></Portfolio>
          </div>
        : null }

        { this.state.showContact ? 
          <div> 
            <Contact currentScreen={this.state.currentScreen} changeScreen={this.componentChange.bind(this)}></Contact>
          </div>
        : null }

      </div>
    );
  }
}

export default App;
