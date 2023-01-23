import React from 'react';
import './brand.css';

/* import iz imports.js v keron so vse slike importane pa te exportane */
import { google, slack, atlassian, dropbox, shopify } from './imports'

const Brand = () => {
  return (
    /* Del z brand slikami */
    <div className='apli1__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand