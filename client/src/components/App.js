import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class App extends Component {
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
                <div className='navbar'>
                        <div className="title">Book Green Slot</div>
                </div>

                <Link to='/Login' className="button-vote">LOGIN</Link>
                <Link to='/SignIn' className="button-vote">SIGN UP</Link>

                <div className="home">
                    Welcome to bookgreenslot. From experimental passion projects to native doctors booking for patients, We've had the opportunity to heal and recover a a number of patient's. We thrive on creative challenges and enjoy building strong relationships along the way. Explore Our work below, and contact me directly to learn more.
                </div>

                {this.state.redirect ? <Redirect to='/home'></Redirect> : '' }
            </div>
        )
    }
};

export default App;