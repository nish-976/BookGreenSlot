import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation1 from './Navigation1';
import Footer from './Footer';

class Terms extends Component{
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
<h1 className="devInfo">Frequently Asked Questions</h1>
<p className="faqAnswers">
<ul>
<li className="faq">What is Bookgreenslot.com and how do I use it?</li>Bookgreenslot.com provides an online platform to the patients for booking appointment of doctors who have registered with us and are ready to provide online appointment based on their availability. A confirmed appointment is provided after making the payment through online channels.<br/>
<li className="faq">How do I use the online booking service?</li>Click on the BOOK NOW button, and search for the doctor whose appointment is required. Go to his online calendar, look for his availability at the required date and then select from the available time slot and get a confirmed booking after providing the necessary credentials and making payment. You may be asked to create an account (which will keep your appointments history for your future reference and re scheduling) with your phone number or email id and then you can book appointments for any doctor you want to visit through Bookgreenslot.com<br/>
<li className="faq">Can I use this service for checking availability of Doctor and his fees without actually booking or scheduling an appointment ?</li>Although, our aim is to assist you in getting an online appointment done for visit to a doctor, we do not prevent you from looking at the doctors availability and his profile.<br/>
<li className="faq">How can I view the time slots for the availability of Doctor ?</li>Go to BOOK NOW button on the doctor’s page, select a date and then you will see the time slots on which the said doctor is available for consultancy<br/>
<li className="faq">Can I schedule more than one appointment with a single doctor.</li>This can be done. We do not prevent you from getting multiple appointments done either for a same patient or different patients for a same date or different dates.<br/>
<li className="faq">Can I make the schedule an online appointment and pay later on ?</li>We do not provide this facility at the moment. Our aim is to assist you in obtaining a confirmed appointment with a doctor on a selected time slot and date.<br/>
<li className="faq">What is the availability as shown on the calendar ?</li>A doctor specifies how many appointments can be booked on a particular time slot on a given date. The availability on the calendar shows the vacancy therein and thus the available slots to book.<br/>
<li className="faq">Is it secure to give my personal details and my Credit card information online?</li>This is perfectly secure. We use industry-standard 256 bit SSL (Standard Sockets Layer) Technology, which is used worldwide, for data encryption. These are internationally certified security standards, which ensure the security of transactions conducted through the website and which makes it one of the most secure payment gateways in the world.<br/>
<li className="faq">How do I print my online appointment slip .</li>This can be printed immediately upon the booking being done or later on by going to “My Appointments” under your profile section.<br/>
<li className="faq">Do I need to contact the doctor after I have done an online appointment ?</li>No you don’t need to but if it is your interest to contact the doctor on the numbers as provided on his profile page or on the “Appointment Receipt”. This will help in ascertaining the exact timing on the selected time slot on the appointment date.<br/>
<li className="faq">Am I required to create an account  for making an online appointment?</li>Yes an account with Bookgreenslot.com is required to be created to book an appointment.This is to ascertain the truthfulness and validity of a patients profile and prevent fake and void bookings on our platform.<br/>
<li className="faq">I am a Doctor and I have done my registration. What should I do next?</li>Upon registration, our team will contact you and assist in completing the Profile page and creating the online calendar. We will seek your credential documents and bank related information at that time. This is required for the payment to be done by us in your account for online bookings done through this website/ portal.<br/>
<li className="faq">How can I update information on my profile?</li>A doctor can update his “profile” by logging on to his account using the user id and the password. This can be done by clicking on “Edit Profile” and making necessary changes and then clicking on “Update Profile”. Or you can contact us by clicking on the “contact us” button with the whatsapp chat link and our team will solve all your issues.<br/>
<li className="faq">What should I do if I forget my password?</li>In case, you forget your password click on “Forgot your password?” on the Doctor login page. A confirmation mail with the id and password is then sent on your registered email id. Or contact us with the “contact us” button and our team will solve your issues.<br/>
<li className="faq">What are medical terms as shown on the Bookgreenslot.com website?</li>These are the commonly used medical terms as sourced by us from various places, websites, books, doctors etc. We advise you to refer relevant books for more information on those or contact us in case of any queries.<br/>
</ul>
</p>


<Footer/>
            </div>
            );
        }
    };
    
    export default Terms;