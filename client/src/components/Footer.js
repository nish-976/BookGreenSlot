import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Footer extends Component {
    state = {
        redirect : false
    };

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState({ redirect : true });
        }
    }
    
    render() {
        return (
            <div>
                Helo I am Footer.
            </div>
        )
    }
};

export default Footer;