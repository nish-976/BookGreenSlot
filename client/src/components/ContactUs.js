import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation1 from './Navigation1';

class ContactUs extends Component{
    state = {
        redirect : false
    };

    componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState({ redirect : true });
        }
    }


    render(){
        // console.log('this.state', this.state);
        return(
                <div>
                  <Navigation1 />
                    <span>Jai Shree Ganesh !</span>
                </div>



            );
        }
    };
    
    export default ContactUs;