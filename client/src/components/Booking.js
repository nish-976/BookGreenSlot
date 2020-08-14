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
        doctorId : '',
        home: false,
        bookingList: []
    };

    componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            this.setState({ user : user });
        }

        if(user.category == 'Doctor'){
            this.setState({ home : true });
        }

        let details = this.props.location.details;
        if(!details){
            this.setState({ logout : true });
        }else{
            this.setState({ details : details , doctorId : details.doctorId });
        }

        if(details){
            this.getListByDate(details.doctorId, this.state.date);
        }
    }

    getListByDate = async (doctorId, date) => {

        this.setState({ listLoaded : false });
        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/doctor/bookingByDate', {
                doctorId : doctorId,
                date : date.getDate() + "-"+ parseInt(date.getMonth()+1) +"-"+date.getFullYear()
            })
        .then(res => {
            // console.log(res.data.booking);
            this.setState({ bookingList : res.data.booking });
            // this.setState({ listLoaded : true, booking : res.data.booking })
        })
        .catch(error => {
            console.log(error);
        });
    }

    updateDate = date => {
        console.log(date);
        this.setState({
            date: date
        });
    };

    addDays = (date, days) => {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    oldBooking = async () => {
        if(!this.state.timeSlot) {
            alert("Please select a time slot !");
            return;
        }

        if(this.state.token[6]+this.state.token[7] != this.state.details.doctorId){
            alert("Token not associated with " + this.state.details.name);
            return;
        }

        if(this.state.token[0] == 'L'){
            alert("Token can be only 'O' type or 'F' type !");
            return;
        }

        // const date1 = new Date(this.state.date.getDate() + '/' + parseInt(this.state.date.getMonth()+1) + '/' + this.state.date.getFullYear());
        // const date2 = new Date(this.state.token[1]+this.state.token[2]+'/'+this.state.token[3]+this.state.token[4]+'/202'+this.state.token[5]);
        // const diffTime = Math.abs(date2 - date1);
        // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // console.log(diffDays);

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
                alert("Successfully booked an appointment !\nToken Id - " + res.data.receipt.token + " for appointment with " + this.state.details.name + " at " + this.state.timeSlot)
            })
        }catch(error){
            console.log(error);
            alert('Please enter valid token number');
        }
    }

    afterPayment = async () => {
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
                alert("Successfully booked an appointment !\nToken Id - " + res.data.receipt.token + " for appointment with " + this.state.details.name + " at " + this.state.timeSlot)
            })
        }catch(error){
            alert(error);
        }
    }

    getExtra = async () => {

        if(this.state.token){
            this.oldBooking();
        }else{

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
            try {
                await axios.get(window.location.protocol
                + '//'
                + window.location.hostname
                + ":"
                + window.location.port
                + '/api/admin/getFee')
                .then(res => {
                    this.loadRazorPay(res.data.fee);
                })
            }catch(error){
                alert(error);
            }
        }
    }

    loadRazorPay = (fee) => {
        console.log("Hello");
        let amount = (parseInt(this.state.details.cash) + parseInt(fee))* 100;
        let that = this;
        var options = {
            "key": "rzp_test_TnJ182QS0ttyUz", // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Book-Green-Slot",
            "description": "Appointment with " + that.state.details.name + " at " + that.state.timeSlot,
            // "image": "https://example.com/your_logo",
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                that.afterPayment();
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
            },
            "prefill": {
                "name": that.state.name,
                "email": that.state.user.email,
                "contact": that.state.user.phone
            },
            "theme": {
                "color": "#0d0d0d"
            }
        };

        var rzp1 = new window.Razorpay(options);
        try {
            rzp1.open();
        }catch(error){
            alert(error);
        }
    }

    render() {

        let slotArray, slots;
        if(this.state.details.timeSlot){
            slotArray = JSON.parse(this.state.details.timeSlot);
            slots = slotArray.map((timeItem) => {
                let bookingInTheTimeSlot = this.state.bookingList.filter((book) => book.timeSlot == timeItem);
                console.log(bookingInTheTimeSlot);

                if(bookingInTheTimeSlot.length == 0){
                    return(
                        this.state.timeSlot == timeItem ?
                        <div className="grid-time-slot black-slot" onClick={() => this.setState({ timeSlot : '' })}>
                            {timeItem}
                        </div> :
                        <div className="grid-time-slot white-slot" onClick={() => this.setState({ timeSlot : timeItem })}>
                            {timeItem}
                        </div>
                    );
                }else if(bookingInTheTimeSlot.length <=2){
                    return(
                        this.state.timeSlot == timeItem ?
                        <div className="grid-time-slot black-slot" onClick={() => this.setState({ timeSlot : '' })}>
                            {timeItem}
                        </div> :
                        <div className="grid-time-slot yellow-slot" onClick={() => this.setState({ timeSlot : timeItem })}>
                            {timeItem}
                        </div>
                    );
                }else if(bookingInTheTimeSlot.length <=4){
                    return(
                        this.state.timeSlot == timeItem ?
                        <div className="grid-time-slot black-slot" onClick={() => this.setState({ timeSlot : '' })}>
                            {timeItem}
                        </div> :
                        <div className="grid-time-slot light-red-slot" onClick={() => this.setState({ timeSlot : timeItem })}>
                            {timeItem}
                        </div>
                    );
                }else{
                    return(
                        this.state.timeSlot == timeItem ?
                        <div className="grid-time-slot black-slot" onClick={() => this.setState({ timeSlot : '' })}>
                            {timeItem}
                        </div> :
                        <div className="grid-time-slot red-slot" onClick={() => this.setState({ timeSlot : timeItem })}>
                            {timeItem}
                        </div>
                    );
                }
                // return (
                //     this.state.timeSlot == timeItem ?
                //     <div className="grid-time-slot green-slot" onClick={() => this.setState({ timeSlot : '' })}>
                //         {timeItem}
                //     </div> :
                //     <div className="grid-time-slot" onClick={() => this.setState({ timeSlot : timeItem })}>
                //         {timeItem}
                //     </div>
                // );
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
                        onChange={(date) => {
                            this.getListByDate(this.state.doctorId, date)
                            this.setState({date : date});
                        }}
                        value={this.state.date}
                        clearIcon={null}
                    />
                </div>

                <p className="text-16-300 text-center">Select your time slot !</p>
                <div className="grid-booking">
                    {slots}
                </div>
                <p className="text-center">{"( white: 0, yellow: <=2, pink: <=4, red: >4 )"}</p>

                <br /><br />

                <div align='center'>
                    <Button className = 'button-submit' onClick={this.getExtra}>Book</Button>
                </div>

                <br /><br /><br />

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
                {this.state.home ? <Redirect to='/HomeDoctor'></Redirect> : ''}
            </div>
        )
    }
};

export default Booking;
