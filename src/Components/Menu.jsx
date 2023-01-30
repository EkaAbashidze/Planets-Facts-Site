import React from 'react'
import { Link } from 'react-router-dom'
import IconChevron from './svg/IconChevron'

export default function Menu() {
  return (
    <div className="items-start font-spartan gap-x-[33px] text-[11px] tracking-wide uppercase opacity-75 sm:flex-col sm:opacity-100 sm:text-[15px] w-full h-full sm:bg-background sm:py-[44px] sm:flex hidden">
      <div className="flex justify-between items-center w-full pr-8 pl-[24px]">
        <div className="flex gap-x-[25px]">
          <div className="bg-white w-[20px] rounded-full h-[20px] hidden sm:block"></div>
          <Link
            to="/mercury"
            className="cursor-pointer opacity-75 hover:opacity-100 text-white"
          >
            mercury
          </Link>
        </div>
        <IconChevron />
      </div>
      <div className="w-[90%] h-px bg-white opacity-10 my-[20px] hidden sm:block m-auto"></div>

      <div className="flex justify-between items-center  w-full pr-8 pl-[24px]">
        <div className="flex gap-x-[25px]">
          <div className="bg-venus w-[20px] h-[20px] hidden sm:block rounded-full"></div>
          <Link
            to="/venus"
            className="cursor-pointer opacity-75 hover:opacity-100 text-white"
          >
            venus
          </Link>
        </div>
        <IconChevron />
      </div>
      <div className="w-[90%] h-px bg-white opacity-10 my-[20px] hidden sm:block m-auto"></div>

      <div className="flex justify-between items-center  w-full pr-8 pl-[24px] ">
        <div className="flex gap-x-[25px]">
          <div className="bg-earth w-[20px] h-[20px] hidden sm:block rounded-full"></div>
          <Link
            to="/earth"
            className="cursor-pointer opacity-75 hover:opacity-100 text-white"
          >
            earth
          </Link>
        </div>
        <IconChevron />
      </div>
      <div className="w-[90%] h-px bg-white opacity-10 my-[20px] hidden sm:block m-auto"></div>

      <div className="flex justify-between items-center  w-full pr-8 pl-[24px]">
        <div className="flex gap-x-[25px]">
          <div className="bg-mars w-[20px] h-[20px] hidden sm:block rounded-full"></div>
          <Link
            to="/mars"
            className="cursor-pointer opacity-75 hover:opacity-100 text-white"
          >
            mars
          </Link>
        </div>
        <IconChevron />
      </div>
      <div className="w-[90%] h-px bg-white opacity-10 my-[20px] hidden sm:block m-auto"></div>

      <div className="flex justify-between items-center  w-full pr-8 pl-[24px]">
        <div className="flex gap-x-[25px]">
          <div className="bg-jupiter w-[20px] h-[20px] hidden sm:block rounded-full"></div>
          <Link
            to="/jupiter"
            className="cursor-pointer opacity-75 hover:opacity-100 text-white"
          >
            jupiter
          </Link>
        </div>
        <IconChevron />
      </div>
      <div className="w-[90%] h-px bg-white opacity-10 my-[20px] hidden sm:block m-auto"></div>

      <div className="flex justify-between items-center  w-full pr-8 pl-[24px]">
        <div className="flex gap-x-[25px]">
          <div className="bg-saturn w-[20px] h-[20px] hidden sm:block rounded-full"></div>
          <Link
            to="/saturn"
            className="cursor-pointer opacity-75 hover:opacity-100 text-white"
          >
            saturn
          </Link>
        </div>
        <IconChevron />
      </div>
      <div className="w-[90%] h-px bg-white opacity-10 my-[20px] hidden sm:block m-auto"></div>

      <div className="flex justify-between items-center  w-full pr-8 pl-[24px]">
        <div className="flex gap-x-[25px]">
          <div className="bg-uranus w-[20px] h-[20px] hidden sm:block rounded-full"></div>
          <Link
            to="/uranus"
            className="cursor-pointer opacity-75 hover:opacity-100 text-white"
          >
            uranus
          </Link>
        </div>
        <IconChevron />
      </div>
      <div className="w-[90%] h-px bg-white opacity-10 my-[20px] hidden sm:block m-auto"></div>

      <div className="flex justify-between items-center  w-full pr-8 pl-[24px]">
        <div className="flex gap-x-[25px]">
          <div className="bg-neptune w-[20px] h-[20px] hidden sm:block rounded-full"></div>
          <Link
            to="/neptune"
            className="cursor-pointer opacity-75 hover:opacity-100 text-white"
          >
            neptune
          </Link>
        </div>
        <IconChevron />
      </div>
    </div>
  );
}
