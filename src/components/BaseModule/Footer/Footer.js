import React, { memo } from 'react';
import { Footer as AntFooter } from 'antd/lib/layout'

import './Footer.scss'

function _Footer() {
  return (
    <AntFooter>
      Max Shylov | Middle ​Full-Stack Web Engineer ©2018
    </AntFooter>
  );
}

export const Footer = memo(_Footer);
