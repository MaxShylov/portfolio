import React from 'react';
import { Footer as AntFooter } from 'antd/lib/layout'
import pure from 'recompose/pure'

import './Footer.scss'

const Footer = () => (
  <AntFooter>
    Max Shylov | Middle ​Full-Stack Web Engineer ©2018
  </AntFooter>
);


export default pure(Footer);
