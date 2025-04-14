// import { useFormik } from "formik";
// import React from "react";
// import * as Yup from "yup";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import CommonButton from "../../Components/ReusableComp/CommonButton";
// import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email").required("Email is required"),
//       password: Yup.string()
//         .required("Password is required")
//         .min(6, "Password must be at least 6 characters")
//         .matches(/[!@#$%^&*]/, "Must contain at least one special character"),
//     }),
//     onSubmit: async (val) => {
//       console.log("val", val);
//     },
//   });

//   const fields = [
//     {
//       name: "email",
//       type: "email",
//       id: "email",
//       label: "Email",
//       placeholder: "Please Enter your Email",
//       icon: <FaEnvelope />,
//     },
//     {
//       name: "password",
//       type: "password",
//       id: "password",
//       label: "Password",
//       placeholder: "Please enter your Password",
//       icon: <FaLock />,
//     },
//   ];
//   return (
//     <div className="flex flex-col w-full min-md:justify-center min-md:h-screen min-md:items-center gap-5 ">
//       <div className="lg:pt-12  w-full max-w-md rounded-2xl">
//         <p className=" heading text-2xl mb-4 font-semibold text-center tracking-widest ">
//           WELCOME BACK
//         </p>
//         <div className="flex flex-col gap-3 ">
//           {fields.map((field) => (
//             <CommmonTextField key={field.id} fields={field} formik={formik} />
//           ))}

//           {/* Divider */}
//           <div className="flex items-center my-4">
//             <div className="flex-grow h-px bg-gray-300"></div>
//             <span className="px-3 text-gray-500 text-sm">or</span>
//             <div className="flex-grow h-px bg-gray-300"></div>
//           </div>

//           {/* Social Login Options */}
//           <div className="flex flex-col gap-3  px-2">
//             <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-150">
//               <img
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 alt="Google"
//                 className="w-5 h-5"
//               />
//               <span className="text-sm text-gray-700 font-medium">
//                 Continue with Google
//               </span>
//             </button>
//           </div>

//           <p className="text-sm w-full justify-start pl-2  text-gray-600">
//             If you are not registered, please{" "}
//             <Link to="/register">
//               <span className="text-blue-400 cursor-pointer">Sign Up</span>
//             </Link>
//           </p>

//           <div className="flex justify-center mt-5">
//             <CommonButton
//               buttonName={"Login"}
//               type="submit"
//               handlesubmit={formik.handleSubmit}
//               design={{
//                 backgroundColor: "#202b61",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "170px",
//                 height: "50px",
//                 fontSize: "15px",
//                 borderRadius: "10px",
//               }}
//               hoverStyles={{
//                 backgroundColor: "#fff",
//                 border: "2px solid #5c7dcf",
//                 color: "#202b61",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FaArrowRight, FaEnvelope, FaLock } from "react-icons/fa";
import CommonButton from "../../Components/ReusableComp/CommonButton";
import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/[!@#$%^&*]/, "Must contain at least one special character"),
    }),
    onSubmit: async (val) => {
      console.log("val", val);
    },
  });

  const fields = [
    {
      name: "email",
      type: "email",
      id: "email",
      label: "Email",
      placeholder: "Please Enter your Email",
      icon: <FaEnvelope />,
    },
    {
      name: "password",
      type: "password",
      id: "password",
      label: "Password",
      placeholder: "Please enter your Password",
      icon: <FaLock />,
    },
  ];
  return (
    <div className="flex flex-col w-full min-md:justify-center  min-md:h-screen min-md:items-center gap-5 ">
      <div className="lg:pt-12  w-full max-w-md rounded-2xl">
        <p className=" heading max-md:w-[28%] sm::relative bottom-5   max-md:border-b-2 pb-2 border-blue-400 max-md:text-lg text-2xl mb-4 font-semibold sm:text-start lg:text-center tracking-widest ">
          Sign in
        </p>
        <div className="flex flex-col gap-3 ">
          {fields.map((field) => (
            <CommmonTextField key={field.id} fields={field} formik={formik} />
          ))}

          <p className="text-sm w-full justify-start pl-2  text-gray-600">
            If you are not registered, please{" "}
            <Link to="/register">
              <span className="text-blue-400 cursor-pointer">Sign Up</span>
            </Link>
          </p>
          <div className="flex items-center justify-between px-1 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                className="accent-blue-500"
              />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center mt-5">
            <CommonButton
              buttonName={"Login"}
              type="submit"
              handlesubmit={formik.handleSubmit}
              design={{
                backgroundColor: "#202b61",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "170px",
                height: "50px",
                fontSize: "15px",
                borderRadius: "10px",
              }}
              hoverStyles={{
                backgroundColor: "#fff",
                border: "2px solid #5c7dcf",
                color: "#202b61",
              }}
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={formik.handleSubmit}
              className="flex items-center gap-2 text-black  px-4 py-2 rounded-full transition-all duration-300"
            >
              Continue <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
