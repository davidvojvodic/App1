import React from 'react';

// Importanje komponente Article
import { Article } from '../../components';

// Importanje slik iz imports.js v keri so vse slike importane pa exportane
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js'
import './blog.css';

const Blog = () => {
  return (
    <div className='apli1__blog section__padding' id='blog'>
      {/* Velki naslov za blog z gradient texton */}
      <div className='apli1__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>

      {/* Artikli iz porpsov, groupA je velki article */}
      <div className='apli1__blog-container'>
        <div className='apli1__blog-container_groupA'>
          <Article imgUrl={blog01} date="28 Nov, 2022" title="Aplikacija1 and Open  AI is the future. Let us exlore how it is?" />
        </div>

        {/* Artikli iz propsov, groupB so menši artikli */}
        <div className='apli1__blog-container_groupB'>
        <Article imgUrl={blog02} date="28 Nov, 2022" title="Aplikacija1 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="28 Nov, 2022" title="Aplikacija1 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="28 Nov, 2022" title="Aplikacija1 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="28 Nov, 2022" title="Aplikacija1 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog