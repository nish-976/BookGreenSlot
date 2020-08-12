import React,{ Component } from 'react';
// import logo from '../assets/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const localStorage = require('localStorage');
const axios = require('axios');

import OfflineBooking from './OfflineBooking';

import DatePicker from 'react-date-picker';

class HomeDoctor extends Component {
    state = {
        user : null,
        logout : false,
        date: new Date(),
        myClinic : {},
        registered : 0,
        listLoaded : false,
        booking : []
    };

    async componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            this.setState({ user : user });
        }

        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/doctor/myClinic', {
                email : user.email
            })
        .then(res => {
            console.log(res.data.clinic);
            if(res.data.clinic){
                this.setState({ myClinic : res.data.clinic, registered: 2 });
                this.getListByDate(res.data.clinic);
            }else{
                this.setState({ registered: 1 });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    getListByDate = async (myClinic) => {
        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/doctor/bookingByDate', {
                doctorId : myClinic.doctorId,
                date : this.state.date.getDate() + "-"+ parseInt(this.state.date.getMonth()+1) +"-"+this.state.date.getFullYear()
            })
        .then(res => {
            console.log(res.data.booking);
            this.setState({ listLoaded : true, booking : res.data.booking })
        })
        .catch(error => {
            console.log(error);
        });
    }

    bookingByTimeSlot = (timeSlot) => {
        let list = this.state.booking.filter((slot) => slot.timeSlot == timeSlot);

        let booking = list.map((book) => {
            console.log(book.name + " " + book.timeSlot);
            return(
                <div className="hd-book-list">
                    {book.visited ?
                    <span className="hd-book-token hd-book-visited">Token - {book.token}</span> :
                    <span className="hd-book-token hd-book-not-visited">Token - {book.token}</span> }
                    <span className="hd-book-name">{book.name}</span>
                    <span className="hd-book-name">{book.age} years</span>
                    <span className="hd-book-name"></span>
                </div>
            );
        })

        return booking;
    }


    render() {

        let slotArray, slots;
        if(this.state.myClinic.timeSlot){
            slotArray = JSON.parse(this.state.myClinic.timeSlot);
            console.log(slotArray);
            slots = slotArray.map((timeItem) => {

                return (
                    <div className="hd-time-slot">
                        <p className="hd-time-slot-p">{timeItem}</p>
                        {this.bookingByTimeSlot(timeItem)}
                    </div>
                );
            })
        }

        return (
            <div className='App'>
                <Navigation />

                {this.state.registered == 0 &&
                    <p className="home-header-text">Please Wait !!</p>
                }

                {this.state.registered == 1 &&
                    <p className="home-header-text">Register your Clinic from Clinic Details Tab !!</p>
                }

                {this.state.registered == 2 &&
                    <p className="home-header-text">Appointment Details !!</p>
                }

                {this.state.registered == 2 &&
                <div>
                    <OfflineBooking />
                    <br />
                    <span className="text-16-300 margin-left-5">Choose Date -  </span>
                    <DatePicker
                        onChange={(date) => { this.setState({date : date}); this.getListByDate() }}
                        value={this.state.date}
                        clearIcon={null}
                    />
                </div> }

                {this.state.registered == 2 && this.state.listLoaded &&
                <div>
                    <br />

                    <div className="hd-time-list">
                        {slots}
                    </div>

                </div>}

                {this.state.registered == 2 && !this.state.listLoaded &&
                    <p className="home-header-text">Please Wait, we are Loading ...</p>
                }

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        );
    }
}

export default HomeDoctor;
