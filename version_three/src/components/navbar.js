import React, { Component } from "react";

class NavBar extends Component {
    render(props){
        return (
            <div id = 'nav-section'> 
               <nav className = 'nav-bar'>
                    <img id='logo' src= {this.props.imgSrc} alt="spiral_brand" border="0"/>
                <a className = 'nav-contact' href='#'>Product</a>
                <a className = 'nav-contact contact-button' onClick={()=>{this.props.toggleModal()}}>Contact us</a>
              </nav>
            </div>
        )
    }
}
export default NavBar;