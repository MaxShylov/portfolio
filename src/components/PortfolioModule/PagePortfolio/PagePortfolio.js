import React from 'react';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import keys from 'lodash/keys'

import { PortfolioItem } from '../components';
import { PROJECTS } from '../../../constans/projects';


export const PagePortfolio = () => {
  return (
    <Row gutter={16}>

      {PROJECTS && keys(PROJECTS).map((i, k) => (
        <Col md={12} xl={8} xxl={6} key={k}>
          <PortfolioItem {...PROJECTS[i]} />
        </Col>
      ))}

    </Row>
  )
};
