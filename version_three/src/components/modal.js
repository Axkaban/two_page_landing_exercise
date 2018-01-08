import React, { Component } from "react";
import Axios from 'axios';
// import './App.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            zipCode: '',
            state: '',
            message: '',

        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // to save in state
    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(name, value)
    }

    // To send to the data base
    handleSubmit(e) {
        e.preventDefault();
        const firstName = this.state.firstName,
            lastName = this.state.lastName,
            email = this.state.email,
            zipCode = this.state.zipCode,
            usState = this.state.usState,
            nameTest = /[A-Za-z]\w+/,
            lastNameTest = /([A-Za-z-'].\w)\D/,
            emailTest = /[^ @]*@[^ @]*/,
            zipCodeTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

        // function to validate the input in each field
        const validate = (el, pattern) => {
            if (el === '') {
                this.setState({
                    message: 'All fields must be filled'
                })
                console.log('failed');
                setTimeout(() => {
                    this.setState({
                        message: ''
                    })
                }, 5000);
                return false;
            } else if (!pattern.test(el)) {
                if (el === firstName) {
                    console.log('failed name')
                    this.setState({
                        message:'Your name must contain only aphabetic characters'
                    });
                    setTimeout(() => {
                        this.setState({
                            message: ''
                        })
                    }, 5000);
                    return false;
                };
                if (el === lastName) {
                    console.log('failed last')
                    this.setState({
                        message: 'Your last name cannot contain numbers or any characters other than alphabetic, apostrophes, and hyphen'
                    });
                    setTimeout(() => {
                        this.setState({
                            message: ''
                        })
                    }, 5000);
                    return false;
                };
                if (el === email) {
                    console.log('failed email')
                    this.setState({
                        message: 'Please insert a valid email'
                    });
                    setTimeout(() => {
                        this.setState({
                            message: ''
                        })
                    }, 5000);
                    return false;
                };
                if (el === zipCode) {
                    console.log('failed zip')
                    console.log(el, zipCode)
                    this.setState({
                        message: 'Please insert a valid zip code'
                    });
                    setTimeout(() => {
                        this.setState({
                            message: ''
                        })
                    }, 5000);
                    return false;
                };
                return false;
            } else {
                return true;
            };
        };//end of validate()
        if (validate(firstName, nameTest) && validate(lastName, lastNameTest) && validate(email, emailTest) && validate(zipCode, zipCodeTest)) {
          const contactInfo = {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                zip_code: this.state.zipCode,
                us_state: this.state.usState 
            };
        console.log(contactInfo);
            Axios.post('/contacts', contactInfo)
            .then(res => {
                console.log(res.data);
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    zipCode: '',
                    state: '',
                    message: '',

                });
            })
            .catch(err => console.log(err));
         }
        
    } 

    render(props) {

        // boolean to render the modal or not
        if (!this.props.show) {
            return null;
        }

        return (
            <div className='backdrop'>
                <div className='modal'>
                    <div className='footer'>
                        <button className='closing-button' onClick={this.props.onClose}>
                          X
                        </button>
                    </div>
                    <form className='contact-info' method='post' onSubmit={this.handleSubmit.bind(this)}>
                        <label>First Name:
                        <input id='POST-first-name' name='firstName' type='text' placeholder='first name' value={this.state.firstName} onChange={this.handleChange.bind(this)} pattern='[A-Za-z]+' title='Alphabet charachters only'/>
                        </label><br/>
                        <label>Last Name:</label>
                        <input id='POST-last-name' name='lastName' type='text' placeholder='Last name' value={this.state.lastName} onChange={this.handleChange.bind(this)} pattern='[^." ,\t ;:@#$%\^&*()\[\]\{\}\\|/!?`~<>+=]+?' title='Alphabet charachters, hyphens, and apostrophes only'/>
                        <br/>
                        <label>Email:</label>
                        <input id='POST-email' name='email' type='text' placeholder='email@email.com' value={this.state.email} onChange={this.handleChange.bind(this)} pattern= '[^ @]*@[^ @]*'/>
                        <br/>
                        <label>Zip Code:</label>
                        <input id = 'POST-zip-code' name = 'zipCode' type = 'integer' placeholder = 'Zip Code' value = {this.state.zipCode} onChange = {this.handleChange.bind(this)}/>
                        <br/>
                        <label>State of Residence( US Only ):</label>
                        <select id='POST-us-state' name = 'usState' value = {this.state.usState} onChange={this.handleChange.bind(this)}>
                            <option value='Alabama'>Alabama</option>
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
                        <input className= 'submit-button' type="submit" value="Save"/>
                    </form>
                    <p className= 'alert'>{this.state.message}</p>
                </div>
            </div>
        )
    };
};

export default Modal;