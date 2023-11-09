/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav style={{backgroundColor: '#3D3D3D', color: 'white', display: 'flex'}}>
        <h1 style={{margin: '1em'}}>Headline Report</h1>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'right', alignItems: 'right' }} className='nav-btns'>
          <li style={{  margin: '2em' }}>
            <a href="/">Home</a>
          </li>
          <li style={{  margin: '2em' }}>
            <a href="/Login">Log In</a>
          </li>
          <li style={{  margin: '2em' }}>
            Profile
          </li>
          <li style={{  margin: '2em' }}>
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;