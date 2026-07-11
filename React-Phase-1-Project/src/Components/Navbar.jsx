import React from 'react'
import "../CSS/Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title'>
        <h1>Tech Store</h1>
      </div>
      <div className='list'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='btn'>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
