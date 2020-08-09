import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Navigation1 from './Navigation1';
import topimg from '../assets/topimg.png';
import heart from '../assets/heart.png';
import doctor from '../assets/doctor.png';
import doc from '../assets/doc.png';
import login from '../assets/login.png';
import pay from '../assets/pay.png';
import time from '../assets/time.png';
import appointment from '../assets/appointment.png';
import Footer from './Footer';
import facebook from '../assets/facebook.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class App extends Component {
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
            <div>
                <Navigation1 />
                <div className="containerBox">
                   <div className="topImage">
                      <img src={topimg} width="100%" height="100%"/>
                   </div>
                   <div className="text-box">
                     <div className="text1">Welcome to</div>
                     <div className="text2"> Book Green Slot !</div> 
                     <div className="text3">From experimental passion projects to native doctors booking for patients, <div>we've had the opportunity to heal and recover a number of patients.</div> We thrive on creative challenges and enjoy building strong relationships<div> along the way.</div></div>
                   </div>
                </div>
                <img className ="yellowicon" src={heart}/>
                <div className="text5">Explore what our doctors have to say about us !</div>

                <div className="row">
                    <div className="column">
                    
                        <div className="card"><p className="review">"This is a very innovative ideaThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative idea"</p><div className="docname"><footer>-Mr. ABCD(Surgeon, XYZ hospital)</footer></div>
                        </div>
                        </div>
                    <div className="column">
                        
                        <div className="card"><p className="review">"Book Green Slot has made getting appointments so hassle-freeThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative idea"</p><div className="docname"><footer>-Mr. ABCD(Surgeon, XYZ hospital)</footer></div>
                        </div>
                    </div>
                    <div className="column">
                    
                        <div className="card"><p className="review">"I appreciate this wonderful initiativeThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative ideaThis is a very innovative idea"</p><div className="docname"><footer>-Mr. ABCD(Surgeon, XYZ hospital)</footer></div>
                        </div>
                    </div>
                    
                </div>


                <div className='sequenceBook'>

                <VerticalTimeline>
        <VerticalTimelineElement className="vertical-timeline-element--work" icon={<img className= "vertical-timeline-icon" src = {login} />} >
                        {/* <p className="sequenceBookText">Login/SignUp</p> */}
                        <h1>Login/SignUp</h1>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element--work" icon={<img className= "vertical-timeline-icon" src = {doc} />}>
                        <p className="sequenceBookText"></p>
                        <h1>Choose your doctor/Clinic</h1>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element--work" icon={<img className= "vertical-timeline-icon" src = {time} />}>
                        {/* <p className="sequenceBookText">Select your time-slot</p> */}
                        <h1>Select your time-slot</h1>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element--work" icon={<img className= "vertical-timeline-icon" src = {pay} />}>
                        {/* <p className="sequenceBookText">Pay for your appointment</p> */}
                        <h1>Pay for your appointments</h1>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <br /><br />
                <img className ="yellowicon" src={appointment}/>
                <div className="text4">Get your appointments right now!</div>
                </div>
                <div>
                
                </div>
                <Footer />
                   
                {this.state.redirect ? <Redirect to='/home'></Redirect> : '' }
            </div>
        )
    }
};

export default App;