import React, {Component} from 'react';
import {FormGroup, FormControl , Button} from 'react-bootstrap';
const axios = require('axios');
const localStorage = require('localStorage');
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation1 from './Navigation1';
import Footer from './Footer';
import girlphone from '../assets/girlphone.jpg';
import user from '../assets/user.png';
import doc2 from '../assets/doc2.jpg';

class Login extends Component {
    state = {
        email : '',
        password : '',
        redirect : 0,
        loading : false,
        error : false
    };

    updateEmail = event => {
        this.setState({email : event.target.value });
    }

    updatePassword = event => {
        this.setState({password : event.target.value });
    }

    loginRequest = async () => {
        this.setState({ error : false, loading : true });

        await axios.post(window.location.protocol
            + '//'
            + window.location.hostname
            + ":"
            + window.location.port
            + '/api/user/login' , {
                email : this.state.email,
                password : this.state.password
            })
            .then(res => {
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',JSON.stringify(res.data.user));
                if(res.data.user.category == 'Patient'){
                    this.setState({ loading : false , redirect : 1 });
                }else{
                    this.setState({ loading : false , redirect : 2 });
                }
            })
            .catch(error => {
                this.setState({ loading : false , error : true });
            });
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            if(user.category == 'Patient'){
                this.setState({ redirect : 1 });
            }else{
                this.setState({ redirect : 2 });
            }
        }
    }

    render(){
        // console.log('this.state', this.state);
        return(
            <div>

                <Navigation1 />
                <div className="login">
                <div className="signInRootLeft" >
                <img className="leftImage" src={doc2} />
            </div>
            <div className="signInRootRight">
                <div className='AddTask'>
                    <br />
                    <img className="aboveLogin" src={user} />
                    <p className="createAccountText">Login Form </p>

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

                    <div align='center'>
                        <Button className = 'button' onClick={this.loginRequest}>Login</Button>
                    </div>

                    {this.state.loading ? <div className="flashMessage">Wait .... We are processing ..</div> : ''}
                    {this.state.error ? <div className="flashMessage">Error !! Email or Password is not correct !!</div> : ''}
                    {this.state.redirect == 1 ? <Redirect to='/home'></Redirect> : '' }
                    {this.state.redirect == 2 ? <Redirect to='/HomeDoctor'></Redirect> : '' }
                </div>


                </div>
            </div>
                <Footer />
            </div>
        );
    }
};

export default Login;
