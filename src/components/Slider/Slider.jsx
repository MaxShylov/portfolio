import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'antd/lib/carousel';

import './Slider.scss'
import SliderControlsButton from '../SliderControlsButton/SliderControlsButton';

let int = null;

class Slider extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.startAutoplay()
  };

  componentWillUnmount() {
    this.stopAutoplay()
  };

  shouldComponentUpdate() {
    return false
  }

  startAutoplay = () => {
    if (!int && this.props.images.length !== 1) {
      int = setInterval(() => this.carousel.next(), 3000);
    }
  };

  stopAutoplay = () => {
    clearInterval(int);
    int = null;
  };

  goTo = (way) => this.carousel[way]();

  render() {
    const
      { images } = this.props,
      singleImage = images.length === 1;

    return (
      <div
        className="Slider"
        onMouseEnter={this.stopAutoplay}
        onMouseLeave={this.startAutoplay}
      >

        <Carousel ref={n => this.carousel = n}>

          {images && images.map((i, k) => (
            <div key={k} className='image-wrap'>
              <img src={i} alt="" />
            </div>
          ))}

        </Carousel>

        {!singleImage && (
          <>
            <SliderControlsButton
              direction='prev'
              onClick={() => this.goTo('prev')}
            />
            <SliderControlsButton
              direction='next'
              onClick={() => this.goTo('next')}
            />
          </>
        )}
      </div>
    );
  }
}


export default Slider;
