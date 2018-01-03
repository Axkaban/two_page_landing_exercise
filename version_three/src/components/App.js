import React, { Component } from 'react';
import NavBar from './navbar';
import Modal from './modal';
import Text from './text-section';
import Footer from './footer';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false

    }
  }
// switching the boolean value of property isOpen in state
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App" id='container'>
        <Modal show={this.state.isOpen} onClose={this.toggleModal.bind(this)}>
        </Modal>
        <NavBar toggleModal = {this.toggleModal.bind(this)}></NavBar>
        <Text></Text>
        <Footer toggleModal={this.toggleModal.bind(this)}></Footer>
      </div>
    );
  }
}

export default App;
