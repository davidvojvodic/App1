import React from 'react';
import './feature.css';

// konstanta Feature kera ma props title in text, keriva se dodata v WhatAplikacija1.jsx
const Feature = ({ title, text }) => {
  return (
    <div className='apli1__features-container__feature'>
      <div className='apli1__features-container__feature-title'>
        {/* Prazen div za oblikovanje črte nad naslovi */}
        <div />
        <h1>{title}</h1>
      </div>
      <div className='apli1__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature;