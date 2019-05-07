import React from 'react';
import { string, func } from 'prop-types';
import Icon from 'antd/lib/icon';
import cn from 'classnames'


import './SliderControlsButton.scss'


SliderControlsButton.propTypes = {
  direction: string.isRequired,
  onClick: func.isRequired
};

export function SliderControlsButton({ onClick, direction }) {
  return (
    <button
      className={cn('SliderControlsButton', direction)}
      onClick={onClick}
    >
      <Icon type={direction === 'prev' ? 'left' : 'right'} />
    </button>
  );
}
