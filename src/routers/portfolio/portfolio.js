import React from 'react';
import SiteItem from '../../components/SiteItem/SiteItem';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import keys from 'lodash/keys'

import { PROJECTS } from '../../constans/projects';


const Portfolio = () => {
  console.log(1);

  return (
    <Row gutter={16}>

      {PROJECTS && keys(PROJECTS).map((i, k) => (
        <Col md={12} xl={8} xxl={6} key={k}>
          <SiteItem {...PROJECTS[i]} />
        </Col>
      ))}

    </Row>
  )
};


export default Portfolio;
