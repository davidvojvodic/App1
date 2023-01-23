import React from 'react';
import appsai from '../../assets/appsai.png'

import './possibility.css';

const Possibility = () => {
  return (

    // Komponenta s section paddingon iz App.css
    <div className='apli1__possibility section__padding' id='possibility'>
      
      {/* Del z velko sliko, importana iz assests/possibility.png */}
      <div className='apli1__possibility-image'>
        <img src={appsai} alt='possibility' />
      </div>

      {/* Del z texton, velki naslov z gradient texton iz index.css */}
      <div className='apli1__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;