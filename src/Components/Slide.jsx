import React from "react";
import { useState , useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import UseMediaQuery from "../hooks/UseMediaQuery";

function Slide(props) {
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

    return (
        <>
            {props.slides ? (
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={10}
                    loop={true}
                    className="mySwiper"
                >
                    {props.slides.map((slide , index) => (
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
                </Swiper>) : (
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={10}
                        loop={true}
                        className="review-swiper"
                    >
                        {props.blogSlides.map((blogSlide , index) => (
                            <SwiperSlide
                                className="bg-lightpink relative flex flex-col items-center p-2 pb-3 justify-around"
                                key={index}
                                id={blogSlide.title}
                            >
                                <img className="h-[60%] w-[100%]" src={blogSlide.img}></img>
                                <div className="h-[50%] w-full flex flex-col justify-center">
                                    <h4 className="font-frank font-bold self-start py-2">{blogSlide.title}</h4>
                                    <p className="text-md font-josefin font-extralight">{blogSlide.content}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )
                
            }
            
        </>
    )
}

export default Slide;