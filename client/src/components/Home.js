import React,{ Component } from 'react';
// import logo from '../assets/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const localStorage = require('localStorage');
const axios = require('axios');

class Home extends Component {
    state = {
        user : null,
        logout : false
    };

    async componentDidMount() {
        await axios.get(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/patient/getAllDoctors'
            )
        .then(res => {
            console.log(res.data.Doctors);
            this.setState({ doctors : res.data.Doctors });
        })
        .catch(error => {
            console.log(error);
        });

        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            this.setState({ user : user });
        }
    }

    book = () => {
    }

    
    render() {

        let doctors;
        if(this.state.doctors){
            doctors = this.state.doctors.map((Doctor) => {
                // console.log(Task.endTime);
            return (
                <div className="card">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
                    <div className="container">
                        <h2>{Doctor.name}</h2>
                        <h4>Address - {Doctor.address}</h4>
                        <p>Charge - Rs. {Doctor.cash}</p>
                        <Button className="button-update" onClick={() => this.props.navigation.navigate('/ClinicDetails')}>Book Now</Button>
                    </div>
                </div>
            );
            });
        }

        return (
            <div className='App'>
                <Navigation />

                <div className="home">
                    Welcome to BookGreenSlot, {this.state.user ? <div className="home-line"> {this.state.user.name}</div> : ''}
                    <br /><br />
                    <div>
                        Email - {this.state.user ? <div className="home-line"> {this.state.user.email}</div> : ''}
                        <br />
                        <Button className="button-update"><Link to='/updateName'>Update Username</Link></Button>
                        <Button className="button-update" onClick={this.viewTask}><Link to='/updatePassword'>Update Password</Link></Button>
                    </div>
                </div>
                <br />
                <h1>Doctors List</h1>

                {doctors}

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        );
    }
}

export default Home;