import React from "react";


export default function RegularButton({ children, handleClick }) {


    return (
        <button
            onClick={handleClick}
            className='btn btn--text'
        >
            {children}
        </button>
    )
}