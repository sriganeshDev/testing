// import React from "react";
// import { Outlet } from "react-router-dom";

// const AuthParent = () => {
//   return (
//     <>
//       <div className="flex flex-col lg:p-10  max-md:p-1  md:flex-row h-screen">
//         <div
//           className="relative w-full rounded-tl-4xl rounded-out md:w-1/2 flex flex-col justify-center items-center bg-cover bg-center"
//           style={{
//             backgroundImage: `url(https://img.freepik.com/premium-photo/table-with-many-dishes-including-food-including-rice-veggies-other-foods_1086760-97540.jpg?w=1380)`,
//           }}
//         >
//           {/* <img
//             src={logo}
//             className="w-32 md:w-40 lg:w-48 absolute top-5 left-5"
//             alt="Logo"
//           /> */}
//         </div>

//         <div className="w-full md:w-1/2 rounded-r-2xl bg-gray-100 flex flex-col justify-center items-center p-6">
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
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div
          className="relative w-full md:w-1/2 h-1/4 mb-13 md:h-full max-md:rounded-xl flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/table-with-many-dishes-including-food-including-rice-veggies-other-foods_1086760-97540.jpg?w=1380)`,
          }}
        >
          <div className="absolute inset-0  max-md:bg-gradient-to-t from-gray-900/60  to-gray-300/20 z-0"></div>
        </div>

        <div className="w-full  md:w-1/2 h-2/3 md:h-full lg:bg-gray-100 flex justify-center items-center  lg:p-6 max-md:p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthParent;
