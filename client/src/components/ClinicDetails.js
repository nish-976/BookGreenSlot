import React,{ Component } from 'react';
// import logo from '../assets/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import {FormGroup, FormControl , Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const localStorage = require('localStorage');
const axios = require('axios');
import TimeSlot from '../util/timeSlot';

class ClinicDetails extends Component {
    state = {
        user : null,
        logout : false,
        openTime : '00:00 AM',
        closeTime : '11:30 PM',
        breakSlot : [],
        daySlot: [],
        cash : '',
        address : '',
        validity : '',
        typeDoctor: 'General physician'
    };

    async componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            this.setState({ user : user });
        }
    }

    updateOpenTime = event => {
        this.setState({ openTime : event.target.value });
    }

    updateCloseTime = event => {
        this.setState({ closeTime : event.target.value });
    }

    updateCash = event => {
        this.setState({ cash : event.target.value });
    }

    updateAddress = event => {
        this.setState({ address : event.target.value });
    }

    addToBreakSlot = (timeSlot) => {
        let array = this.state.breakSlot;
        array.push(timeSlot);
        this.setState({ breakSlot : array });
    }

    removeFromBreakSlot = (timeSlot) => {
        let array = this.state.breakSlot;
        let breakSlot = [];
        for(let i in array){
            if(array[i] !== timeSlot){
                breakSlot.push(array[i]);
            }
        }
        this.setState({ breakSlot : breakSlot });
    }

    addToDaySlot = (day) => {
        let array = this.state.daySlot;
        array.push(day);
        this.setState({ daySlot : array });
    }

    removeFromDaySlot = (day) => {
        let array = this.state.daySlot;
        let daySlot = [];
        for(let i in array){
            if(array[i] !== day){
                daySlot.push(array[i]);
            }
        }
        this.setState({ daySlot : daySlot });
    }

    Submit = async (timeArray) => {

        if(!this.state.validity){
            alert("Please enter validity days of appointment !")
            return;
        }

        let array = [];
        for (let i in timeArray){
            if(this.state.breakSlot.indexOf(timeArray[i]) == -1){
                array.push(timeArray[i]);
            }
        }

        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/doctor/clinicDetails' , {
                address : this.state.address,
                days : JSON.stringify(this.state.daySlot),
                timeSlot : JSON.stringify(array),
                cash : this.state.cash,
                openTime : this.state.openTime,
                closeTime : this.state.closeTime,
                name : JSON.parse(localStorage.getItem('user')).name,
                doctorType: this.state.typeDoctor,
                validity: this.state.validity,
                email : this.state.user.email
            })
            .then(res => {
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        let timeArray30 = TimeSlot(0,0,0,11,30,1,30);
        let index1 = parseInt(this.state.openTime[0] + this.state.openTime[1]);
        let index2 = parseInt(this.state.openTime[3] + this.state.openTime[4]);
        let index3 = parseInt(this.state.closeTime[0] + this.state.closeTime[1]);
        let index4 = parseInt(this.state.closeTime[3] + this.state.closeTime[4]);
        let ind1,ind2;
        if(this.state.openTime[6] + this.state.openTime[7] === "AM"){
            ind1 = 0;
        }else{
            ind1 = 1;
        }

        if(this.state.closeTime[6] + this.state.closeTime[7] === "AM"){
            ind2 = 0;
        }else{
            ind2 = 1;
        }

        let timeArray15 = TimeSlot(index1,index2,ind1,index3,index4,ind2,15);

        let time30;
        time30 = timeArray30.map((timeItem) => {
            return (
                <option value={timeItem}>{timeItem}</option>
            );
        });

        let time15;
        time15 = timeArray15.map((timeItem) => {
            return (
                this.state.breakSlot.indexOf(timeItem) == -1 ?
                <div className="grid-time-slot green-slot" onClick={() => this.addToBreakSlot(timeItem)}>
                    {timeItem}
                </div>
                :
                <div className="grid-time-slot red-slot" onClick={() => this.removeFromBreakSlot(timeItem)}>
                    {timeItem}
                </div>
            );
        })

        let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let days;
        days = daysOfWeek.map((day) => {
            return (
                this.state.daySlot.indexOf(day) == -1 ?
                <div className="grid-time-slot red-slot" onClick={() => this.addToDaySlot(day)}>
                    {day}
                </div>
                :
                <div className="grid-time-slot green-slot" onClick={() => this.removeFromDaySlot(day)}>
                    {day}
                </div>
            );
        })

        let doctorType = ["General physician","Gynaecologist","General surgeon","Radiologist","ENT specialist","Endocrinologist","Pulmonologist","Hematologist","Ophthalmologist","Psychiatrist","Other"]
        let doctorTypeDropDown = doctorType.map((typeDoctor) => {
            return (
                <option value={typeDoctor}>{typeDoctor}</option>
            );
        })

            console.log(this.state.typeDoctor);
        return (
            <div className='App'>
                <Navigation />

                <p className="home-header-text">Clinic Details !</p>

                {/* <p className="text-16-300 text-center">Complete Address of clinic !</p> */}
                <FormGroup>
                    <FormControl
                        type = 'text'
                        placeholder='Enter complete address of clinic'
                        value={this.state.address}
                        onChange={this.updateAddress}
                        className="clinicDetails"
                    />
                </FormGroup>

                <p className="text-16-300 text-center">Select the working days of clinic !</p>
                <div className="day-slot">
                    {days}
                </div>

                <br />

                <div>
                    <span className="text-16-300 margin-left-5">Clinic opens at :  </span>
                    <select onChange={this.updateOpenTime} value={this.state.openTime} className="dropdown-time">
                        {time30}
                    </select>

                    <span className="text-16-300 margin-left-5">Clinic closes at :  </span>
                    <select onChange={this.updateCloseTime} value={this.state.closeTime} className="dropdown-time">
                        {time30}
                    </select>

                    <span className="text-16-300 margin-left-5">You are a :  </span>
                    <select onChange={(event) => this.setState({ typeDoctor : event.target.value})} value={this.state.typeDoctor} className="dropdown-doctorType">
                        {doctorTypeDropDown}
                    </select>
                </div>

                <br />

                <p className="text-16-300 text-center">Select the slot in which doctor takes break !</p>
                <div className="grid-booking">
                    {time15}
                </div>

                <br />

                {/* <p className="text-16-300 text-center">Amount per patient !</p> */}
                <FormGroup>
                    <FormControl
                        type = 'text'
                        placeholder='Enter amount in rupees (eg. 400)'
                        value={this.state.cash}
                        onChange={this.updateCash}
                        className="clinicDetails"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControl
                        type = 'text'
                        placeholder='Number of days of validity of an appointment'
                        value={this.state.validity}
                        onChange={(event) => this.setState({ validity : event.target.value }) }
                        className="clinicDetails"
                    />
                </FormGroup>

                <br /><br />

                <div align='center'>
                    <Button className = 'button-submit' onClick={() => this.Submit(timeArray15)}>Submit</Button>
                </div>

                <br /><br /><br />


                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        );
    }
}

export default ClinicDetails;
