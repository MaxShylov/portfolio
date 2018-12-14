import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';
import cn from 'classnames'
import pure from 'recompose/pure'

import './SliderControlsButton.scss'


const SliderControlsButton = ({ onClick, direction }) => (
  <button
    className={cn('SliderControlsButton', direction)}
    onClick={onClick}
  >
    <Icon type={direction === 'prev' ? 'left' : 'right'} />
  </button>
);

SliderControlsButton.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


export default pure(SliderControlsButton);
