import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false

    }
  }
// switching the boolean value of property isOpen in state
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar toggleModal = {this.toggleModal.bind(this)}></NavBar>
      </div>
    );
  }
}

export default App;
