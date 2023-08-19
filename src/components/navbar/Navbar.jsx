import React from 'react';
import './Navbar.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsLaptop, BsMessenger} from 'react-icons/bs'
import {BsLaptopFill} from 'react-icons/bs'
import { useState } from 'react';

const Navbar =()=>
{
    const [activeNav,setActiveNav] = useState('#');
    return (
        <nav id='nav-menu' >
      <a href='#' onClick={()=>setActiveNav('#')} id='home'  className={activeNav ==='#' ? 'active': 'nav-link home'}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')}  className={activeNav ==='#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')}  className={activeNav ==='#experience' ? 'active': 'nav-link skills'}><BiBook/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')}  className={activeNav ==='#portfolio' ? 'active': 'nav-link projects'}><BsLaptop/></a>
      <a href='#contact'  onClick={()=>setActiveNav('#contact')}  className={activeNav ==='#contact' ? 'active': 'nav-link contact'}><BsMessenger/></a>
        </nav>
    )
}
export default Navbar;