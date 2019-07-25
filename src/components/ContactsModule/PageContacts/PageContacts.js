import React from 'react';
import List from 'antd/lib/list';

import { ContactItem } from '../';

const data = [
  { icon: 'phone', content: '+38 (093) 777-22-77', type: 'phone' },
  { icon: 'mail', content: 'max.shylov.17@gmail.com', type: 'email' },
  { icon: 'github', content: 'https://github.com/MaxShylov', type: 'link' },
  { icon: 'facebook', content: 'https://www.facebook.com/max.shylov', type: 'link' },
  { icon: 'linkedin', content: 'https://www.linkedin.com/in/max-shylov/', type: 'link' }
];


export const PageContacts = () => (
  <List
    dataSource={data}
    renderItem={(i, k) => <ContactItem key={k} {...i} />}
  />
);
