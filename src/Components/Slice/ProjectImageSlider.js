
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation  } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ThumbsSwiper = ({data}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [count, setCount] = useState(0);

  // Example array stored in state
//   if (data.length < 1) {
//     return <p>The array is empty.</p>; // You can customize this message
//   }

//   const arrayCount = data.length;
    useEffect(() => {
        data?.map((p, index) =>{
            setCount(index)
        });
        
    });
    
  return (
    <div className='project-swiper'>
        { count > 0 ?(
                <>
                    <Swiper
                        // style={{ width: '100%', height: '200px', marginBottom: '20px' }}
                        className='swiperImageItem'
                        onSwiper={setThumbsSwiper}
                        breakpoints={{
                            0: {
                              slidesPerView: 3,
                              spaceBetween:15
                            },
                            700: {
                                slidesPerView: 4,
                                spaceBetween:15
                            },
                            900: {
                                slidesPerView: 5,
                                spaceBetween:15
                            },
                          }}
                        watchSlidesProgress
                        modules={[Thumbs, Navigation]}
                        navigation
                    >
                            {data?.map(featured => (  
                                <SwiperSlide>
                                    <LazyLoadImage src={`project/featured/${featured}`}  className="w-100 mb-3" key={featured} data-aos="fade-up"/>
                                </SwiperSlide>
                                
                            ))} 
                    </Swiper>
                    <Swiper
                    // style={{ width: '100%', height: 'auto' }}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[Thumbs]}
                    
                    >
                        {data?.map(featured => (  
                            <SwiperSlide className='thisImage'>
                                <LazyLoadImage src={`project/featured/${featured}`}  className="w-100 mb-3" key={featured} data-aos="fade-up"/>
                            </SwiperSlide>
                            
                        ))} 
                    </Swiper>
                </>
        
            ) : 
                data?.map(featured => (  
                        <LazyLoadImage src={`project/featured/${featured}`}  className="w-100 mb-3" key={featured} data-aos="fade-up"/>
                ))
        }
    </div>
      
  );
};

export default ThumbsSwiper;
