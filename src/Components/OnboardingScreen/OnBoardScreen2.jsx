import React, { useEffect, useState } from "react";
import bgimg from "../../assets/bg.svg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import OnBoardLoading from "./OnBoardLoading";

const OnBoardScreen1 = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <OnBoardLoading />
      ) : (
        <div
          className=" h-screen relative w-full flex flex-col   bg-cover bg-center justify-center items-center max-md:justify-end"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <div className=" h-96 flex flex-col  justify-between">
            <div className="relative z-10 text-white text-center px-6 sm:px-10 max-w-xl flex flex-col max-md:gap-2 gap-7 items-center">
              <h2 className="  text-5xl max-md:text-3xl font-bold">
                Welcome to the Canteen App!
              </h2>
              <p className=" max-md:text-xs">Let's get you started</p>
              <p className="text-sm max-md:text-xs max-md:mt-5">
                Please choose your user type to continue:
              </p>

              <div className="flex gap-6 max-md:mt-6">
                <button className="bg-[#3e97ff] text-white max-md:text-xs font-semibold py-2 px-6 rounded-xl hover:bg-blue-300 cursor-pointer transition-all duration-300">
                  Colan Admin
                </button>
                <button className="bg-[#3e97ff] text-white max-md:text-xs font-semibold py-2 px-6 rounded-xl hover:bg-blue-300 cursor-pointer transition-all duration-300">
                  Colan User
                </button>
              </div>
            </div>
            <div className="flex   w-full md:hidden lg:hidden max-md:mb-7 justify-end  ">
              <Link to={"login"}>
                <button
                  //   onClick={formik.handleSubmit}
                  className="flex items-center gap-2 text-white hover:text-black   px-4 py-2 rounded-full transition-all duration-300"
                >
                  Continue <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OnBoardScreen1;
