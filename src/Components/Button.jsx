import React from 'react'

export default function Button({number, text, onClick}) {
    return (
        <div>
            <button  onClick={() => onClick()} className=" flex items-center justify-start pl-7 gap-x-7 uppercase w-[350px] h-12 border border-white border-opacity-20 hover:bg-earth transition-all duration-300 ease-linear"><h3 className="opacity-50">{number}</h3>{text}
            </button>
        </div>
    );
}