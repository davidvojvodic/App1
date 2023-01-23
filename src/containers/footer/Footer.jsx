import React from 'react';
import './footer.css';
import aplik1 from '../../assets/aplikacija1test.png'

const Footer = () => {
  return (
    <div className='apli1__footer section__padding'>

      {/* Velki naslov z gradient texton */}
      <div className='apli1__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='apli1__footer-btn'>
        <p>Request Early Access</p>
      </div>

      {/* Section z linki pa logojon */}
      <div className='apli1__footer-links'>
        <div className='apli1__footer-links_logo'>
          <img src={aplik1} alt="logo" />
          <p>Daneta Šumenjaka 2a, 9000 Murska Sobota, <br /><br /> All Rights Reserved</p>
        </div>
        <div className='apli1__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='apli1__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='apli1__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Daneta Šumenjaka 2a, 9000 Murska Sobota</p>
          <p>031 726 117</p>
          <p>davidvojvodic1@gmail.com</p>
        </div>
      </div>

      {/* Copyright section */}
      <div className='apli1__footer-copyright'>
        <p>© 2022 Aplikacija1. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer