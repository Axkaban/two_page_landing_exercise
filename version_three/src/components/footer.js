import React, { Component } from 'react';

class Footer extends Component {
    render(props) {
        return(
            <div>
                <footer>
                    ©AK 2018 
                    <p onClick={() => { this.props.toggleModal() }}>Contact Us</p>
                    <p>Follow Us</p>
                    <a src='#'><img className='facebook' src='http://www.cherithintl.org/wp-content/uploads/2014/09/Facebook_favicon_2.png' alt='' /></a>
                    <a src='#'><img className='twitter' src='http://www.clker.com/cliparts/T/V/Q/o/r/o/simple-twitter-icon-th.png' alt='' /></a>
                </footer>
            </div>
        )
    }
}

export default Footer;