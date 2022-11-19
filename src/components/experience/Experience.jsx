import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Our Services</h5>
      <h2>Products</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Apps Features</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Investor Platform</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Supplier & Buyer Data</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>L/C Youth Export Bank</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Educational Video</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Live Consultation Chat</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Member Personal Chat</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Community for each Commodity</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Youth Export Event</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Export Questionnaire</h4>
            </article>
          </div>
        </div>

        {/*end of frontend*/}

        <div className="experience__backend">
          <h3>Vision and Mission</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Investor Platform</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Supplier & Buyer Data</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience