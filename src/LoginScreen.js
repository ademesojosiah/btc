import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import './LoginScreen.css';
import LoginTab from './LoginTab'

const LoginScreen = () => {
  return (
    <div className='loginScreen'>
        <Nav />
        <LoginTab />
        <Footer />

      
    </div>
  )
}

export default LoginScreen
