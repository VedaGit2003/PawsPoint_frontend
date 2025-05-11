import React from 'react'
import { Link } from "react-router-dom";

const Navbutton = ({ destination, active,label }) => {
    return (
        <Link to={destination} 
        className={`block py-2 pl-3 pr-4 ${active?'text-amber-400':'text-gray-400'}  border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0`}>

            {label}

        </Link>
    )
}

export default Navbutton