import React from 'react';

import './PageAbout.scss';
import { MainInfo, Resume, SoftSkills, TechnicalSkills } from '../components'


export const PageAbout = () => (
  <div className="PageAbout">
    <MainInfo />
    <Resume />
    <TechnicalSkills />
    <SoftSkills />
  </div>
);
