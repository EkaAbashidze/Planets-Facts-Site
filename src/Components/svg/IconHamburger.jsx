import React from 'react'

export default function IconHamburger({onClick}) {
    return (
        <div className="cursor-pointer hidden sm:block">
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
        </svg>
        </div>
    );
}
