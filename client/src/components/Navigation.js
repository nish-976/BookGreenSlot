import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const localStorage = require('localStorage');

let category;
class Navigation extends Component {
    state = {
        logout : false,
        user : null
    };


    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            category = user.category;
            this.setState({ user : user });
        }
    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.setState({ logout : true });
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <span className="navbar-brand">Book Green Slot</span>
                    </div>

                    <ul className="nav navbar-nav navbar-right">
                        {category == 'Doctor' ?
                        <li><a href="/HomeDoctor"><span className="glyphicon glyphicon-home"></span>Home</a></li> :
                        <li><a href="/Home"><span className="glyphicon glyphicon-home"></span> Home</a></li>}
                        {category == 'Doctor' && <li><a href="/ClinicDetails"><span className="glyphicon glyphicon-tasks"></span> Clinic Details</a></li>}
                        <li><a onClick={this.logout} ><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </ul>
                </div>

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </nav>
        );
    }
}

export default Navigation;
