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
        address : ''
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
                name : JSON.parse(localStorage.getItem('user')).name
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
                <span>
                {
                this.state.breakSlot.indexOf(timeItem) == -1 ?
                    <Button className="admin-buttons-start-s" onClick={() => this.addToBreakSlot(timeItem)}>{timeItem}</Button>
                :   <Button className="admin-buttons-start-e" onClick={() => this.removeFromBreakSlot(timeItem)}>{timeItem}</Button>
                }
                </span>
            );
        })

        let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let days;
        days = daysOfWeek.map((day) => {
            return (
                <span>
                {
                this.state.daySlot.indexOf(day) == -1 ?
                    <Button className="admin-buttons-start-s" onClick={() => this.addToDaySlot(day)}>{day}</Button>
                :   <Button className="admin-buttons-start-e" onClick={() => this.removeFromDaySlot(day)}>{day}</Button>
                }
                </span>
            );
        })

        return (
            <div className='App'>
                <Navigation />

                <h1>Clinic Details</h1>

                <label className="label">Complete Address of clinic -</label>
                <FormGroup>
                    <FormControl 
                        type = 'text'
                        placeholder='Enter complete address of clinic'
                        value={this.state.address} 
                        onChange={this.updateAddress}
                        className="inputBox"
                    />
                </FormGroup>

                <label className="label">Select the working days of clinic -</label>
                <div>
                    {days}
                </div>

                <div>
                <label className="label">Clinic opens at :  </label>
                <select onChange={this.updateOpenTime} value={this.state.openTime} className="dropdown">
                    {time30}
                </select>
                <label className="label">Clinic closes at :  </label>
                <select onChange={this.updateCloseTime} value={this.state.closeTime} className="dropdown">
                    {time30}
                </select>
                </div>
                    <br />
                <label className="label">Select the slot in which doctor takes break -</label>
                <div>
                    {time15}
                </div>

                <label className="label">Amount per patient -</label>
                <FormGroup>
                    <FormControl 
                        type = 'text'
                        placeholder='Enter amount in rupees (eg. 400)'
                        value={this.state.cash} 
                        onChange={this.updateCash}
                        className="inputBox"
                    />
                </FormGroup>

                <br /><br />

                <div align='center'>
                    <Button className = 'button' onClick={() => this.Submit(timeArray15)}>Submit</Button>
                </div>

                <br /><br /><br />


                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        );
    }
}

export default ClinicDetails;