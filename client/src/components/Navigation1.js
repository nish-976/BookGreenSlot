import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Navigation1 extends Component {
    state = {
        redirect : false
    };

    componentDidMount() {
        // let user = JSON.parse(localStorage.getItem('user'))
        // if(user){
        //     this.setState({ redirect : true });
        // }
    }

    render() {
        return (

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <span className="navbar-brand"><Link to="/">Book Green Slot</Link></span>
    </div>
    <ul className="nav navbar-nav navbar-right">
    <li><a href="/SignIn"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>


       /*
            <div className='navbar'>
                    <span className="title">Book Green Slot</span>

                <Link to='/Login' className="button-vote"><span>LOGIN</span></Link>
                <span>|</span>
                <Link to='/SignIn' className="button-vote"><span>SIGN UP</span></Link>
            </div>    */
        )
    }
};

export default Navigation1;
