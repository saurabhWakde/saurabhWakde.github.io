import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/plantorder.png';
import Img3 from '../../assets/plantorder2.png';
import Img4 from '../../assets/plantorder3.png';
import Img5 from '../../assets/plantorder5.png';
import Img6 from '../../assets/catalog.png';
import Img8 from '../../assets/catalog2.png';
import Img9 from '../../assets/catalog3.png';
import Img10 from '../../assets/catalog5.png';

import Img11 from '../../assets/netmeds.png';
import Img12 from '../../assets/netmeds2.png';
import Img13 from '../../assets/netmeds3.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper";

const data = [
  {
    id: 1,
    image: Img1,
    title: 'Plant Order Application',
    Github: 'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo: 'https://saurabhwakde.github.io/-Plant_Order_Application/',
    description: 'An innovative plant order application that allows users to explore and purchase a wide variety of plants. The application provides an immersive experience with stunning visuals and user-friendly features, making plant shopping a delight.',
  },
  {
    id: 2,
    image: Img3,
    title: 'Plant Categories',
    Github: 'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo: 'https://saurabhwakde.github.io/-Plant_Order_Application/',
    description: 'Efficiently categorized plant listings that enable users to browse through different plant categories, simplifying the search process and enhancing the overall user experience.',
  },
  {
    id: 4,
    image: Img5,
    title: 'Checkout Process',
    Github: 'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo: 'https://saurabhwakde.github.io/-Plant_Order_Application/',
    description: 'A seamless and secure checkout process that guides users through the final steps of their plant order. The process ensures a smooth transaction and provides transparency at every stage.',
  },
  {
    id: 5,
    image: Img6,
    title: 'Plant Filters',
    Github: 'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo: 'https://saurabhwakde.github.io/-Plant_Order_Application/',
    description: 'Advanced filtering options that empower users to refine their plant search based on various criteria, such as size, price range, sunlight requirements, and more. This feature assists users in finding their perfect plants effortlessly.',
  },
  {
    id: 7,
    image: Img9,
    title: 'Plant Details',
    Github: 'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo: 'https://saurabhwakde.github.io/-Plant_Order_Application/',
    description: 'Comprehensive plant details pages that provide in-depth information about each plant, including descriptions, care instructions, growth habits, and customer reviews. Users can make informed decisions and gain confidence in their plant selections.',
  },
  {
    id: 8,
    image: Img10,
    title: 'User Signup',
    Github: 'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo: 'https://saurabhwakde.github.io/-Plant_Order_Application/',
    description: 'A seamless signup process that allows users to create their accounts and access personalized features such as saved plant lists, order history, and exclusive offers. Join our community and embark on your plant journey!',
  },
  {
    id: 9,
    image: Img11,
    title: 'Home Page',
    Github: 'https://github.com/saurabhWakde/Netmeds/tree/main',
    Demo: 'https://fantastic-khapse-deda88.netlify.app/',
    description: 'The main landing page of our website, showcasing featured products, promotions, and personalized recommendations.',
  },
  {
    id: 10,
    image: Img12,
    title: 'Trending Deals',
    Github: 'https://github.com/saurabhWakde/Netmeds/tree/main',
    Demo: 'https://fantastic-khapse-deda88.netlify.app/',
    description: 'A dedicated section displaying the hottest deals and discounts on our products, enticing users to make a purchase.',
  },
  {
    id: 11,
    image: Img13,
    title: 'Payments',
    Github: 'https://github.com/saurabhWakde/Netmeds/tree/main',
    Demo: 'https://fantastic-khapse-deda88.netlify.app/',
    description: 'A secure and seamless payment process that allows users to complete their transactions with various payment methods, ensuring a smooth checkout experience.',
  },
  // Remaining objects
];



const Portfolio =()=>
 {
 
  return (
  <section id='portfolio'>
  <h5> My Recent Work</h5>
  <h2>Projects</h2>

<div className='container portfolio_container ' >
{
  data.map(({id ,image ,title ,Github ,Demo,  description})=>
  {
    return(
      <Swiper className= 'mySwipe container  portfolio_item' pagination={{clickable:true}} modules={[Pagination]} spaceBetween={40} slidesPerView={1}>
      <SwiperSlide key={id} className='portfolio_item'>
<div className='portfolio_item-image'>
<img src={image} alt={title}/>
</div>
<h3>{title}</h3>
<div className='portfolio_item-cta'>

<a href={Github} className='btn' target='_blank'>Github</a>
<a href={Demo} className='btn btn-primary' target='_blank'>LiveDemo</a>
</div>

</SwiperSlide>
<SwiperSlide key={id} className='portfolio_item'>
<h3 style={{textAlign:"center"}}>Description</h3>
<small className='portfolio_review' >{description}
</small>

</SwiperSlide>
</Swiper>
    )
  })
}


</div>

  </section>
  )
}
export default Portfolio;
