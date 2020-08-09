import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import {FormGroup, FormControl , Button} from 'react-bootstrap';

class Booking extends Component {
    state = {
        user : null,
        logout : false,
        details : {}
    };

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            this.setState({ logout : true });
        }else{
            this.setState({ user : user });
        }

        let details = this.props.location.details;
        if(!details){
            this.setState({ logout : true });
        }else{
            this.setState({ details : details });
        }
    }

    render() {
        let slotArray ;
        if(this.state.details.timeSlot){
            slotArray = JSON.parse(this.state.details.timeSlot);
            console.log(slotArray);
            let slots;
            slots = slotArray.map((timeItem) => {
                return (
                    <span>
                    {/* {
                    this.state.breakSlot.indexOf(timeItem) == -1 ? */}
                        <Button className="admin-buttons-start-s">{timeItem}</Button>
                    {/* :   <Button className="admin-buttons-start-e" onClick={() => this.removeFromBreakSlot(timeItem)}>{timeItem}</Button>
                    } */}
                    </span>
                );
            })
        }

        return (
            <div>
                <Navigation />

                <div>
                    <h1>Select a time slot and Book !</h1>
                </div>

                <div>
                    {slotArray}
                </div>

                {this.state.logout ? <Redirect to='/'></Redirect> : ''}
            </div>
        )
    }
};

export default Booking;
