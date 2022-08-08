import React from 'react';
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='signup'>
                <h1>Create Account</h1>
        <form className='signup_form' action="">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="Email" placeholder='Email' />
            <input type="Password" placeholder='Password' />
            <button>CREATE</button>
        </form>
        <div className='signupTab_lower_div'>
            <p><a href="/">Return to Store</a></p>
            <p className='signup_or'>or log in with</p>
            <div className='signup_signin_options'>
                <button>Facebook</button>
                <button>Google</button>
                <button>Twitter</button>
                <button>LinkedIn</button>
                <button>Amazon</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp
