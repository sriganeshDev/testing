import React from "react";
import Carousels from "../../Components/AdminDashboard/Carousels";
import Card from "../../Components/AdminDashboard/Card";
import Graph from "../../Components/AdminDashboard/Graph";

// const AdminDashboard = () => {
//   return (
//     <div className="h-[100%]">
//       {/* carousel */}
//       <div className="h-[100%] w-[100%]">
//         <Carousels />
//       </div>

//       {/* main div for card and graph */}
//       <div className="lg:flex lg:flex-row flex flex-col lg:w-[100%]  ">
//         {/* crad*/}
//         <div className="lg:w-[40%] lg:pb-[2%] lg:gap-[2%] lg:px-[2%]  m-[2%]  shadow-gray-100">
//           <Card />
//         </div>
//         {/* graph */}
//         <div className="lg:w-[60%] m-4">
//           <Graph/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

const AdminDashboard = () => {
  return (
    <div className="w-full flex h-screen flex-col gap-4  ">
      <div className="w-full lg:px-3 max-md:px-1    ">
        <Carousels />
      </div>
      <div className="w-full flex lg:flex-row  max-md:flex-col  gap-4 md:flex-col  justify-around  px-5 max-md:px-0.5 ">
        <div className="sm:w-full pr-3  md:w-full lg:w-[40%] lg:gap-3 lg:pt-5  justify-between items-center">
          <Card />
        </div>
        <div className="w-full h-30 md:h-[80%] md:py-5 md:pb-12 px-3   lg:w-[60%]  ">
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
