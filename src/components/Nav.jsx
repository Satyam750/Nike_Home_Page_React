import React from 'react'

const Nav = () => {
  return (
    <div>
       <nav className='container'>
      <div className='logo'>
        <img src="./public/brand_logo.png" alt="logo" />
      </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>logo</button>
      </nav>
    </div>
  )
}

export default Nav
