import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import SignUp from './SignUp';
import './SignUpScreen.css';


const SignUpScreen = () => {
  return (
    <div className='signupScreen'>
        <Nav />
        <SignUp />
        <Footer />

      
    </div>
  )
}

export default SignUpScreen
