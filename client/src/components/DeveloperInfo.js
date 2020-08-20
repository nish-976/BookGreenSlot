import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation1 from './Navigation1';
import Footer from './Footer';
import nidhii from '../assets/nidhii.jpg';
import masoom from '../assets/masoom.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';

class DeveloperInfo extends Component{
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
                    <h1 className="devInfo"> Developers Information </h1>
                    <div className="row">
              <div className="column1">
              <div className="card1">
                <img className="devImage"src={masoom} />
                <h1>Masoom Raj</h1>
                <p class="title">Backend Developer</p>
                <p>Pre Final Year (CSE), IIT Jodhpur</p>
                <a href="mailto:raj.8@iitj.ac.in"><img className="mediaHandles" src={gmail} /></a>
                <a href="https://github.com/maasoomraj"><img className="mediaHandles" src={github} /></a>
                <a href="https://www.linkedin.com/in/masoom-raj-b4857517b/"><img className="mediaHandles" src={linkedin} /></a>
              </div>
              </div>
              <div className="column1">
              <div className="card2">
                <img className="devImage"src={nidhii} />
                <h1>Nidhi Ranjan</h1>
                <p class="title">Frontend Developer</p>
                <p>Sophomore Year (CSE), NIT Patna</p>
                <a href="mailto:nidhir.ug19.cs@nitp.ac.in"><img className="mediaHandles" src={gmail} /></a>
                <a href="https://github.com/Nidhiranjan2019"><img className="mediaHandles" src={github} /></a>
                <a href="https://www.linkedin.com/in/nidhi-ranjan-b255321a0/"><img className="mediaHandles" src={linkedin} /></a>
              </div> 
              </div>            
              </div> 
            <Footer />  
          </div>



            );
        }
    };
    
    export default DeveloperInfo;