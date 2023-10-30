import React, { useState , useEffect } from "react"
import { Link } from "react-router-dom";
import FeatureSlide from "../Components/FeatureSlide";
import UseMediaQuery from "../hooks/UseMediaQuery";

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
                <section className="home-intro flex flex-col justify-center p-4 md:p-8">
                    <h2 className="text-xl text-deeppink font-medium w-10/12 font-frank mb-12 md:text-xxl">Embrace the Timeless Beauty of Flowers in Every Moment</h2>
                    <Link
                        to={"/shop"}
                        className="bg-deeppink w-24 h-8 text-white text-sm font-normal font-josefin link md:w-28 md:h-10 md:text-md md:font-medium"
                    >
                        SHOP NOW
                    </Link>
                </section>
                <section className="featured flex flex-col font-frank items-center py-4">
                    <h2 className="px-4 md:px-8 pb-4 text-md font-medium">FEATURED</h2>
                    <p className="px-4 md:px-8 font-josefin text-center h-1/6">Explore our abundant selection of fresh flowers, perfect for every occasion.</p>
                    <FeatureSlide
                    />
                    <Link
                        to={"/shop"}
                        className="bg-deeppink w-24 h-8 text-white text-sm font-normal font-josefin link md:w-28 md:h-10 md:text-md md:font-medium"
                    >
                        SHOP NOW
                    </Link>
                </section>
            </section>
        </>
    )
}


export default Home