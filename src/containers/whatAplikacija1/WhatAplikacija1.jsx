import React from 'react';

// Importanje Feature iz komponent za dodajanje v return kodo
import { Feature } from '../../components';
import './whatAplikacija1.css';


const WhatAplikacija1 = () => {
  return (

    /* Indentani box s section__margin izpelani iz app.css */
    <div className='apli1__whatapli1 section__margin' id='wapli1'>
      
      {/* div za zgornji Feature */}
      <div className='apli1__whatapli1-feature'>
        <Feature title="What is Aplikacija1" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." />
      </div>

      {/* Del s sredninskin naslovon pa texton */}
      <div className='apli1__whatapli1-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      {/* Spodnji div z naslovi pa texton */}
      <div className='apli1__whatapli1-container'>
        <Feature title="Chatbots" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident "/>
        <Feature title="Knowledgebase" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
        <Feature title="Education" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
      </div>
    </div>
  )
}

export default WhatAplikacija1