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
