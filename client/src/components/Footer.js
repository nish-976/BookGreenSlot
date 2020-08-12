import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import facebook from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import developer from '../assets/developer.png';
import about from '../assets/about.png';
import contact from '../assets/contact.png';
import faq from '../assets/faq.png';

class Footer extends Component {
    state = {
        redirect : false
    };

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState({ redirect : true });
        }
    }

    render() {
        return (
            <div className="footer">
                {/* <div className="footercontent">
                    <span className="letsSee"><img src={facebook} width="12" height="20" /></span>
                    <span className="letsSee"><img src={insta} width="12" height="20" /></span>
                    <span className="letsSee"><img src={twitter} width="12" height="20" /></span>
                </div> */}
                <div className="floatRight">
                <div className="footercontentSocial">
                    <span className="letsSee"><p className="footerLinks">Home</p></span>
                    <span className="letsSee"><p className="footerLinks">Contact Us</p></span>
                    <span className="letsSee"><p className="footerLinks">About Us</p></span>
                    <span className="letsSee"><p className="footerLinks">Developer Info</p></span>
                    <span className="letsSee"><p className="footerLinks">FAQ</p></span>
                </div>
                </div>
            </div>
        )
    }
};

export default Footer;
