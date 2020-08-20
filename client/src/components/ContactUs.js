import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation1 from './Navigation1';
import masoom from '../assets/masoom.jpg';
import Footer from './Footer';

class ContactUs extends Component{
    state = {
        redirect : false
    };

    componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState({ redirect : true });
        }
    }


    render(){
        // console.log('this.state', this.state);
        return(
                <div>
                  <Navigation1 />
                  <h1 className="devInfo"> Contact Us </h1>
                    <div className="row">
                        <div className="column1">
                            <div className="card1">
                                <img className="devImage"src={masoom} />
                                    <h1>Aryan Raj</h1>
                                    <p class="title">Contact for Patient related queries</p>
                                    <p>Whatsapp - +91-9123240452</p>
                                    {/* <a href="mailto:raj.8@iitj.ac.in"><img className="mediaHandles" src={gmail} /></a>
                                    <a href="https://github.com/maasoomraj"><img className="mediaHandles" src={github} /></a>
                                    <a href="https://www.linkedin.com/in/masoom-raj-b4857517b/"><img className="mediaHandles" src={linkedin} /></a> */}
                            </div>
                        </div>
                        <div className="column1">
                            <div className="card2">
                                <img className="devImage"src={masoom} />
                                <h1>Aayush Singh</h1>
                                <p class="title">Contact for Doctor related queries</p>
                                <p>Whatsapp - +91-9334024077</p>
                                {/* <a href="mailto:nidhir.ug19.cs@nitp.ac.in"><img className="mediaHandles" src={gmail} /></a>
                                <a href="https://github.com/Nidhiranjan2019"><img className="mediaHandles" src={github} /></a>
                                <a href="https://www.linkedin.com/in/nidhi-ranjan-b255321a0/"><img className="mediaHandles" src={linkedin} /></a> */}
                            </div> 
                        </div>            
                    </div>
                    <Footer />
                </div>



            );
        }
    };
    
    export default ContactUs;