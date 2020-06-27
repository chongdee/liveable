import React from "react";
import Swiper from "react-id-swiper";

import './style.less'


export default class MySwiper extends React.Component {
  render() {
    const {banners} = this.props
    const params = {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };
    return (
      <div className='swiper'>
        <Swiper {...params}>
          {banners.map((el, index) => {
            return (
              <div className='swiper-view' key={index}>
                <img src={el} alt="轮播图" />
              </div>
            );
          })}
        </Swiper>
      </div>
    );
  }
}
