import React from 'react'
import { Link } from 'react-router-dom'
import CheckHead from './components/CheckHead'
import './Information.css'

const Information = () => {
  return (
    <div className='Information'>
      <CheckHead />

      <section className='info_main'>
        <div className='info_main_head'>
          <span>Contact Information</span>
          <span>Already have an account? <Link to='/login'>Log in</Link></span>
        </div>

        <form className='info_form'>
          <input type="email" required placeholder='Email' />
          <input className='input-checkbox' id='check' aria-label='' type="checkbox" value={'1'} />
          <label for="check">Email me with news and offers</label>


          <section className=''></section>
        </form>
      </section>
    </div>
  )
}

export default Information