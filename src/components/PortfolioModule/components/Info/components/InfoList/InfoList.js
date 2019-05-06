import React from 'react';
import {object} from 'prop-types';
import keys from 'lodash/keys';
import List from 'antd/lib/list';

import './InfoList.scss'
import { InfoItem } from '../';


InfoList.propTypes = {
  data: object.isRequired
};


export function InfoList({ data }) {
  return (
    <List
      className='InfoList'
      dataSource={keys(data).splice(1)}
      renderItem={(i, k) => (
        <InfoItem key={k} title={i} text={data[i]} />
      )}
    />
  );
}
