import React,{ Component } from 'react';
// import logo from '../assets/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const localStorage = require('localStorage');
const axios = require('axios');
import doctorImage from '../assets/doctor.png'

class Home extends Component {
    state = {
        user : null,
        logout : false,
        isLoaded : false
    };

    async componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            this.setState({ user : user });
        }

        await axios.get(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/patient/getAllDoctors'
            )
        .then(res => {
            console.log(res.data.Doctors);
            this.setState({ doctors : res.data.Doctors, isLoaded : true });
        })
        .catch(error => {
            console.log(error);
        });

    }


    render() {

        let doctors;
        if(this.state.doctors){
            doctors = this.state.doctors.map((Doctor) => {
                // console.log(Task.endTime);
            return (
                <div className="card-doctorList">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
                    <img src={doctorImage} width="100%" height="55%" />
                    <div className="card-doctorList-div">
                        <div className="div-flex-center">
                            <p className="doctor-name">{Doctor.name}</p>
                            <p className="hr" />
                        </div>
                        <div>
                            <p className="doctor-address"><b>Address :</b> {Doctor.address.substring(0,40)} {Doctor.address.length > 40 && '...'}</p>
                        </div>
                        <div>
                            <p  className="doctor-address"><b>Charge :</b> Rs. {Doctor.cash}</p>
                        </div>
                            <Link to={{
                                pathname: '/Booking',
                                details: Doctor
                            }}
                            style={{textDecoration : 'none'}}>
                                <div className="bookNow-button">
                                        <p className="bookNow-button-text">Book Now</p>
                                </div>
                            </Link>
                    </div>
                    {/* <h2>{Doctor.name}</h2>
                    <h4>Address - {Doctor.address}</h4>
                    <p>Charge - Rs. {Doctor.cash}</p>
                    <Link to={{
                        pathname: '/Booking',
                        details: Doctor
                    }}>
                        <Button className="button-update">Book Now</Button>
                    </Link> */}
                </div>
            );
            });
        }

        return (
            <div className='App'>
                <Navigation />

                {/* <div className="home">
                    Welcome to BookGreenSlot, {this.state.user ? <div className="home-line"> {this.state.user.name}</div> : ''}
                    <br /><br />
                    <div>
                        Email - {this.state.user ? <div className="home-line"> {this.state.user.email}</div> : ''}
                        <br />
                        <Button className="button-update"><Link to='/updateName'>Update Username</Link></Button>
                        <Button className="button-update" onClick={this.viewTask}><Link to='/updatePassword'>Update Password</Link></Button>
                    </div>
                </div> */}

                <p className="home-header-text">Make an Appointment !</p>

                {this.state.isLoaded ?
                <div className="grid-doctorList">
                    {doctors}
                </div>
                :
                <p className="home-header-text">Loading .... </p>}

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        );
    }
}

export default Home;
