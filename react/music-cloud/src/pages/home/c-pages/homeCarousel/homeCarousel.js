import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Carousel } from 'antd';
import {
  HomeCarouselWrapper
} from './homeCarouselStyle';

export default memo(function HomeCarousel() {
  // redux hooks
  const { banners = [] } = useSelector(state => ({
    banners: state.getIn(["app", "agency", "banners"])
  }), shallowEqual)
  
  return (
    <HomeCarouselWrapper className="carousel-wrapper" >
      <Carousel effect="fade" autoplay dots={false}>
        {
          banners.map(item => {
            return (
              <div className="img_wrapper" key={item}>
                <img src={item} alt=""/>
              </div>
            )
          })
        }
      </Carousel>
    </HomeCarouselWrapper>
  )
})
