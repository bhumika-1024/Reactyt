import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <h3>PUMA</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Products</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
