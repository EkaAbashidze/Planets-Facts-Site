import React from "react";

export default function Button({ number, text, onClick, name }) {
  const hover = "hover:bg-" + name.toLowerCase();

  console.log(hover);
  return (
    <div>
      <button
        onClick={() => onClick()}
        className={
          "flex items-center justify-start pl-7 gap-x-7 uppercase w-[350px] h-12 border border-white border-opacity-20 transition-all duration-300 ease-linear " +
          hover
        }
      >
        <h3 className="opacity-50">{number}</h3>
        {text}
      </button>
    </div>
  );
}
