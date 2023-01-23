import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import robotai from '../../assets/robotai.png';

const Header = () => {
  return (
    /* Header z section paddingon za celi header v App.css */
    <div className="aplikacija1__header section__padding" id="home">
      <div className='aplikacija1__header-content'>

        {/* Naslov pa odstavek z gradient texton vnaprej defineranin v index.css */}
        <h1 className='gradient__text'>
          Amazing Aplikacija1 OpenAI
        </h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        
        {/* Input za email z buttonon */}
        <div className='aplikacija1__header-content__input'>
          <input type="email" placeholder='Your Email Address'></input>
          <button type="button">Get Started</button>
        </div>

        {/* Del z sliko pa texton, slika iz assets/people.png */}
        <div className='aplikacija1__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      {/* Velka slika iz assets/ai.png, v svojon div-i zaradi položaja */}
        <div className='aplikacija1__header-image'>
            <img src={robotai} alt="ai" />
         </div>
    </div>
  )
}

export default Header