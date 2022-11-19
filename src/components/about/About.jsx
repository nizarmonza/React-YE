import React from 'react'
import './about.css'
import ME from '../../assets/bareng.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon icon'/> 
            <h5 className='text'>Experience</h5>
            <small className='text'>2+ Years</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon icon'/> 
            <h5 className='text'>Community</h5>
            <small className='text'>1000 Communities</small>
          </article>
          
          <article className='about__card'>
            <AiFillFolderOpen className='about__icon icon'/> 
            <h5 className='text'></h5>
            <small className='text'>2+ Years</small>
          </article>
          </div>
          <div className='about__content'>
          <p>Youthexport was founded in 2021, and we have accomplished so much over the year. To create a world where export is no longer a problem and can be done effortlessly by everyone, this has always been our goal.
            Our Founder and CEO Firhan Salim was inspired to start this company by the fidgetiness he experienced in 2021, where he lost a lot of money from a fake supplier, and since that moment he wanted to create a platform, where all the obstacles in this type of business are solved.
            At Youthexport, we encourage the members of our communities to be an expert in their own commodity and we will also help them to reach success in export business.</p>
          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
