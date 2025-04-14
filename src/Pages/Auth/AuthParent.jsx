// import React from "react";
// import { Outlet } from "react-router-dom";

// const AuthParent = () => {
//   return (
//     <>
//       <div className="flex flex-col    md:flex-row h-screen max-md:gap-6">
//         <div
//           className="relative w-full md:w-1/2 h-2/4  md:h-full  rounded-l-2xl flex justify-center items-center bg-cover bg-center"
//           style={{
//             backgroundImage: `url(https://img.freepik.com/premium-photo/table-with-many-dishes-including-food-including-rice-veggies-other-foods_1086760-97540.jpg?w=1380)`,
//           }}
//         >
//           <svg
//             className="absolute top-0 left-0 w-full -translate-y-full"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="#ffffff"
//               d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,170.7C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>

//         <div className="w-full md:w-1/2 h-2/3 md:h-full lg:bg-gray-50 rounded-r-2xl flex justify-center max-md:p-3 overflow-y-auto  ">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AuthParent;

import React from "react";
import { Outlet } from "react-router-dom";

const AuthParent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen  ">
      {/* Left side with image and curve */}
      <div
        className="relative w-full md:w-1/2 h-2/4 md:h-full rounded-l-2xl flex justify-center items-end bg-cover bg-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/table-with-many-dishes-including-food-including-rice-veggies-other-foods_1086760-97540.jpg?w=1380)`,
        }}
      >
        {/* <div className="relative w-full">
        
          <svg
            className="lg:hidden md:hidden absolute -bottom-0.5 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,160 C690,-190 1080,480 1440,160 L1440,320 L0,320 Z"
            />
          </svg>

          
          <div className="lg:hidden md:hidden absolute bottom-0 left-6 z-10">
            <p className=" heading text-xl  border-b-2 pb-2 border-blue-400 font-semibold sm:text-start lg:text-center tracking-widest ">
              Sign in
            </p>
          </div>
        </div> */}

        <div className="relative w-full">
          {/* TOP WAVE SVG */}
          <svg
            className="lg:hidden md:hidden absolute  -bottom-0.5 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,160 C690,-190 1080,480 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
      </div>

      {/* Right side (form area) */}
      <div className="w-full md:w-1/2 h-2/3 md:h-full bg-[#ffffff] rounded-r-2xl flex justify-center max-md:p-3 lg:overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthParent;
