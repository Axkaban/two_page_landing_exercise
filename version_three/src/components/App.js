import React, { Component } from 'react';
import NavBar from './navbar';
import Modal from './modal';
import Hero from './hero';
import Text from './text-section';
import Footer from './footer';
import '../App2.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      mobile: 'https://image.ibb.co/eiOa7G/menu.png',
      desktop: 'https://image.ibb.co/ncKugb/spiral_brand.png',
      img: '',

    }
  }

  // changeMenuIcon(size) {
  //   if (size < 768) {
  //     this.setState({
  //       img: this.state.mobile
  //     })
  //   } else {
  //     this.setState({
  //       img: this.state.desktop
  //     })
  //   }
  // }
  // to start as the app opens
  componentDidMount(){
    if (window.innerWidth < 768) {
      this.setState({
        img: this.state.mobile
      })
    } else {
      this.setState({
        img: this.state.desktop
      })
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
        <NavBar toggleModal = {this.toggleModal.bind(this)} imgSrc = {this.state.img}></NavBar>
        <div id='content-container'>
          <Hero></Hero>
          <Text></Text>
          <Footer toggleModal={this.toggleModal.bind(this)}></Footer>
        </div>
      </div>
    );
  }
}

export default App;
