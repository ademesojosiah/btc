import React from 'react'
import './Box.css'
import Card from './Card'


const Box = ({header, elements, }) => {
  return (
    <div className='box'>
      <div className='box-head'>
        <header className='box-header'>Header</header>
        <h3 className='box-htext'>View all</h3>
      </div>

      <div className='box-card-con'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      
    </div>
  )
}

export default Box