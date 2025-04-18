import React from "react";

const CardCom = ({ value }) => {
  return (
    <div
      className="relative w-full h-[100%] md:items-center   text-white flex max-md:flex-col md:flex-col 
    p-3 "
    >
      <div
        className={`absolute inset-0 ${value.bg}  rounded-xl`}
        style={{ backgroundColor: value.bg }}
      />

      <svg
        className="absolute bottom-0 left-0 w-full h-[40px] z-10 rounded-xl"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C10,0 40,30 100,10 L100,40 L10,40 Z"
          fill={value.lightbg}
        />
      </svg>

      <div className="relative z-20 flex  md:flex-row flex-col w-full justify-start md:gap-6   lg:flex lg:flex-row gap-1
       lg:gap-8 text-white lg:py-1 lg:px-[5%] lg:justify-between">
        <div className="flex items-center justify-center bg-white text-gray-600 rounded-md w-8 h-8  md:h-13 md:w-13 lg:w-20 lg:h-20 text-2xl sm:text-2xl lg:text-5xl">
          {value.icon}
        </div>
        <div className=" sm:w-full lg:w-[60%]">
          <p className="text-xs md:text-lg  lg:text-2xl max-md:whitespace-nowrap  font-bold lg:font-semibold ">
            {value.word}
          </p>
          <p className="text-lg  md:text-xl  lg:text-xl font-semibold ">{value.number}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCom;
