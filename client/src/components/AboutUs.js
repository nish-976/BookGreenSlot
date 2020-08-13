import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import care  from '../assets/care.png';
import stand  from '../assets/stand.png';
import strength  from '../assets/strength.png';
import booking  from '../assets/booking.png';


class AboutUs extends Component{
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
            <div className="aboutusContent">
                <img className="aboutUsImg" src={care} />
                <p className="aboutUsHeadings">“We take care”</p>
                <p className="aboutUsText">Started out as passion project we strive to build a trusted relationship between the consumers and the providers. With great use of our technology and tools we make the whole healthcare experience easier and less exhausting.</p>
                <img className="aboutUsImg" src={booking} />
                <p className="aboutUsHeadings">What do we do?</p>
                <p className="aboutUsText">We provide the consumers with an online booking platform starting out with healthcare services, the consumers can simply book an appointment and save their spot. This helps them skip long waiting queues and in turn saves their valuable time and money.
                </p>
                <img className="aboutUsImg" src={stand} />
                <p className="aboutUsHeadings">How we stand out?</p>
                <p className="aboutUsText">We are committed to keep our users updated all the time not just about their appointments but also the advances in treatment methodologies and medical diagnostics.
                </p>

                <img className="aboutUsImg" src={strength} />
                <p className="aboutUsHeadings">Our strengths</p>
                <p className="aboutUsLastText">With hundreds of people connecting with us daily to book their appointments for various services and seek the right advice about their health, we are a great community of healthcare providers, consumers, doctors and developers.
                </p>
            </div>
            );
        }
    };

    export default AboutUs;
