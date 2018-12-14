import React from 'react';
import PropTypes from 'prop-types';
import List from 'antd/lib/list';
import Tag from 'antd/lib/tag';

import s from './InfoItem.module.scss'

const { string } = PropTypes;


const InfoItem = ({ title, text }) => {

  if (title === 'site' && text.includes('http')) text = <a href={text} target='_blank' rel="noopener noreferrer">{text}</a>;
  if (title === 'stack') text = text.split(',').map((i, k) => <Tag key={k} color="blue">{i}</Tag>);

  title = title.replace(/_/g, ' ').toLocaleUpperCase();

  return (
    <List.Item>
      <div>
        <div className={s.title}>{title}</div>
        <div>{text}</div>
      </div>
    </List.Item>
  );
};

InfoItem.propTypes = {
  title: string.isRequired,
  text: string.isRequired
};


export default InfoItem;
