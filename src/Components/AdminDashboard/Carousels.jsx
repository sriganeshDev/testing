import React from 'react';
import { Carousel } from 'antd';
import Card1 from '../../assets/AdminCarousel/Card1.jpg'
const contentStyle = {
  height: '160px',
  color: 'white',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'white',
};
const Carousels= () => (
  <Carousel autoplay>
    <div style={contentStyle}>
        <img
          src={Card1}
          alt="Card1"/>
    </div>
    <div style={contentStyle}>
        <img
          src={Card1}
          alt="Card1"/>
    </div>
    <div style={contentStyle}>
        <img
          src={Card1}
          alt="Card1"/>
    </div>
    <div style={contentStyle}>
        <img
          src={Card1}
          alt="Card1"/>
    </div>
  </Carousel>
);
export default Carousels;