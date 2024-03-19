import React from 'react'
import logo from '../../../public/images/logo.png'
import { navLinks } from '../../utils/Navigations'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <div className='navBox'>
            <div className="logo">
                <img className='image' src={logo} alt="" />
            </div>
            <div className="items">
                <ul className='ordernav'>
                {navLinks.map(nav => (
                    <li className='listmenu ' key={nav.id}>
                     <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
            </div>
            <div className="contacts">
                 <button className='contact'>Contact</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav