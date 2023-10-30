import React from "react";
import { useState , useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import UseMediaQuery from "../hooks/UseMediaQuery";

function FeatureSlide() {
    const {w} = UseMediaQuery();
    const [slidesPerView , setSlidesPerView] = useState(1.5);

    useEffect(() => {
        if (w < 501) {
            setSlidesPerView(1.5);
        } else if(w > 501 && w < 700) {
            setSlidesPerView(2.5)
        } else {
            setSlidesPerView(3);
        }
    } , [w]);

    const slides =[{img: "/home/beauty.png" , name: "Rare Beauty" , price: "$ 94" , id: "rare"} , {img: "/home/sunflower.png" , name: "Sunflower bliss" , price: "$ 70" , id: "sun"} , {img: "/home/belle.png" , name: "Belle Treasure" , price: "$ 85" , id: "belle"}]

    return (
        <>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={10}
                loop={true}
                className="mySwiper"
            >
                {slides.map((slide , index) => (
                    <SwiperSlide
                        className="feature-slide flex flex-col items-center"
                        key={index}
                        id={slide.id}
                    >
                        <img className="slide-img mt-2 mx-2" src={slide.img}></img>
                        <p>{slide.name}</p>
                        <p className="font-medium">{slide.price}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default FeatureSlide;