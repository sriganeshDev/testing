import React from "react";
import Rating from "./Rating";
import HeartIcon from "./HeartIcon";

const CardCom = ({ value }) => {
  return (
    // main div
    <div className="flex sm:flex-3 md:flex-col lg:flex-col shadow-lg border-2 border-gray-300 rounded-xl lg:rounded-2xl p-1.5 sm:gap-1 lg:gap-2">
      
      {/* image div with HeartIcon over image on lg */}
      <div className="relative flex flex-1.1 justify-center items-center rounded-2xl sm:p-4 md:p-0 lg:p-0 w-full">
        <img
          src={value.imageSrc}
          alt={value.foodName}
          className="w-28 h-27 sm:w-50 sm:h-80 md:w-90 md:h-60 lg:w-100 lg:h-60 object-cover rounded-sm lg:rounded-t-lg"
        />
      {/* heart icon in large screen */}
        <div className="hidden lg:block absolute top-2 right-2 z-10">
          <HeartIcon />
        </div>
      </div>

      {/* card details */}
      <div className="flex flex-1.9 flex-col justify-start items-start px-3 sm:gap-1 lg:gap-0 rounded-2xl">
        <div className="flex justify-between items-start w-full">
          <h1 className="font-sans text-[100%] font-medium">{value.foodName}</h1>

        {/* heart in small screen */}
          <p className="block lg:hidden">
            <HeartIcon />
          </p>
        </div>

        <p className="font-sans font-extralight text-[80%] line-clamp-2  overflow-hidden sm:w-full ">
          {value.des}
        </p>

        <p className="items-end">
          <Rating value={value} />
        </p>

        <div className="flex justify-between items-start w-full">
          <h2 className="font-sans font-semibold text-[100%]">
            ₹ {value.price}
          </h2>

          <button className="border sm:hover:bg-gray-600 lg:hover:bg-gray-600 h-5 rounded-sm flex items-center justify-center bg-gray-800 text-gray-200 p-3 text-sm sm:w-15 lg:w-20 font-bold">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCom;
