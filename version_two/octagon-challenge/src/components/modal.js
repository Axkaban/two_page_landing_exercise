import React, { Component } from "react";
// import './App.css';

class Modal extends Component {
    render(props) {
        // boolean to render the modal or not
        if (!this.props.show) {
            return null;
        }

        return (
            <div className='backdrop' onClick={this.props.onClose}>
                <div className='modal'>
                    <form className = 'contact-info'>
                        <label for= 'first-name'>First Name:</label>
                        <input id = 'first-name' type = 'text' placeholder = 'first name'/>
                        <br/>
                        <label for= 'last-name'>Last Name:</label>
                        <input id = 'last-name' type = 'text' placeholder = 'Last name'/>
                        <br/>
                        <label for= 'email'>Email:</label>
                        <input id = 'email' type = 'text' placeholder = 'email@email.com'/>
                        <br/>
                        <label for= 'zip-code'>Zip Code:</label>
                        <input id = 'zip-code' type = 'integer' placeholder = 'Zip Code'/>
                        <br/>
                        <label for= 'us-state'>State of Residence( US Only ):</label>
                        {/* change to a dropdown menu imput */}
                        <input id = 'us-state' type = 'integer' placeholder = 'Zip Code'/>
                        <br/>
                    </form>
                    <div className='footer'>
                        <button onClick={this.props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    };
};

export default NewModal;