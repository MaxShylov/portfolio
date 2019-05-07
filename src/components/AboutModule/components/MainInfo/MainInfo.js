import React from 'react';

import './MainInfo.scss';
import Avatar from '../../images/avatar.png';


export function MainInfo() {
  return (
    <div className="MainInfo">
      <div className='avatar'>
        <img src={Avatar} alt='Max Shylov' />
      </div>

      <div className='right-side'>
        <h1>Middle​ Full-Stack Web Engineer</h1>
        <h2 className='name'>Max Shylov</h2>
        <h3>Russian / Ukrainian / English (A1-A2)</h3>
        <div>Lviv, Ukraine</div>
        <div>Age: 28 (Oct. 1990)</div>
        <div>Ukrainian nationality</div>
      </div>
    </div>
  );
}
