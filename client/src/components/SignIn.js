import React, {Component} from 'react';
import {FormGroup, FormControl , Button , Form} from 'react-bootstrap';
// import Navigation from './common/Navigation';
const axios = require('axios');
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation1 from './Navigation1';
import Footer from './Footer';
import girlphone from '../assets/girlphone.jpg';
import user from '../assets/user.png';

class SignIn extends Component {
    state = {
        name : '',
        email : '',
        password : '',
        cpassword : '',
        category : 'Patient',
        redirect : false,
        loading : false,
        error : false
    };

    updateName = event => {
        this.setState({name : event.target.value });
    }

    updateEmail = event => {
        this.setState({email : event.target.value });
    }

    updatePassword = event => {
        this.setState({password : event.target.value });
    }

    updateCPassword = event => {
        this.setState({cpassword : event.target.value });
    }

    updateCategory = event => {
        // console.log(event.target.value);
        this.setState({ category : event.target.value });
    }

    signupRequest = async () => {

        console.log(this.state.category)

        if(this.state.password !== this.state.cpassword){
            this.setState({ loading : false , error : true });
            return;
        }

        this.setState({ error : false, loading : true });

        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/user/register' , {
                name : this.state.name,
                email : this.state.email,
                password : this.state.password,
                category : this.state.category
            })
            .then(res => {
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',JSON.stringify(res.data.user));
                this.setState({ loading : false , redirect : true });
            })
            .catch(error => {
                this.setState({ loading : false , error : true });
            });
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState({ redirect : true });
        }
    }

    render(){
        return(
            <div>
            <Navigation1 />
        <div className="signin">
            <div className="signInRootLeft" >
                <img className="leftImage" src={girlphone} />
            </div>
            <div className="signInRootRight">
            
                <div className='AddTask'>
                    <br />
                    <img className="aboveLogin" src={user} />
                    <p className="createAccountText">Create Account </p>

                    <FormGroup>
                        <FormControl
                            placeholder='Name'
                            value={this.state.name} 
                            onChange={this.updateName}
                            className="inputBox"
                        /> 
                    </FormGroup>
                    <FormGroup>
                        <FormControl 
                            type="email"
                            placeholder='Email Address'
                            value={this.state.email} 
                            onChange={this.updateEmail}
                            className="inputBox"
                        /> 
                    </FormGroup>
                    <FormGroup>
                        <FormControl 
                            type="password"
                            placeholder='Password'
                            value={this.state.password} 
                            onChange={this.updatePassword}
                            className="inputBox"
                        /> 
                    </FormGroup>
                    <FormGroup className="lastInputBox">
                        <FormControl 
                            type="password"
                            placeholder='Confirm Password'
                            value={this.state.cpassword} 
                            onChange={this.updateCPassword}
                            className="inputBox"
                        /> 
                    </FormGroup>

                    <label className="label">You are a :  </label>
                    <select onChange={this.updateCategory} value={this.state.category} className="dropdown">
                        <option selected value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                    <div align='center'>
                        <Button className = 'button' onClick={this.signupRequest}>Sign Up</Button>
                    </div>

                    {this.state.loading ? <div className="flashMessage">Wait .... We are processing ..</div> : ''}
                    {this.state.error ? <div className="flashMessage">Error !! Please Retry !!</div> : ''}
                    {this.state.redirect ? <Redirect to='/home'></Redirect> : '' }
                </div>

                </div>
        </div>
                <Footer />

            </div>
        
        );
    }
};

export default SignIn;