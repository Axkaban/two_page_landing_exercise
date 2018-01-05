import React, { Component } from "react";

class Hero extends Component {
    render(){
        return (
            <div id='hero'>
                <img className='spiral-logo' src="https://image.ibb.co/nRv6uw/octagon_icon.png" alt=""/>
                    <h1 className='main-text'>We are Spiral</h1>
                    <h3>A better way to use your wearables' data</h3>
            </div>
        )
    };
};

export default Hero;
