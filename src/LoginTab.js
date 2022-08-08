import React from 'react';
import './LoginTab.css'

const LoginTab = () => {
  return (
    <div className='loginTab'>
        <h1>Login</h1>
        <form className='loginTab_form' action="">
            <input type="Email" placeholder='Email' />
            <input type="Password" placeholder='Password' />
            <p><a href="/">Forget your password ?</a></p>
            <button>SIGN IN</button>
            <p><a href="/">Create account</a></p>
        </form>
        <div className='loginTab_lower_div'>
            <p><a href="/">Return to Store</a></p>
            <p className='login_or'>or sign in with</p>
            <div className='loginTab_signin_options'>
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

export default LoginTab
