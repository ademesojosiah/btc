import React from 'react';
import './LoginTab.css'
import { Link } from "react-router-dom";

const LoginTab = () => {
  return (
    <div className='loginTab'>
        <h1>Login</h1>
        <p>Enter your email and password</p>
        <form className='loginTab_form' action="">
            <input type="Email" placeholder='Email' />
            <input type="Password" placeholder='Password' />
            <button>SIGN IN</button>
            <p><Link to="/">Forget your password ?</Link></p>
            <p><Link to="/signup">Create account</Link></p>
        </form>
        {/* <div className='loginTab_lower_div'>
            <p><a href="/">Return to Store</a></p>
            <p className='login_or'>or sign in with</p>
            <div className='loginTab_signin_options'>
                <button>Facebook</button>
                <button>Google</button>
                <button>Twitter</button>
                <button>LinkedIn</button>
                <button>Amazon</button>
            </div>
        </div> */}
    </div>
  )
}

export default LoginTab
