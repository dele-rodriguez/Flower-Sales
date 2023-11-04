import React, { useState , useEffect } from "react"
import { Link } from "react-router-dom";
import FeatureSlide from "../Components/FeatureSlide";
import UseMediaQuery from "../hooks/UseMediaQuery";
import {choice} from "../data";

function Home() {
    const [phoneScreen , setPhoneScreen] = useState()
    const {w} = UseMediaQuery();

    useEffect(() => {
        if (w < 700) {
            setPhoneScreen(true);
        } else {
            setPhoneScreen(false);
        }
    } , [w]);
    
    return (
        <>
            <section className="home">
                <section id="home" className="home-intro flex flex-col justify-center p-4 md:p-8">
                    <h2 className="text-xl text-deeppink font-medium w-10/12 font-frank mb-12 md:text-xxl">Embrace the Timeless Beauty of Flowers in Every Moment</h2>
                    <Link
                        to={"/shop"}
                        className="bg-deeppink w-24 h-8 text-white text-sm font-normal font-josefin link md:w-28 md:h-10 md:text-md md:font-medium"
                    >
                        SHOP NOW
                    </Link>
                </section>
                <section id="featured" className="featured flex flex-col font-frank items-center pt-4">
                    <h2 className="px-4 md:px-8 pb-4 text-md font-medium">FEATURED</h2>
                    <p className="px-4 md:px-8 font-josefin text-center h-1/6">Explore our abundant selection of fresh flowers, perfect for every occasion.</p>
                    <FeatureSlide
                    />
                    <Link
                        to={"/shop"}
                        className="bg-deeppink w-24 h-8 text-white text-sm font-normal font-josefin link md:w-28 md:h-10 md:text-md md:font-medium sm:mb-4"
                    >
                        SHOP NOW
                    </Link>
                </section>
                <section id="choose-us" className="bg-lightpink relative mb-3 p-3 font-frank flex flex-col sm:flex-row">
                    <div className="h-1/2 sm:h-full">
                        <h3 className="text-lg font-medium">Why CHOOSE US</h3>
                        {choice.map((choices , index) => (
                            <div className="flex my-3 items-center" key={choices.header}>
                                <h3 className="mr-4 text-xl text-deeppink">{index + 1}</h3>
                                <div>
                                    <h3 className="text-md font-medium">{choices.header}</h3>
                                    <p className="font-josefin text-sm font-thin"> {choices.content} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-1/2 sm:h-full img-box relative w-full flex items-center justify-center ">
                        <img src="home/Frame-215.png" alt="flowers" />
                    </div>
                </section>
                <section id="reviews" className="h-[450px] relative">
                    <img src="home/" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
                </section>
            </section>
        </>
    )
}


export default Home