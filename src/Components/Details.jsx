import React from 'react'

export default function Details({text, heading}) {
    return (
        <div className='text-white h-32 border border-white border-opacity-20 lg:min-w-[255px] md:min-w-[164px] md:h-[88px] flex flex-col gap-y-1 pt-5 pb-[27px] pl-6 sm:w-[327px] sm:h-[48px] sm:flex-row sm:p-0 sm:px-[24px] sm:justify-between sm:items-center md:px-[15px] md:pt-[16px] md:pb-[19px]' >
            <p className='opacity-50 font-spartan text-[8px] leading-4 lg:text-[11px] lg:leading-6 tracking-[0.73px] lg:tracking-[1px] font-bold uppercase '>{heading}</p>
            <h2 className='uppercase font-antonio font-normal text-[20px] lg:text-[40px] lg:leading-[52px] tracking-[-0.75px] leading-[26px] md:tracking-[-0.9px] md:leading-[31.05px] md:text-[24px] '>{text}</h2>
        </div>
    )
}
