import React, { Component } from "react";

class NavBar extends Component {
    render(props){
        return (
            <nav>
                <img className ='logo' src= '#'alt=''/>
                <a href='#'>About us</a>
                <a href='#'>Product</a>
                <h2 className = 'contact-button' onClick={()=>{this.props.toggleModal()}}>Contact us</h2>
            </nav>
        )
    }
}
export default NavBar;