import React, { Component } from "react";

class TextSection extends Component {
  render() { 
      return(
        <div id = 'main-section'>
            <h1 className='main-text'>We are Spiral</h1>
            <h3>A better way to use your wearables' data</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo iusto dolores corrupti doloremque illo recusandae quos quam et repellendus, distinctio vel ducimus laudantium fuga. Eligendi quia sint earum dolor?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo iusto dolores corrupti doloremque illo recusandae quos quam et repellendus, distinctio vel ducimus laudantium fuga. Eligendi quia sint earum dolor?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo iusto dolores corrupti doloremque illo recusandae quos quam et repellendus, distinctio vel ducimus laudantium fuga. Eligendi quia sint earum dolor?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo iusto dolores corrupti doloremque illo recusandae quos quam et repellendus, distinctio vel ducimus laudantium fuga. Eligendi quia sint earum dolor?</p>
            <br/>
        <div className = 'display'>
            <img className = 'display-image' src="https://image.ibb.co/kGp5Zw/Wearable_Tech.jpg" alt="Wearable_Tech" border="0"/>
            <img className = 'display-image' src="https://image.ibb.co/dgxQZw/wearables_forrester.jpg" alt="wearables_forrester" border="0"/>
            <img className = 'display-image' src="https://image.ibb.co/coxsEw/Algorithm_design.jpg" alt="Algorithm_design" border="0"/>
        </div>
        </div>
    )};
};

export default TextSection;