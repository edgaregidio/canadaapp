import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../../assets/logo.png'

import './styles.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        {/* <div className="hamburger" onClick={handleClick}>
          {click ? <p>oi</p> : <p>oi2</p>}
        </div> */}
        <ul className={'nav-menu'}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="salgado"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Salgado
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="empadao"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Empadão
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="paes"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Pães
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="ovosmexidos"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Ovos Mexidos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="mistos"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Mistos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="sanduiches"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Sanduiches
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="tapioca"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Tapioca
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="omeletes"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Omeletes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="adicionais"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Adicionais
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="cafe"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Café
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="leites"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Leites
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="sucos"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Sucos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="cremes"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={closeMenu}
            >
              Cremes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="agua"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={closeMenu}
            >
              Água
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="refrigerantes"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={closeMenu}
            >
              Refrigerantes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="energetico"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={closeMenu}
            >
              Energético
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
