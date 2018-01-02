import React, { Component } from "react";
// import './App.css';

class Modal extends Component {
    render(props) {
        // boolean to render the modal or not
        if (!this.props.show) {
            return null;
        }

        return (
            <div className='backdrop'>
                <div className='modal'>
                    <div className='footer'>
                        <button onClick={this.props.onClose}>
                            Close
                        </button>
                    </div>
                    <form className = 'contact-info' method='post'>
                        <label>First Name:</label>
                        <input id = 'POST-first-name' type = 'text' placeholder = 'first name'/>
                        <br/>
                        <label>Last Name:</label>
                        <input id = 'POST-last-name' type = 'text' placeholder = 'Last name'/>
                        <br/>
                        <label>Email:</label>
                        <input id = 'POST-email' type = 'text' placeholder = 'email@email.com'/>
                        <br/>
                        <label>Zip Code:</label>
                        <input id = 'POST-zip-code' type = 'integer' placeholder = 'Zip Code'/>
                        <br/>
                        <label>State of Residence( US Only ):</label>
                        <select id='POST-us-state'>
                            <option selected value='Alabama'>Alabama</option>
                            <option value='Alaska'>Alaska</option>
                            <option value='Arizona'>Arizona</option>
                            <option value='Arkansas'>Arkansas</option>
                            <option value='California'>California</option>
                            <option value='Colorado'>Colorado</option>
                            <option value='Connecticut'>Connecticut</option>
                            <option value='Delaware'>Delaware</option>
                            <option value='Florida'>Florida</option>
                            <option value='Georgia'>Georgia</option>
                            <option value='Hawaii'>Hawaii</option>
                            <option value='Idaho'>Idaho</option>
                            <option value='Illinois'>Illinois</option>
                            <option value='Indiana'>Indiana</option>
                            <option value='Iowa'>Iowa</option>
                            <option value='Kansas'>Kansas</option>
                            <option value='Kentucky'>Kentucky</option>
                            <option value='Luisiana'>Luisiana</option>
                            <option value='Maine'>Maine</option>
                            <option value='Maryland'>Maryland</option>
                            <option value='Massachusetts'>Massachusetts</option>
                            <option value='Michigan'>Michigan</option>
                            <option value='Minnesota'>Minnesota</option>
                            <option value='Mississippi'>Mississippi</option>
                            <option value='Missouri'>Missouri</option>
                            <option value='Montana'>Montana</option>
                            <option value='Nebraska'>Nebraska</option>
                            <option value='Nevada'>Nevada</option>
                            <option value='New Hampshire'>New Hampshire</option>
                            <option value='New Jersey'>New Jersey</option>
                            <option value='New Mexico'>New Mexico</option>
                            <option value='New York'>New York</option>
                            <option value='North Carolina'>North Carolina</option>
                            <option value='North Dakota'>North Dakota</option>
                            <option value='Ohio'>Ohio</option>
                            <option value='Oklahoma'>Oklahoma</option>
                            <option value='Oregon'>Oregon</option>
                            <option value='Pennsylvania'>Pennsylvania</option>
                            <option value='Rhode Island'>Rhode Island</option>
                            <option value='South Carolina'>South Carolina</option>
                            <option value='South Dakota'>South Dakota</option>
                            <option value='Tennessee'>Tennessee</option>
                            <option value='Texas'>Texas</option>
                            <option value='Utah'>Utah</option>
                            <option value='Vermont'>Vermont</option>
                            <option value='Virginia'>Virginia</option>
                            <option value='Washington'>Washington</option>
                            <option value='West Virginia'>West Virginia</option>
                            <option value='Wisconsin'>Wisconsin</option>
                            <option value='Wyoming'>Wyoming</option>
                        </select>
                        <br/>
                        <input type="submit" value="Save"/>
                    </form>
                </div>
            </div>
        )
    };
};

export default Modal;