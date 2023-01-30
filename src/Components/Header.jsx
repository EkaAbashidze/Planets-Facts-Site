import React, { useState } from "react";
import Menu from "./Menu";
import IconHamburger from "./svg/IconHamburger";
import { Link } from "react-router-dom";
import IconChevron from "./svg/IconChevron";

export default function Header() {
  const [menu, setMenu] = useState(false);

  console.log(menu);

  return (
    <div className="lg:h-[86px] md:h-[159px] h-[63px] flex flex-col w-full justify-center border-b-[1px] border-b-[rgba(255,255,255,0.2)] ">
      <div className="text-white flex md:flex-col justify-between items-center w-full  sm:px-[24px] lg:pr-[41px] lg:pl-[32px]">
        <h3 className="font-antonio font-normal text-[28px] leading-[36px] tracking-[-1.05px]">THE PLANETS</h3>

        <div className="flex items-center font-spartan gap-x-[33px] text-[11px] uppercase opacity-75">
          <Link to="/menu" className="cursor-pointer">
            <IconHamburger/>
          </Link>

          <div className="flex items-start font-spartan gap-x-[33px] text-[11px] tracking-wide uppercase opacity-75 w-full h-full sm:hidden md:pt-[39px]">
            
            <div className="group h-auto lg:h-[85px] flex flex-col justify-between hover:opacity-100"  >
            <div className="w-auto h-1 bg-mercury invisible lg:group-hover:visible"></div>
            <Link
              to="/mercury"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6 lg:mb-[27px] "
            >
              mercury
            </Link>
            </div>
            
            <div className="group h-auto lg:h-[85px] flex flex-col justify-between hover:opacity-100"  >
            <div className="w-auto h-1 bg-venus invisible lg:group-hover:visible"></div>
            <Link
              to="/venus"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6 lg:mb-[27px]"
            >
              venus
            </Link>
            </div>
            
            <div className="group  h-auto lg:h-[85px] flex flex-col justify-between hover:opacity-100"  >
            <div className="w-auto h-1 bg-earth invisible lg:group-hover:visible"></div>
            <Link
              to="/earth"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6 lg:mb-[27px]"
            >
              earth
            </Link>
            </div>
            
            <div className="group  h-auto lg:h-[85px] flex flex-col justify-between hover:opacity-100"  >
            <div className="w-auto h-1 bg-mars invisible lg:group-hover:visible"></div>
            <Link
              to="/mars"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6 lg:mb-[27px]"
            >
              mars
            </Link>
            </div>
            
            <div className="group  h-auto lg:h-[85px] flex flex-col justify-between hover:opacity-100"  >
            <div className="w-auto h-1 bg-jupiter invisible lg:group-hover:visible"></div>
            <Link
              to="/jupiter"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6 lg:mb-[27px]"
            >
              jupiter
            </Link>
            </div>
            
            <div className="group  h-auto lg:h-[85px] flex flex-col justify-between hover:opacity-100"  >
            <div className="w-auto h-1 bg-saturn invisible lg:group-hover:visible"></div>
            <Link
              to="/saturn"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6 lg:mb-[27px]"
            >
              saturn
            </Link>
            </div>
            
            <div className="group  h-auto lg:h-[85px] flex flex-col justify-between hover:opacity-100"  >
            <div className="w-auto h-1 bg-uranus invisible lg:group-hover:visible"></div>
            <Link
              to="/uranus"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6 lg:mb-[27px]"
            >
              uranus
            </Link>
            </div>
            
            <div className="group  h-auto lg:h-[85px] flex flex-col justify-between hover:opacity-100"  >
            <div className="w-auto h-1 bg-neptune invisible lg:group-hover:visible"></div>
            <Link
              to="/neptune"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6 lg:mb-[27px]"
            >
              neptune
            </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
