import React, { Component } from 'react'
import './Navbar.css'
import logo from './zoom_logo.svg'
export class Navbar extends Component {
  render() {
    return (
      <div>
          
          {/* black one */}
          <div className="nav_black">
            <ul className='nav_black_ul'>
                <li className="nav_black_li"> <a href="/">Support</a> </li>
                <li className="nav_black_li"> <a href="/">000.800.050.2040</a> </li>
                <li className="nav_black_li"> <a href="/">Request a Demo</a> </li>
                <li className="nav_black_li"> <a href="/">Join</a> </li>
                <li ><div className="dropdown">
  <button className="  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Host
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">With Video Off</a></li>
    <li><a className="dropdown-item" href="#">With Video On</a></li>
    <li><a className="dropdown-item" href="#">Screen Share Only</a></li>
  </ul>
</div></li>
                <li className="nav_black_li"> <a href="/">Sign In</a> </li>
            </ul>
          </div>

          {/* zoom nav*/}
          <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Solutions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Plans & Pricing</a>
        </li>
      </ul>
      <button className='btn1'>Contact Sales</button>
      <button className='btn2'>Sign Up Free</button>
    </div>
  </div>
</nav>
<br /><br /><br /><br />
      </div>
    )
  }
}

export default Navbar
