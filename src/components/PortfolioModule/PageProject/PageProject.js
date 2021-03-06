import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import pure from 'recompose/pure'

import { Slider } from '../../ControlModule';
import { Info } from '../components';


const PageProject = ({ images, info }) => (
  <Row gutter={16} className="ProjectPage">
    <Col lg={18}>
      <Slider images={images} />
    </Col>

    <Col lg={6}>
      <Info data={info} />
    </Col>
  </Row>
);

PageProject.propTypes = {
  images: PropTypes.array.isRequired,
  info: PropTypes.object.isRequired
};


export default pure(PageProject);
