import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './Navigation1';
import Footer from './Footer'
import doctor from '../assets/topimg.png'
const axios = require('axios');
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

    Copyright1 () {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright1 © '}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

     useStyles = makeStyles((theme) => {
        return ({
            root: {
                height: '100vh',
            },
            image: {
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            },
            paper: {
                margin: theme.spacing(8, 4),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            avatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main,
            },
            form: {
                width: '100%',
                marginTop: theme.spacing(1),
            },
            submit: {
                margin: theme.spacing(3, 0, 2),
            },
            text1: {
                fontSize: 20
            }
        });
    });
      
      export default function  SignInSide() {
        const classes = useStyles();

        return (
            <div>
                <Navigation />
            <Grid container component="main" className={classes.root}>
              <CssBaseline />
              <Grid item xs={false} sm={4} md={7} className={classes.image} />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <form className={classes.form} noValidate>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                      value={this.state.name} 
                      onChange={this.updateName}
                      autoFocus
                    />

                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={this.state.email} 
                      onChange={this.updateEmail}
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="password"
                      value={this.state.password} 
                      onChange={this.updatePassword}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="confirmpassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmpassword"
                      autoComplete="confirmpassword"
                      value={this.state.cpassword} 
                      onChange={this.updateCPassword}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      <p className={classes.text1}>Sign In</p>
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Box mt={5}>
                      <Copyright1 />
                    </Box>
                  </form>
                </div>
              </Grid>
            </Grid>
            <Footer />
            </div>
          );
        }}
