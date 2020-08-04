import React,{ Component } from 'react';
// import logo from '../assets/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const localStorage = require('localStorage');
const axios = require('axios');
import TimeSlot from '../util/timeSlot';

class ClinicDetails extends Component {
    state = {
        user : null,
        logout : false,
        openTime : 'Patient',
        closeTime : 'Patient'
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

    
    render() {

        let timeArray30 = TimeSlot(30);
        let timeArray15 = TimeSlot(15);

        let time30;
        time30 = timeArray30.map((timeItem) => {
            return (
                <option value={timeItem}>{timeItem}</option>
            );
        });

        let time15;
        time15 = timeArray15.map((timeItem) => {
            return (
                <span><Button>{timeItem}</Button></span>
            );
        })

        return (
            <div className='App'>
                <Navigation />

                <h1>Clinic Details</h1>

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


                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        );
    }
}

export default ClinicDetails;