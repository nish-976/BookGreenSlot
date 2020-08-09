import React, {Component} from 'react';
import {FormGroup, FormControl , Button , Form} from 'react-bootstrap';
// import Navigation from './common/Navigation';
const axios = require('axios');
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation1 from './Navigation1';
import Footer from './Footer';
// import Navigation from './Navigation';

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

  render (){
    return (
      <div>
        <Navigation1 />
        <div className="signInRootLeft">
          It will Take only 30 seconds to register
        </div>
        
        <div className="signInRootRight">
          Hello
        </div>
        <Footer />
      </div>
    );
  } 
}

export default SignIn;