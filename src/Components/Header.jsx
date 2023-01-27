import React, { useState } from "react";
import Menu from "./Menu";
import IconHamburger from "./svg/IconHamburger";

export default function Header() {


const [menu, setMenu] = useState(false);

console.log(menu)

  return (
    <div className="h-[86px] flex flex-col w-full justify-center border-b-[1px] border-b-[rgba(255,255,255,0.2)] ">
      <div className="text-white flex justify-between items-center w-full pr-[41px] pl-[32px]">
        <h3 className="font-antonio font-normal text-[28px]">THE PLANETS</h3>

        <div className="flex items-center font-spartan gap-x-[33px] text-[11px] tracking-wide uppercase opacity-75">

          <IconHamburger className="cursor:pointer" onClick={() => setMenu(!menu)} />

          {!menu ? null : <Menu /> }

        </div>

      </div>
    </div>
  );
}
