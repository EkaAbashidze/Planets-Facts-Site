import React from "react";

export default function Button({ number, text, onClick, color, active }) {


  return (
    <div className="group">
      <button style={{backgroundColor: active ? color : "transparent" }}
        onClick={() => onClick()}
        className="flex sm:hidden items-center font-spartan font-bold justify-start gap-x-7 uppercase w-[350px] h-[46px] md:h-[40px] lg:h-12 border sm:border-none sm:p-0 sm:w-auto sm:opacity-50 hover:opacity-100 border-white border-opacity-20 transition-all duration-300 ease-linear text-[9px] leading-[25px] tracking-[1.93px] lg:text-[12px] lg:tracking-[2.57px] sm:hover:bg-transparent lg:leading-[25px] md:w-[281px] hover:bg-[#D8D8D8] hover:bg-opacity-20 "
      >
        <h3 className="opacity-50 pl-7 sm:hidden ">{number}</h3>
        {text}
      </button>
      <button
        onClick={() => onClick()}
        className="sm:flex hidden items-center font-spartan font-bold justify-start gap-x-7 uppercase w-[350px] h-[46px] md:h-[40px] lg:h-12 border sm:border-none sm:p-0 sm:w-auto sm:opacity-50 hover:opacity-100 border-white border-opacity-20 transition-all duration-300 ease-linear text-[9px] leading-[25px] tracking-[1.93px] lg:text-[12px] lg:tracking-[2.57px] sm:hover:bg-transparent lg:leading-[25px] md:w-[281px] hover:bg-[#D8D8D8] hover:bg-opacity-20 "
      >
        <h3 className="opacity-50 pl-7 sm:hidden ">{number}</h3>
        {text}
      </button>
      <div style={{backgroundColor: active ? color : "transparent" }}
        className=
          "hidden sm:block h-[4px] w-auto sm:hover:bg-transparent md:hover:bg-transparent sm:group-hover:visible group-"
      ></div>
    </div>
  );
}
