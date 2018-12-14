import React from 'react';
import PropTypes from 'prop-types';
import Card from 'antd/lib/card';
import Link from 'react-router-dom/es/Link';
import pure from 'recompose/pure'

import './SiteItem.scss'

import { ROUTERS } from '../../routers/index';
import coverDeepMed from '../../static/images/deepmed/prostate-cancer_global-statistics.jpg'
import coverSSP from '../../static/images/ssp/login.jpg'
import coverOSCE from '../../static/images/osce/new_message.jpg'
import coverToDoList from '../../static/images/todo-list-gql/todo.jpg'
import coverBtDebts from '../../static/images/bt-debts/start.png'


const { Meta } = Card;
const { string } = PropTypes;

const IMAGES = {
  deepmed: coverDeepMed,
  ssp: coverSSP,
  osce: coverOSCE,
  'todo-list-gql': coverToDoList,
  'bt-debts': coverBtDebts
};


const SiteItem = ({ id, name, description }) => (
  <div className="SiteItem">
    <Link to={ROUTERS.PORTFOLIO[id.replace(/-/g, '_').toLocaleUpperCase()]}>
      <Card
        hoverable
        cover={<img alt={name} src={IMAGES[id]} />}
      >
        <Meta
          title={name}
          description={<div>{description}</div>}
        />
      </Card>
    </Link>
  </div>
);


SiteItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired
};

export default pure(SiteItem);
