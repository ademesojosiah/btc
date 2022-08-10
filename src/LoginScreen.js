import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import './LoginScreen.css';
import LoginTab from './LoginTab'

const LoginScreen = () => {
  return (
    <>
    <Nav />
    <div className='loginScreen'>
        <LoginTab />
    </div>
    <Footer />
    </>
  )
}

export default LoginScreen
