import React from 'react'
import './portofolio.css'
const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>Recent Work</h5>
      <h2>Events</h2>

      <div className='container portofolio__container'>
        <article className='portofolio__item'>
          <div className="portofolio__item-image"></div>
          <h3>This is a portofoliof item title</h3>
          <a href='' className='btn' target='_blank'>Github</a>
        </article>

      </div>
    </section>
  )
}

export default Portofolio