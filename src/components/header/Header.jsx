import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ye.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello We Are</h5>
        <h1>Youth Export</h1>
        <h5 className="text-light">From Indoesia To The World</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header