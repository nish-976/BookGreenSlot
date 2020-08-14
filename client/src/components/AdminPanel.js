import React,{ Component } from 'react';
// import logo from '../assets/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {FormGroup, FormControl , Button} from 'react-bootstrap';
const localStorage = require('localStorage');
const axios = require('axios');
import doctorImage from '../assets/doctor.png'

class PreviousBooking extends Component {
    state = {
        user : null,
        logout : false,
        isLoaded : false,
        home: false,
        admin: {},
        fee: ''
    };

    async componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
            return(<Redirect to='/'></Redirect>);
        }else{
            this.setState({ user : user });
        }

        if(user.email != 'admin@admin.com'){
            this.setState({ home : true });
        }

        await axios.get(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/admin/getDetails')
        .then(res => {
            this.setState({ admin : res.data.admin, isLoaded : true });
        })
        .catch(error => {
            console.log(error);
        });

    }

    submit = async () => {
        if(!this.state.fee){
            alert("Please enter updated fee !");
            return;
        }

        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/admin/updateFee',{
                fee : this.state.fee
            })
        .then(res => {
            alert("Fees updates !!");
        })
        .catch(error => {
            console.log(error);
        });
    }


    render() {
        return (
            <div className='App'>
                <Navigation />

                <p className="home-header-text">Admin Panel !</p>

                {this.state.isLoaded ?
                <div>
                    <div className="myAppointments">
                        <p>Accounts registered: {this.state.admin.userCount}</p>
                        <p>Online Booking Count: {this.state.admin.paymentCount}</p>
                        <p>Total Booking: {this.state.admin.totalBookingCount}</p>
                        <p>Doctos's Id Count: {this.state.admin.doctorCount}</p>
                        <p>Book-Green-Slot Fees: Rs. {this.state.admin.fee}</p>
                    </div>

                    <br />

                    <FormGroup>
                        <FormControl
                            type = 'text'
                            placeholder='Update Book-Green-Slot Fees (in rupees)'
                            value={this.state.fee}
                            onChange={(event) => this.setState({ fee: event.target.value }) }
                            className="clinicDetails booking-input"
                        />
                    </FormGroup>

                    <div align='center'>
                        <Button className = 'button-submit' onClick={this.submit}>Update</Button>
                    </div>
                </div>
                :
                <p className="home-header-text">Loading .... </p>}

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
                {this.state.home ? <Redirect to='/HomeDoctor'></Redirect> : ''}
            </div>
        );
    }
}

export default PreviousBooking;
