import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import {FormGroup, FormControl , Button} from 'react-bootstrap';
const axios = require('axios');

import DatePicker from 'react-date-picker';

class Booking extends Component {
    state = {
        user : null,
        logout : false,
        details : {},
        token : '',
        name : '',
        age : '',
        date: new Date(),
        timeSlot : '',
        doctorId : ''
    };

    // componentDidMount() {
    //     let user = JSON.parse(localStorage.getItem('user'))
    //     if(!user){
    //         this.setState({ logout : true });
    //     }else{
    //         this.setState({ user : user });
    //     }

    //     let details = this.props.location.details;
    //     if(!details){
    //         this.setState({ logout : true });
    //     }else{
    //         this.setState({ details : details , doctorId : details.doctorId });
    //     }

    //     console.log(this.state.date.setDate(this.state.date.getDate() + 30));
    // }

    // Submit = () => {
    //     if(this.state.token){
    //         this.oldBooking();
    //     }else{
    //         this.newBooking();
    //     }
    // }

    // newBooking = async () => {
    //     if(!this.state.name){
    //         alert("Please enter a Name !");
    //         return;
    //     }

    //     if(!this.state.age) {
    //         alert("Please enter an Age !");
    //         return;
    //     }

    //     if(!this.state.timeSlot) {
    //         alert("Please select a time slot !");
    //         return;
    //     }

    //     let dd = ( Math.floor(this.state.date.getDate()/10) == 0 ? ('0' + this.state.date.getDate()) : this.state.date.getDate());
    //     let mm = (Math.floor(parseInt(this.state.date.getMonth()+1)/10) == 0 ? ('0' + parseInt(this.state.date.getMonth()+1)) : parseInt(this.state.date.getMonth()+1));
    //     let y = this.state.date.getFullYear()%10;

    //     let token = "O" + dd + mm + y + this.state.doctorId;

    //     console.log("Token Number " + token);

    //     try {
    //         await axios.post(window.location.protocol
    //         + '//'
    //         + window.location.hostname
    //         + ":"
    //         + window.location.port
    //         + '/api/patient/book' , {
    //             name : this.state.name,
    //             age : this.state.age,
    //             doctorId : this.state.doctorId,
    //             timeSlot : this.state.timeSlot,
    //             token : token,
    //             date : this.state.date.getDate() + "-"+ parseInt(this.state.date.getMonth()+1) +"-"+this.state.date.getFullYear(),
    //             email : this.state.user.email
    //         })
    //         .then(res => {
    //             alert("Sucess !")
    //         })
    //     }catch(error){
    //         alert(error);
    //     }
    // }


    render() {
        return (
            <div className="border-box-booking">

                <p className="text-20-500 text-center">Offline Booking</p>
                <FormGroup>
                    <FormControl
                        type = 'text'
                        placeholder='Enter valid token number of last appointment'
                        value={this.state.token}
                        onChange={(event) => this.setState({ token : event.target.value, name: '', age: '' }) }
                        className="clinicDetails  booking-input"
                    />
                </FormGroup>
                <p className="text-16-300 text-center">Or</p>
                <FormGroup>
                    <FormControl
                        type = 'text'
                        placeholder='Enter your Name'
                        value={this.state.name}
                        onChange={(event) => this.setState({ token : '', name: event.target.value }) }
                        className="clinicDetails booking-input"
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type = 'text'
                        placeholder='Enter your Age'
                        value={this.state.age}
                        onChange={(event) => this.setState({ token : '', age: event.target.value }) }
                        className="clinicDetails booking-input"
                    />
                </FormGroup>
            </div>
        )
    }
};

export default Booking;
