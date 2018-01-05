import React, { Component } from "react";

class TextSection extends Component {
  render() { 
      return(
        <div id = 'main-section'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo iusto dolores corrupti doloremque illo recusandae quos quam et repellendus, distinctio vel ducimus laudantium fuga. Eligendi quia sint earum dolor?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo iusto dolores corrupti doloremque illo recusandae quos quam et repellendus, distinctio vel ducimus laudantium fuga. Eligendi quia sint earum dolor?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo iusto dolores corrupti doloremque illo recusandae quos quam et repellendus, distinctio vel ducimus laudantium fuga. Eligendi quia sint earum dolor?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo iusto dolores corrupti doloremque illo recusandae quos quam et repellendus, distinctio vel ducimus laudantium fuga. Eligendi quia sint earum dolor?</p>
            <br/>
        <div className = 'display'>
            <img className = 'display-image' src="https://image.ibb.co/kGp5Zw/Wearable_Tech.jpg" alt="Wearable_Tech" border="0"/>
                  <div className='display-text'> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </div>
            <img className = 'display-image' src="https://image.ibb.co/coxsEw/Algorithm_design.jpg" alt="Algorithm_design" border="0"/>
        </div>
        </div>
    )};
};

export default TextSection;