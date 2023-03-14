import React, { Fragment, useState } from 'react';
import {Link, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import Signout from './Signout';
import { Nav, Navbar} from 'react-bootstrap';
import axios from 'axios';
import isAuthenticated from '../pages/SigninPage'

function Appnav ({onSignout}){

    const [loggedin, setLoggedin] = React.useState(null);

  
    React.useEffect(() => {
      if (isAuthenticated){
        setLoggedin(localStorage.getItem('token'))
        console.log(localStorage.getItem('token'))
      }
      else{
      }
    }, []);
    
    const handleSignout = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Token ${token}`
          }
        };
        await axios.post('http://127.0.0.1:8000/accounts/signout/', null, config);
        localStorage.removeItem('token');
      } catch (err) {
        console.error(err);
      }
    };

    const guestLinks = () => (
        <Fragment>
            <li className='nav-item active'>
                <Nav.Link href='/signin'>Login</Nav.Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Nav.Link href='/signup'>Signup</Nav.Link >
            </li>
        </Fragment>
    );
    
    const authLinks = () => (
        <Fragment>
            <li className='nav-item active'>
                <Nav.Link href='/home'>Home</Nav.Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Nav.Link href='/sections/addclient/'>Add a New Client</Nav.Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Nav.Link href='https://blog.securestrux.com/'>SecureStrux News</Nav.Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Nav.Link href='/app' onClick={handleSignout} text="signout">Signout</Nav.Link>
            </li>
        </Fragment>
    );

    const logoutHandler = () => {
        Signout();
    }

    const [redirect, setRedirect] = useState(false);
    
    return(
        <div>
            <Navbar bg="light" expand="lg"> 
            <a className='navbar-brand'>
            <img src="https://cdn.shopify.com/s/files/1/2534/2440/products/istockphoto-1203011520-612x612_b31d7ede-8f0f-4e7f-8dff-ac75febcfc4f_480x480.jpg?v=1657655237" alt="securestruximage" width="60"/> Bar Path Program
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {loggedin ? authLinks() : guestLinks()}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            {redirect ? <Navigate to='/app' /> : <Fragment></Fragment>}
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.loggedin
});

export default Appnav;