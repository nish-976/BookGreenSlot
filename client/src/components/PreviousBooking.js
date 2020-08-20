import React,{ Component } from 'react';
// import logo from '../assets/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const localStorage = require('localStorage');
const axios = require('axios');
import doctorImage from '../assets/doctor.png'
import Footer from './Footer'

class PreviousBooking extends Component {
    state = {
        user : null,
        logout : false,
        isLoaded : false,
        home: false
    };

    async componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            this.setState({ user : user });
        }

        if(user.category == 'Doctor'){
            this.setState({ home : true });
        }

        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/patient/myAppointments',{
                email : user.email
            })
        .then(res => {
            console.log(res.data.appointments);
            this.setState({ appointments : res.data.appointments, isLoaded : true });
        })
        .catch(error => {
            console.log(error);
        });

    }


    render() {

        let appointments;
        if(this.state.appointments){
            appointments = this.state.appointments.map((appointment) => {
                // console.log(Task.endTime);
            return (
                <div className="myAppointments">
                    <p>Token: {appointment.token}</p>
                    <p>Name: {appointment.name}</p>
                    <p>Age: {appointment.age}</p>
                    <p>Time-Slot: {appointment.timeSlot}</p>
                    <p>Appointment Date: {appointment.appointmentDate}</p>
                    {/* <p>Booking Date: {appointment.date.getDate() + "-"+ parseInt(appointment.date.getMonth()+1) +"-"+appointment.date.getFullYear()}</p> */}
                    <p>Visited: {appointment.visited[0] == 't' ? 'Yes' : 'No'}</p>
                </div>
            );
            });
        }

        return (
            <div className='App'>
                <Navigation />

                <p className="home-header-text">Past Appointments !</p>

                {this.state.isLoaded ?
                <div>
                    {appointments}
                </div>
                :
                <p className="home-header-text height-100vh">Loading .... </p>}

                <Footer />

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
                {this.state.home ? <Redirect to='/HomeDoctor'></Redirect> : ''}
            </div>
        );
    }
}

export default PreviousBooking;
