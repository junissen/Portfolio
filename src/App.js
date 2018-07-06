import React, { Component } from 'react';
import $ from "jquery"; 
import Home from "./Pages/Home/Home";

class App extends Component {

  state = {
    showHome: false,
    showAbout: false,
    showPortfolio: false,
    showContact: false,
    currentScreen: ""
  }

  componentDidMount = () => {
    $("#loadingScreen").remove()
    this.setState({currentScreen: "home"}, function() {
      this.setState({showHome: true})
    })
  }

  componentChange = (field, value) => {
    this.setState({[field]: value})
  }

  render() {
    return (
      <div>
         { this.state.showHome ?
          <div>
            <Home currentScreen={this.state.currentScreen} changeScreen={this.componentChange.bind(this)}></Home>
          </div>
        : null } 

      </div>
    );
  }
}

export default App;
