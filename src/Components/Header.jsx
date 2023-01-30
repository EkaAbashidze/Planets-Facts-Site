import React, { useState } from "react";
import Menu from "./Menu";
import IconHamburger from "./svg/IconHamburger";
import { Link } from "react-router-dom";
import IconChevron from "./svg/IconChevron";

export default function Header() {
  const [menu, setMenu] = useState(false);

  console.log(menu);

  return (
    <div className="h-[86px] flex flex-col w-full justify-center border-b-[1px] border-b-[rgba(255,255,255,0.2)] ">
      <div className="text-white flex justify-between items-center w-full pr-[41px] pl-[32px]">
        <h3 className="font-antonio font-normal text-[28px]">THE PLANETS</h3>

        <div className="flex items-center font-spartan gap-x-[33px] text-[11px] uppercase opacity-75">
          <Link to="/menu" className="cursor-pointer">
            <IconHamburger />
          </Link>

          <div className="flex items-start font-spartan gap-x-[33px] text-[11px] tracking-wide uppercase opacity-75 w-full h-full sm:hidden">
            <Link
              to="/mercury"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6"
            >
              mercury
            </Link>

            <Link
              to="/venus"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6"
            >
              venus
            </Link>

            <Link
              to="/earth"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6"
            >
              earth
            </Link>

            <Link
              to="/mars"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6"
            >
              mars
            </Link>

            <Link
              to="/jupiter"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6"
            >
              jupiter
            </Link>

            <Link
              to="/saturn"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6"
            >
              saturn
            </Link>

            <Link
              to="/uranus"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6"
            >
              uranus
            </Link>

            <Link
              to="/neptune"
              className="cursor-pointer opacity-75 hover:opacity-100 tracking-[1px] font-bold leading-6"
            >
              neptune
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
