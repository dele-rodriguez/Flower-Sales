import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

function Shop() {

    const slides =["Slide 1" , "Slide 2" , "Slide 3" , "Slide 4" , "Slide 5" , "Slide 6" , "Slide 7" , "Slide 8" , "Slide 9" , "Slide 10" , "Slide 11" ,"Slide 12" ,]


    return (
        <>
            <p>This is the shop route</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide , index) => (
                    <SwiperSlide
                        key={index}
                    >
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default Shop