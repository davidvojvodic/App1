import React from 'react';
import './article.css';

// Komponenta Article kera ma props imgUrl, date, title. Komponenta se ponuca v Blog.jsx ge se dodajo propsi
const Article = ( {imgUrl, date, title} ) => {
  return (
    <div className='apli1__blog-container_article'>
      
      {/* Div z sliko ge se doda imgUrl prop */}
      <div className='apli1__blog-container_article-image'>
        <img src={imgUrl} alt="blog" />
      </div>

      {/* Div z datumon, naslovon pa texton iz propov */}
      <div className='apli1__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article