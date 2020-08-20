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
                <div className="footercontentSocial">
                    {/* <a href="#"><span class="fb"></span><img src={facebook}/></a>
                    <a href="#"><span class="twitter"></span> <img src={twitter}/></a>
                    <a href="#"><span class="insta"></span> <img src={insta}/></a> */}
                    <span className="letsSee"><img src={facebook} /></span>
                    <span className="letsSee"><img src={insta} /></span>
                    <span className="letsSee"><img src={twitter} /></span>


                </div>

            <div className="footercontent">

                <a href='/home'><span className="letsSee"><p className="footerLinks">Home</p></span></a>
                <a href='/ContactUs'><span className="letsSee"><p className="footerLinks">Contact Us</p></span></a>
                {/* <span className="letsSee"><p className="footerLinks">About Us</p></span> */}
                <a href='/DeveloperInfo'><span className="letsSee"><p className="footerLinks">Developer Info</p></span></a>
                <a href='/Faq'><span className="letsSee"><p className="footerLinks">FAQ</p></span></a>
                {/* <span className="letsSee"><img src={contact} /></span>
                <span className="letsSee"><img src={about} /></span>
                <span className="letsSee"><img src={developer} /></span>
                <span className="letsSee"><img src={faq} /></span> */}
    {/* <a href="#"><span class="contact"></span><img src={contact}/></a>
    <a href="#"><span class="about"></span> <img src={about}/></a>
    <a href="#"><span class="developer"></span> <img src={developer}/></a>
    <a href="#"><span class="faq"></span> <img src={faq}/></a> */}


            </div>


            </div>
        )
    }
};

export default Footer;
