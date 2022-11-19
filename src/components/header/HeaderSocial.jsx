import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'


function HeaderSocial() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/company/youth-export/mycompany/' target='_blank'><BsLinkedin /></a>
      <a href='https://www.instagram.com/youthexport/?hl=id' target='_blank'><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocial
