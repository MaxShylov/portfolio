import React from 'react';
import { Header as AntHeader } from 'antd/lib/layout'

import './Header.scss'
import { PROJECTS } from '../../../constans/projects';


export const Header = () => {
  const { pathname } = window.location;
  let title = pathname.slice(1);

  title = title ? title[0].toUpperCase() + title.slice(1) : 'Max Shylov  |  Middle​ Full-Stack Web Engineer';

  if (pathname.includes('portfolio/')) {
    const id = pathname.split('portfolio/')[1];
    title = 'Project ' + PROJECTS[id].name
  }

  return (
    <AntHeader>
      {title}
    </AntHeader>
  );
};
