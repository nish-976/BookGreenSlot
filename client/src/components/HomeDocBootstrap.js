import React,{ Component } from 'react';
// import logo from '../assets/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const localStorage = require('localStorage');
const axios = require('axios');

import OfflineBooking from './OfflineBooking';
import Footer from './Footer';

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
                this.getListByDate(res.data.clinic, this.state.date);
            }else{
                this.setState({ registered: 1 });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    getListByDate = async (myClinic, date) => {

        this.setState({ listLoaded : false });
        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/doctor/bookingByDate', {
                doctorId : myClinic.doctorId,
                date : date.getDate() + "-"+ parseInt(date.getMonth()+1) +"-"+date.getFullYear()
            })
        .then(res => {
            console.log(res.data.booking);
            this.setState({ listLoaded : true, booking : res.data.booking })
        })
        .catch(error => {
            console.log(error);
        });
    }

    bookVisited = async (book) => {
        console.log(book);
        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/doctor/bookingVisited', {
                token : book.token
            })
        .then(res => {
            let booking = this.state.booking;
            for(let i in booking){
                if(booking[i].token == book.token){
                    booking[i].visited = "true";
                }
            }
            this.setState({ booking : booking });
        })
        .catch(error => {
            console.log(error);
        });
    }

    bookingByTimeSlot = (timeSlot) => {
        let list = this.state.booking.filter((slot) => slot.timeSlot == timeSlot);

        let booking = list.map((book) => {
            console.log(book.name + " " + book.timeSlot);
            console.log(book.visited == false);
            return(
                // <div className="hd-book-list">
                //     {book.visited[0] == 't' ?
                //     <span className="hd-book-token hd-book-visited">Token - {book.token}</span> :
                //     <span className="hd-book-token hd-book-not-visited">Token - {book.token}</span> }
                //     <span className="hd-book-name">{book.name}</span>
                //     <span className="hd-book-name">{book.age} years</span>
                //     {book.visited[0] == 'f' ? <span className="hd-book-name"><Button className = 'visited-button' onClick={() => this.bookVisited(book)}>Visited ?</Button></span> :
                //     <span className="hd-book-name"><span className="glyphicon glyphicon-ok" /></span>}
                // </div>

                book.visited[0] == 'f' ?
                <div className="row jumbotron border-solid-1px-black margin-5-10 bg-yellow">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center margin-2-5">
                            <span className="font-20-bold">Token: {book.token}</span>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center margin-2-5">
                            Name: {book.name}
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center margin-2-5">
                            Age: {book.age} years
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center margin-2-5">
                            <button type="button" className="btn btn-success" onClick={() => this.bookVisited(book)}>Visited ?</button>
                    </div>
                </div>
                :
                <div className="row jumbotron border-solid-1px-black margin-5-10 bg-red">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center margin-2-5">
                            <span className="font-20-bold">Token: {book.token}</span>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center margin-2-5">
                            Name: {book.name}
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center margin-2-5">
                            Age: {book.age} years
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center margin-2-5">
                            <p className="font-20-bold">Visited</p>
                    </div>
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
                    // <div className="hd-time-slot">
                    //     <p className="hd-time-slot-p">{timeItem}</p>
                    //     {this.bookingByTimeSlot(timeItem)}
                    // </div>

                    <div className="row jumbotron border-solid-1px-black margin-5-5">
                        <div className="col-12">
                            <p className="font-20-bold">{timeItem}</p>
                        </div>
                        <div className="col-12">
                            {this.bookingByTimeSlot(timeItem)}
                        </div>
                    </div>
                );
            })
        }

        return (
            <div className='HD'>
                <Navigation />

                {this.state.registered == 0 &&
                    <div className="row text-center font-20-bold">Loading ...</div>
                }

                {this.state.registered == 1 &&
                    <div className="row text-center font-20-bold">Register your Clinic from Clinic Details Tab !!</div>
                }

                {this.state.registered == 2 &&
                    <div className="row text-center font-20-bold"><u>{this.state.myClinic.name}</u></div>
                }

                {this.state.registered == 2 &&
                <div>
                    <OfflineBooking
                        doctorId={this.state.myClinic.doctorId}
                        timeSlot={this.state.myClinic.timeSlot}
                        email={this.state.user.email}
                    />

                    <br />

                    <div className="row text-center margin-2-5">
                    Choose Date: {"  "}
                    <DatePicker
                        onChange={(date) => { this.setState({date : date}); this.getListByDate(this.state.myClinic, date) }}
                        value={this.state.date}
                        clearIcon={null}
                    />
                    </div>
                </div> }

                {this.state.registered == 2 && this.state.listLoaded &&
                <div>
                    <br />

                    {/* <div className="hd-time-list">
                        {slots}
                    </div> */}

                    <div className="container-fluid">
                        {slots}
                    </div>

                </div>}

                {this.state.registered == 2 && !this.state.listLoaded &&
                    <p className="home-header-text">Please Wait, we are Loading ...</p>
                }

                {/* <Footer /> */}

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        );
    }
}

export default HomeDoctor;
