import { list } from "postcss"
import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./Navlink";

function Header() {

    const [activeLink, setActiveLink] = useState('HOME');
    const [collaspe , SetCollaspe] = useState(true);

    return (
        <>
            <nav className="flex flex-row bg-lightpink items-center justify-between h-50 font-josefin md:px-3 md:py-3">
                <div className="w-1/4 md:w-4/12">
                    <svg
                        onClick={() => {
                            if (collaspe) {
                                SetCollaspe(false)
                            } else {
                                SetCollaspe(true)
                            }
                        }} 
                        xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 18 12" fill="none" className="ml-3 md:hidden">
                        {
                            collaspe ? (<path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="black"/>): (<path d="M0 0 L18 12 M0 12 L18 0" stroke="black" stroke-width="3" />)
                        }
                    </svg>
                    <div className={`${collaspe ? 'hidden' : 'flex'} absolute flex-col items-center w-full h-5/6 mt-2 text-sm font-bold bg-lightpink md:flex md:relative md:flex-row md:justify-between`}>
                        <NavLink route="/" activeState={activeLink} setActiveState={setActiveLink} linkName="HOME"/>
                        <NavLink route="/" activeState={activeLink} setActiveState={setActiveLink} linkName="SHOP"/>
                        <NavLink route="/" activeState={activeLink} setActiveState={setActiveLink} linkName="COLLECTION"/>
                        <NavLink route="/" activeState={activeLink} setActiveState={setActiveLink} linkName="BLOG"/>
                        <NavLink route="/" collaspeState={collaspe} activeState={activeLink} setActiveState={setActiveLink} linkName="ABOUT"/>
                        <NavLink route="/" collaspeState={collaspe} activeState={activeLink} setActiveState={setActiveLink} linkName="CONTACT US"/>
                    </div>
                </div>
                <div className="w-2/4 text-center md:w-4/12">
                    <h2 className="font-frank text-md font-bold tracking-wide">BLOOM HAVEN</h2>
                </div>
                <div className="w-1/4 flex font-bold text-sm md:justify-between md:-4/12 sm:justify-center">
                    <div className="hidden md:flex md:justify-between">
                        <NavLink route="/" activeState={activeLink} setActiveState={setActiveLink} linkName="ABOUT"/>
                        <NavLink route="/" activeState={activeLink} setActiveState={setActiveLink} linkName="CONTACT US"/>
                    </div>
                    <a className="w-4" href="#"><img src="/images/Nav/contact-icon.svg" alt="contact icon" /></a>
                    <a className="w-4" href="#"><img src="/images/Nav/shop-icon.svg"/></a>
                </div>
            </nav>
        </>
    )
}

export default Header;