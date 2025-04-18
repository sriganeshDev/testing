import React from "react";
import { GrDocumentText } from "react-icons/gr";
import CardCom from "./CardCom";

const Card = () => {
  const value = [
    {
      id: 1,
      icon: <GrDocumentText  />,
      word: "Orders Today",
      number: "145",
      bg:"#4ab7b6",
      lightbg:"#65c2c1"
    },
    {
      id: 2,
      icon: <GrDocumentText />,
      word: "Total revenue",
      number: "₹ 2000",
      bg:"#4b9dcb",
       lightbg:"#66acd3"
    },
    {
      id: 3,
      icon: <GrDocumentText />,
      word: "Active Users",
      number: "45",
       bg:"#bb6e9c",
        lightbg:"#c584ab"
    },
  ];

  return( <div className="flex flex-row lg:flex lg:flex-col w-full sm:gap-1 max-md:gap-2 md:gap-2 lg:gap-3.5 lg:justify-between  
  px-1 lg:p-4   lg:w-[100%]  lg:shadow-gray-300 lg:shadow-sm rounded-2xl  ">
    {
      value.map((value)=>
      <CardCom value={value}/> )
    }
    
  </div>
  )
};

export default Card;
