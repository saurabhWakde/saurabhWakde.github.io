import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} target='_blank'  download={CV} className='btn nav-link resume'  id='resume-button-2 resume-button-1 resume-link-1 resume-link-2'>Download CV</a>
      <a href='#contact' className='btn btn-primary'> Let's Talk</a>
    </div>
  )
}

export default CTA
