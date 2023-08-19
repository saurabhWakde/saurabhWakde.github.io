import React from 'react'
import './Services.css'
import {BsCheckLg} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const Services = () => 
{
  return (
   <section id='services'>
   <h5>What I Offer</h5>
   <h2  id="skills" className='skills-card'>Skills</h2>
   <div className='container services_container'>
   <article className='service'>

   <div className='service_head'>
   <h3>Learning and Upskilling</h3>
   </div>
   <ul className='service_list'>
   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>Embrace lifelong learning.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>Explore  new  frameworks<br></br>  regularly.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>Stay current with technology.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>Adapt to industry changes.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>Continuous professional development.</p>
   </li>

   
   </ul>
   </article>

   <article className='service'>

   <div className='service_head'>
   <h3>Web Developement</h3>
   </div>
   <ul className='service_list'>
   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>User-friendly website development.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>Website design and development.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>E-commerce website creation.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>Front-end and back-end development.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon  skills-card-img'/>
   <p className='skills-card-name'>UI/UX design and implementation.</p>
   </li>

   
   </ul>
   </article>

   <article className='service'>

   <div className='service_head skills-card'>
   <h3>Soft Skills</h3>
   </div>
   <ul className='service_list'>
   <li>
   <BsCheckLg className='service_list-icon skills-card-img'/>
   <p className='skills-card-name'>Effective communication and collaboration.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon skills-card-img'/>
   <p className='skills-card-name'>Problem-solving.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon skills-card-img'/>
   <p className='skills-card-name'>Attention to Detail.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon skills-card-img'/>
   <p className='skills-card-name'>Active listening and understanding.</p>
   </li>

   <li>
   <BsCheckLg className='service_list-icon skills-card-img'/>
   <p>Professionalism and work ethics.</p>
   </li>
   <li>
   <BsCheckLg className='service_list-icon '/>
   <p>Teamwork and collaboration skills.</p>
   </li>

   
   </ul>
   </article>

   </div>
   </section>
  )
}

export default Services;
