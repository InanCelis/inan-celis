import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function ImageSlider({ data }) {
  return (
    <Swiper
    
      spaceBetween={0}
      slidesPerView={10}

      breakpoints={{
        
        0: {
          slidesPerView: 3,
          spaceBetween:0
        },
        560:{
            slidesPerView: 4,
            spaceBetween:0
        },
        767:{
            slidesPerView: 6,
            spaceBetween:30
        },
        992:{
            slidesPerView: 8,
            spaceBetween:30
        },
        
        1200:{
            slidesPerView: 10,
            spaceBetween:0
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((s, index) => (
        <SwiperSlide key={index} virtual>
            <div className='skill-item' data-toggle="tooltip" data-placement="top" title={s.text}>
                <i className={s.icon} ></i><br/>
                <span>{s.text}</span>
            </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
