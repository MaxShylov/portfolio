import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';
import List from 'antd/lib/list';

import './ContactItem.scss'

const { string } = PropTypes;
const ListItem = List.Item;


function ContactItem({ icon, content, type }) {
  const createLink = () => {
    let prefix = '';

    if (type === 'phone') prefix = 'tel:';
    if (type === 'email') prefix = 'mailto:';

    return <a href={prefix + content}>{content}</a>;
  };

  return (
    <ListItem className='ContactItem'>

      {console.log('render ListItem')}

      <Icon type={icon} />
      {createLink()}
    </ListItem>
  );
};

ContactItem.propTypes = {
  icon: string.isRequired,
  content: string.isRequired,
  type: string.isRequired
};

export default ContactItem;
