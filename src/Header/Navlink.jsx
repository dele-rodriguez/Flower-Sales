import React from "react";
import { Link } from "react-router-dom";

function NavLink ({linkName , route , activeState , setActiveState , collaspeState , setCollaspeState , hideHere}) {
    return(
        <>
            <Link
                to={route}
                className={`${activeState === linkName ? 'text-deeppink' : ''} ${hideHere ? 'md:hidden': ''} ${linkName === 'ABOUT'|| linkName === 'CONTACT US'? 'px-1' : ''} font-josefin text-sm`}
                onClick={() => {
                    setActiveState(linkName);
                    if (!collaspeState) {
                        setCollaspeState(true)
                    }
                }}
            >
                {linkName}
            </Link>
        </>
    )
}

export default NavLink;