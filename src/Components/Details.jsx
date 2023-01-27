import React from 'react'

export default function Details({text, heading}) {
    return (
        <div className='text-white h-32 border border-white border-opacity-20 w-64 flex flex-col gap-y-1 pt-5 pb-[27px] pl-6' >
            <p className='opacity-50 font-spartan text-[11px] leading-6 tracking-[1px] font-bold uppercase' >{heading}</p>
            <h2 className='uppercase font-antonio text-[40px]' >{text}</h2>
        </div>
    )
}
