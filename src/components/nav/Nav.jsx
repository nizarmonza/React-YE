import React, { useState } from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage2Fill} from 'react-icons/ri'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillBook /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Fill /></a>
    </nav>
  )
}

export default Nav