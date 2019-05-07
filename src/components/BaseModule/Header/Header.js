import React from 'react';
import { Header as AntHeader } from 'antd/lib/layout'

import styles from './Header.module.scss'
import { PROJECTS } from '../../../constans/projects';
import { ReactComponent as IconCv } from '../assets/images/cv.svg'
import CV from '../assets/files/CV_Max_Shylov_Full-Stack.pdf'


function getTitle() {
  const { pathname } = window.location;
  let title = pathname.slice(1);

  title = title ? title[0].toUpperCase() + title.slice(1) : 'Max Shylov  |  Middle​ Full-Stack Web Engineer';

  if (pathname.includes('portfolio/')) {
    const id = pathname.split('portfolio/')[1];
    title = 'Project: ' + PROJECTS[id].name
  }

  return title;
}


export function Header() {
  const
    title = getTitle(),
    handleClick = () => {
      window.open(CV);
    };

  return (
    <AntHeader className={styles.header}>
      {title}

      <IconCv
        className={styles.icon}
        onClick={handleClick}
      />
    </AntHeader>
  );
}
