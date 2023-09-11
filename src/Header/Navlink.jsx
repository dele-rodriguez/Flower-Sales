import React from "react";
import { Link } from "react-router-dom";

function NavLink ({linkName , route , activeState , setActiveState , collaspeState}) {
    return(
        <>
            <Link
                to={route}
                className={`${activeState === linkName ? 'text-deeppink' : ''} ${collaspeState? 'hidden': ''} ${linkName === 'ABOUT'|| linkName === 'CONTACT US'? 'px-1' : ''} font-josefin text-sm`}
                onClick={() => setActiveState(linkName)}
            >
                {linkName}
            </Link>
        </>
    )
}

export default NavLink;