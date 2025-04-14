// import { useFormik } from "formik";
// import * as Yup from "yup";
// import React from "react";
// import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
// import CommonSelectField from "../../Components/ReusableComp/CommonSelectField";
// import CommonButton from "../../Components/ReusableComp/CommonButton";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { FaIdBadge } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmpassword: "",
//       colan: "",
//       others: "",
//       employeeId: "",
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//       email: Yup.string().email("Invalid email").required("Email is required"),
//       password: Yup.string()
//         .required("Password is required")
//         .min(6, "Password must be at least 6 characters")
//         .matches(/[!@#$%^&*]/, "Must contain at least one special character"),
//       confirmpassword: Yup.string()
//         .required("Confirm Password is required")
//         .oneOf([Yup.ref("password")], "Passwords must match"),
//       colan: Yup.string(),
//       others: Yup.string(),
//       employeeId: Yup.string().when("colan", {
//         is: (val) => val === "Freasher" || val === "Experience",
//         then: () => Yup.string(),
//         otherwise: () => Yup.string(),
//       }),
//     }),
//     onSubmit: async (val) => {
//       console.log("val", val);
//     },
//   });

//   const fields = [
//     {
//       name: "username",
//       type: "text",
//       id: "username",
//       label: "UserName",
//       placeholder: "Please Enter your UserName",
//       icon: <FaUser />,
//     },
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
//     {
//       name: "confirmpassword",
//       type: "password",
//       id: "confirmpassword",
//       label: "Confirm Password",
//       placeholder: "Please enter your Confirm Password",
//       icon: <FaLock />,
//     },
//   ];

//   const Select_Company = [
//     {
//       name: "Select_Company",
//       id: "Select_Company",
//       names: ["Colan", "Others"],
//       label: "SelectCompany",
//     },
//     ,
//   ];
//   const Colan = [
//     {
//       name: "colan",
//       id: "colan",
//       names: ["Freasher", "Experience"],
//       label: "Colan",
//     },
//   ];

//   return (
//     <div className="flex flex-col w-full justify-start items-center gap-5 ">
//       <div className="lg:pt-12  w-full max-w-md rounded-2xl">
//         <p className=" heading text-2xl mb-4 font-semibold text-center tracking-widest ">
//           REGISTER
//         </p>
//         <div className="flex flex-col ">
//           {fields.map((field) => (
//             <CommmonTextField key={field.id} fields={field} formik={formik} />
//           ))}

//           <div className="flex w-full mt-2.5 gap-4 ">
//             {Select_Company.map((select) => (
//               <div className="w-[90%] lg:px-2 ">
//                 <CommonSelectField
//                   key={select.id}
//                   select={select}
//                   formik={formik}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="mt-2">
//             {formik.values.colan === "colan" &&
//               Colan.map((select) => (
//                 <CommonSelectField select={select} formik={formik} />
//               ))}
//           </div>

//           <p className="text-sm w-full justify-start pl-2 py-2.5 text-gray-600">
//             If Already registered? Please{" "}
//             <Link to={"/"}>
//               <span className="text-blue-400 cursor-pointer">sign in</span>
//             </Link>
//           </p>

//           <div className="flex justify-center mt-5">
//             <CommonButton
//               buttonName={"Register"}
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

// export default Register;

// import { useFormik } from "formik";
// import * as Yup from "yup";
// import React from "react";
// import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
// import CommonSelectField from "../../Components/ReusableComp/CommonSelectField";
// import CommonButton from "../../Components/ReusableComp/CommonButton";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { FaIdBadge } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmpassword: "",
//       Select_Company: "",
//       colan: "",
//       othercompany: "",
//       employeeId: "",
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//       email: Yup.string().email("Invalid email").required("Email is required"),
//       password: Yup.string()
//         .required("Password is required")
//         .min(6, "Password must be at least 6 characters")
//         .matches(/[!@#$%^&*]/, "Must contain at least one special character"),
//       confirmpassword: Yup.string()
//         .required("Confirm Password is required")
//         .oneOf([Yup.ref("password")], "Passwords must match"),
//       employeeId: Yup.string().when("colan", {
//         is: (val) => val === "Fresher" || val === "Experience",
//         then: () => Yup.string().required("Employee ID is required"),
//       }),
//     }),
//     onSubmit: async (val) => {
//       console.log("val", val);
//     },
//   });

//   const fields = [
//     {
//       name: "username",
//       type: "text",
//       id: "username",
//       label: "User Name",
//       placeholder: "Please Enter your UserName",
//       icon: <FaUser />,
//     },
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
//     {
//       name: "confirmpassword",
//       type: "password",
//       id: "confirmpassword",
//       label: "Confirm Password",
//       placeholder: "Please enter your Confirm Password",
//       icon: <FaLock />,
//     },
//   ];

//   console.log("formik.values.colan", formik.values.colan);

