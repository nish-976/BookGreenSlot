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

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            this.setState({ user : user });
        }

        let details = this.props.location.details;
        if(!details){
            this.setState({ logout : true });
        }else{
            this.setState({ details : details , doctorId : details.doctorId });
        }
    }

    updateDate = date => {
        console.log(date);
        this.setState({
            date: date
        });
    };

    Submit = () => {
        if(this.state.token){
            this.oldBooking();
        }else{
            this.newBooking();
        }
    }

    oldBooking = async () => {
        if(!this.state.timeSlot) {
            alert("Please select a time slot !");
            return;
        }

        let dd = ( Math.floor(this.state.date.getDate()/10) == 0 ? ('0' + this.state.date.getDate()) : this.state.date.getDate());
        let mm = (Math.floor(parseInt(this.state.date.getMonth()+1)/10) == 0 ? ('0' + parseInt(this.state.date.getMonth()+1)) : parseInt(this.state.date.getMonth()+1));
        let y = this.state.date.getFullYear()%10;

        let token = "L" + dd + mm + y + this.state.doctorId;

        console.log("Token Number " + token);

        try {
            await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/patient/old-book' , {
                timeSlot : this.state.timeSlot,
                oldToken : this.state.token,
                doctorId : this.state.doctorId,
                token : token,
                date : this.state.date.getDate() + "-"+ parseInt(this.state.date.getMonth()+1) +"-"+this.state.date.getFullYear(),
                email : this.state.user.email
            })
            .then(res => {
                alert("Success !")
            })
        }catch(error){
            console.log(error);
            alert('Please enter valid token number');
        }
    }

    newBooking = async () => {
        if(!this.state.name){
            alert("Please enter a Name !");
            return;
        }

        if(!this.state.age) {
            alert("Please enter an Age !");
            return;
        }

        if(!this.state.timeSlot) {
            alert("Please select a time slot !");
            return;
        }

        let dd = ( Math.floor(this.state.date.getDate()/10) == 0 ? ('0' + this.state.date.getDate()) : this.state.date.getDate());
        let mm = (Math.floor(parseInt(this.state.date.getMonth()+1)/10) == 0 ? ('0' + parseInt(this.state.date.getMonth()+1)) : parseInt(this.state.date.getMonth()+1));
        let y = this.state.date.getFullYear()%10;

        let token = "O" + dd + mm + y + this.state.doctorId;

        console.log("Token Number " + token);

        try {
            await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/patient/book' , {
                name : this.state.name,
                age : this.state.age,
                doctorId : this.state.doctorId,
                timeSlot : this.state.timeSlot,
                token : token,
                date : this.state.date.getDate() + "-"+ parseInt(this.state.date.getMonth()+1) +"-"+this.state.date.getFullYear(),
                email : this.state.user.email
            })
            .then(res => {
                alert("Success !")
            })
        }catch(error){
            alert(error);
        }
    }


    render() {

        let slotArray, slots;
        if(this.state.details.timeSlot){
            slotArray = JSON.parse(this.state.details.timeSlot);
            slots = slotArray.map((timeItem) => {
                return (
                    this.state.timeSlot == timeItem ?
                    <div className="grid-time-slot green-slot" onClick={() => this.setState({ timeSlot : '' })}>
                        {timeItem}
                    </div> :
                    <div className="grid-time-slot" onClick={() => this.setState({ timeSlot : timeItem })}>
                        {timeItem}
                    </div>
                );
            })
        }

        let workingDays;
        if(this.state.details.days){
            workingDays = JSON.parse(this.state.details.days).map((day, index) => {
                return (
                    index == JSON.parse(this.state.details.days).length-1 ?
                    <span className="text-20-500 margin-left-10px">{day}</span> :
                    <span className="text-20-500 margin-left-10px">{day} |</span>
                );
            })
        }

        // console.log(this.state.date.getDayName());
        let date=this.state.date.getDate() + "-"+ parseInt(this.state.date.getMonth()+1) +"-"+this.state.date.getFullYear();
        console.log(date);
        return (
            <div className='App'>
                <Navigation />

                <br />

                <p className="text-22-700 margin-left-5">{this.state.details.name} ({this.state.details.doctorType})</p>
                <p className="text-20-500 margin-left-5">Address : {this.state.details.address}</p>
                <p className="text-20-500 margin-left-5">Working Days : {workingDays}</p>
                <p className="text-20-500 margin-left-5">Charge for an appointment : Rs. {this.state.details.cash}</p>
                <p className="text-20-500 margin-left-5">Token Validity : {this.state.details.validity} days</p>

                <p className="home-header-text">Book your Time Slot !</p>

                <div className="border-box-booking">
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

                <br />

                <div>
                    <span className="text-16-300 margin-left-5">Choose your appointment date -  </span>
                    <DatePicker
                        onChange={(date) => this.setState({date : date})}
                        value={this.state.date}
                        clearIcon={null}
                    />
                </div>

                <p className="text-16-300 text-center">Select your time slot !</p>
                <div className="grid-booking">
                    {slots}
                </div>

                <br /><br />

                <div align='center'>
                    <Button className = 'button-submit' onClick={this.Submit}>Submit</Button>
                </div>

                <br /><br /><br />

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        )
    }
};

export default Booking;
