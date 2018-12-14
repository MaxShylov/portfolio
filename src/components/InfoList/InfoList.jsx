import React from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/keys';
import List from 'antd/lib/list';
import pure from 'recompose/pure'

import './InfoList.scss'
import InfoItem from '../InfoItem/InfoItem';


const InfoList = ({ data }) => (
  <List
    className='InfoList'
    dataSource={keys(data).splice(1)}
    renderItem={(i, k) => (
      <InfoItem key={k} title={i} text={data[i]} />
    )}
  />
);

InfoList.propTypes = {
  data: PropTypes.object.isRequired
};


export default pure(InfoList);