//   return (
//     <div className="flex flex-col w-full justify-start items-center gap-5">
//       <div className="lg:pt-12 w-full max-w-md rounded-2xl">
//         <p className="heading text-2xl mb-4 font-semibold text-center tracking-widest">
//           REGISTER
//         </p>
//         <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
//           {fields.map((field) => (
//             <CommmonTextField key={field.id} fields={field} formik={formik} />
//           ))}
//           {/* Select Company Dropdown */}
//           <div className="w-full mt-2">
//             <CommonSelectField
//               select={{
//                 name: "Select_Company",
//                 id: "Select_Company",
//                 names: ["Colan", "Others"],
//                 label: "Select Company",
//               }}
//               formik={formik}
//             />
//           </div>
//           {formik.values.Select_Company && (
//             <>
//               {formik.values.Select_Company === "Colan" ? (
//                 <div className="w-full mt-2">
//                   <CommonSelectField
//                     select={{
//                       name: "colan",
//                       id: "colan",
//                       names: ["Fresher", "Experience"],
//                       label: "Colan Type",
//                     }}
//                     formik={formik}
//                   />
//                 </div>
//               ) : (
//                 <div className="w-full mt-2">
//                   <CommmonTextField
//                     fields={{
//                       name: "othercompany",
//                       type: "text",
//                       id: "othercompany",
//                       label: "Other Company",
//                       placeholder: "Enter your othercompany ID",
//                       icon: <FaIdBadge />,
//                     }}
//                     formik={formik}
//                   />
//                 </div>
//               )}
//             </>
//           )}

//           {formik.values.colan  && (
//             <div className="w-full mt-2">
//               <CommmonTextField
//                 fields={{
//                   name: "employeeId",
//                   type: "text",
//                   id: "employeeId",
//                   label: "Employee ID",
//                   placeholder: "Enter your Employee ID",
//                   icon: <FaIdBadge />,
//                 }}
//                 formik={formik}
//               />
//             </div>
//           )}

//           <p className="text-sm w-full justify-start pl-2 py-2.5 text-gray-600">
//             If already registered? Please{" "}
//             <Link to={"/"}>
//               <span className="text-blue-400 cursor-pointer">Sign In</span>
//             </Link>
//           </p>
//           {/* Register Button */}
//           <div className="flex justify-center mt-4">
//             <CommonButton
//               buttonName={"Register"}
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
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
import CommonSelectField from "../../Components/ReusableComp/CommonSelectField";
import CommonButton from "../../Components/ReusableComp/CommonButton";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      Select_Company: "",
      colan: "",
      othercompany: "",
      employeeId: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/[!@#$%^&*]/, "Must contain at least one special character"),
      confirmpassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
      Select_Company: Yup.string().required("Select Company is required"),
      colan: Yup.string().when("Select_Company", {
        is: "Colan",
        then: Yup.string().required("Colan Type is required"),
        otherwise: Yup.string().notRequired(),
      }),
      employeeId: Yup.string().when(["Select_Company", "colan"], {
        is: (Select_Company, colan) =>
          Select_Company === "Colan" &&
          ["Fresher", "Experience"].includes(colan),
        then: Yup.string().required("Employee ID is required"),
        otherwise: Yup.string().notRequired(),
      }),
      othercompany: Yup.string().when("Select_Company", {
        is: "Others",
        then: Yup.string().required("Company Name is required"),
        otherwise: Yup.string().notRequired(),
      }),
    }),
    onSubmit: async (val) => {
      console.log("Submitted values", val);
    },
  });

  const fields = [
    {
      name: "username",
      type: "text",
      id: "username",
      label: "User Name",
      placeholder: "Please Enter your UserName",
      icon: <FaUser />,
    },
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
    {
      name: "confirmpassword",
      type: "password",
      id: "confirmpassword",
      label: "Confirm Password",
      placeholder: "Please enter your Confirm Password",
      icon: <FaLock />,
    },
  ];

  return (
    <div className="flex flex-col w-full justify-start items-center gap-5">
      <div className="lg:pt-12 w-full max-w-md rounded-2xl ">
        <p className=" heading max-md:w-[28%] sm::relative bottom-5   max-md:border-b-2 pb-2 border-blue-400 max-md:text-lg text-2xl mb-4 font-semibold sm:text-start lg:text-center tracking-widest ">
          REGISTER
        </p>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          {fields.map((field) => (
            <CommmonTextField key={field.id} fields={field} formik={formik} />
          ))}

          <div className="w-full mt-2">
            <CommonSelectField
              select={{
                name: "Select_Company",
                id: "Select_Company",
                names: ["Colan", "Others"],
                label: "Select Company",
              }}
              formik={formik}
            />
          </div>

          {formik.values.Select_Company === "Colan" && (
            <div className="w-full mt-2">
              <CommonSelectField
                select={{
                  name: "colan",
                  id: "colan",
                  names: ["Fresher", "Experience"],
                  label: "Colan Type",
                }}
                formik={formik}
              />
            </div>
          )}

          {formik.values.Select_Company === "Colan" &&
            ["Fresher", "Experience"].includes(formik.values.colan) && (
              <div className="w-full mt-2">
                <CommmonTextField
                  fields={{
                    name: "employeeId",
                    type: "text",
                    id: "employeeId",
                    label: "Employee ID",
                    placeholder: "Enter your Employee ID",
                    icon: <FaIdBadge />,
                  }}
                  formik={formik}
                />
              </div>
            )}

          {formik.values.Select_Company === "Others" && (
            <div className="w-full mt-2">
              <CommmonTextField
                fields={{
                  name: "othercompany",
                  type: "text",
                  id: "othercompany",
                  label: "Company Name ",
                  placeholder: "Enter your Company Name",
                  icon: <FaIdBadge />,
                }}
                formik={formik}
              />
            </div>
          )}

          <p className="text-sm w-full justify-start pl-2 py-2.5 text-gray-600">
            If already registered? Please{" "}
            <Link to={"/"}>
              <span className="text-blue-400 cursor-pointer">Sign In</span>
            </Link>
          </p>

          <div className="flex justify-center mt-4">
            <CommonButton
              buttonName={"Register"}
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
        </form>
      </div>
    </div>
  );
};

export default Register;
