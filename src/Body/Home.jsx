import React from "react"
import { Link } from "react-router-dom";
import FeatureSlide from "../Components/FeatureSlide";

function Home() {
    
    return (
        <>
            <section className="home p-4 md:p-8">
                <section className="home-intro flex flex-col justify-center p-4 md:p-8">
                    <h2 className="text-xl text-deeppink font-medium w-10/12 font-frank mb-12 md:text-xxl">Embrace the Timeless Beauty of Flowers in Every Moment</h2>
                    <Link
                        to={"/shop"}
                        className="bg-deeppink w-24 h-8 text-white text-sm font-normal font-josefin link md:w-28 md:h-10 md:text-md md:font-medium"
                    >
                        SHOP NOW
                    </Link>
                </section>
                <section className="featured">
                    <h2>Featured</h2>
                    <p>Explore our abundant selection of fresh flowers, perfect for every occasion.</p>
                    <FeatureSlide />
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