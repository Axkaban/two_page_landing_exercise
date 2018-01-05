import React, { Component } from "react";

class NavBar extends Component {
    render(props){
        return (
            <div id = 'nav-section'> 
               <nav className = 'nav-bar'>
                    <img id='logo' src="https://image.ibb.co/ncKugb/spiral_brand.png" alt="spiral_brand" border="0"/>
                <a href='#'>About us</a>
                <a href='#'>Product</a>
                <a className = 'contact-button' onClick={()=>{this.props.toggleModal()}}>Contact us</a>
              </nav>
            </div>
        )
    }
}
export default NavBar;