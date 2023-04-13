import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'

const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  // change nav color when scrolling (note: 90 is side of header so can change it)
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  // close menu on click
  const closeMenu = () => setClick(false)

  return (
    <div className={color ? 'header header-bg ' : 'header'}>
      {/* header-bg when scrolling, if not just header ^ */}
      <nav className="navbar">
        <a href="/" className="logo">
          {/* <img src={logo} alt="logo" /> */}
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" onClick={closeMenu}>
              Add Hikes
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#demo" onClick={closeMenu}>
              Demo
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
