import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const { string } = PropTypes;


Title.propTypes = {
  children: string.isRequired
};


export function Title({ children }) {
  return (
    <div className={styles.title}>
      {children}
    </div>
  );
}
