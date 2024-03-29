import React from 'react';
import './SignUp.css'
import { Link } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';

const SignUp = () => {
  return (
    <>
    <Nav />

    <div className='signup'>
                <h1>Create Account</h1>
        <form className='signup_form' action="">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="Email" placeholder='Email' />
            <input type="Password" placeholder='Password' />
            <button>CREATE</button>
        </form>

        <Link to='/login'>Already have an account? Sign in</Link>
        {/* <div className='signupTab_lower_div'>
            <p><a href="/">Return to Store</a></p>
            <p className='signup_or'>or log in with</p>
            <div className='signup_signin_options'>
                <button>Facebook</button>
                <button>Google</button>
                <button>Twitter</button>
                <button>LinkedIn</button>
                <button>Amazon</button>
            </div>
        </div> */}
    </div>
    <Footer />
    </>
  )
}

export default SignUp
