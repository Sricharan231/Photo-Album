import React from 'react'
import "./store.css"
import Navbar from '../Navbar/Navbar'

const Store = () => {
  return (
    <div>
      <Navbar/>
    <div>
        <div className='card'>
        <img src='/images/8.jpg' className='c-img' alt='error in loading'></img>
        <div>
            <h2 className='c-head'>Card Heading</h2>
            <p className='c-des'>Card description</p>
        </div>
        
    </div>
    </div>
    </div>
  )
}

export default Store