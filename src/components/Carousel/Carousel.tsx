/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Image, Carousel as AntCarousel } from 'antd';
import styles from './carousel.module.css';

import CarouselImage1 from '../../assets/images/carousel_1.jpg';
import CarouselImage2 from '../../assets/images/carousel_2.jpg';
import CarouselImage3 from '../../assets/images/carousel_3.jpg';

export const Carousel : React.FC = () => {
  console.log();
  return (
    <AntCarousel autoplay className={styles.slider}>
      <Image src={CarouselImage1} />
      <Image src={CarouselImage2} />
      <Image src={CarouselImage3} />
    </AntCarousel>
  );
};
