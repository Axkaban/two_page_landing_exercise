import React, { Component } from 'react';
import NavBar from './components/navbar';
import Modal from './components/modal';
import Text from './components/text-section';
import Footer from './components/footer';
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
