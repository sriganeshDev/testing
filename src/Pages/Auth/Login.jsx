// import { useFormik } from "formik";
// import * as Yup from "yup";
// import React from "react";
// import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
// import CommonSelectField from "../../Components/ReusableComp/CommonSelectField";
// import CommonButton from "../../Components/ReusableComp/CommonButton";

// const Login = () => {
//   //   const [options, setOptions] = React.useState({
//   //     1: "",
//   //     2: "",
//   //   });

//   //   const handleChange = (event, id) => {
//   //     setOptions((prev) => ({
//   //       ...prev,
//   //       [id]: event.target.value,
//   //     }));
//   //     console.log("value", options);
//   //   };
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
//       colan: Yup.string().required("Please select your work type"),
//       others: Yup.string().required("Please select an option"),
//       employeeId: Yup.string().when("colan", {
//         is: (val) => val === "Freasher" || val === "Experience",
//         then: Yup.string().required("This field is required"),
//         otherwise: Yup.string(),
//       }),
//     }),

//     onSubmit: async (val) => {
//       console.log("val", val);
//     },
//   });
//   const fields = [
//     {
//       name: "username",
//       type: "username",
//       id: "username",
//       label: "UserName",
//       placeholder: "please Enter your UserName",
//     },
//     {
//       name: "email",
//       type: "email",
//       id: "email",
//       label: "Email",
//       placeholder: "please Enter your Email",
//     },
//     {
//       name: "password",
//       type: "password",
//       id: "password",
//       label: "Password",
//       placeholder: "please enter your password",
//     },
//     {
//       name: "confirmpassword",
//       type: "confirmpassword",
//       id: "confirmpassword",
//       label: "ConfirmPassword",
//       placeholder: "please enter your Confirmpassword",
//     },
//   ];
//   const Select_Values = [
//     {
//       name: "colan",
//       id: "colan",
//       names: ["Freasher", "Experience"],
//       label: "Work Type",
//     },
//     {
//       name: "others",
//       id: "others",
//       names: ["Other-Company"],
//       label: "If other comapny",
//     },
//   ];

//   return (
//     <div className="flex flex-col  w-[100%]  justify-around gap-5 items-center">
//       <p className=" text-2xl   font-semibold text-center tracking-widest">
//         REGISTER
//       </p>
//       <div className=" p-3 w-[100%] flex flex-col justify-center items-center bg-gray-100 rounded-2xl">
//         {fields.map((field) => (
//           <div className="w-[70%]">
//             <CommmonTextField fields={field} formik={formik} />
//           </div>
//         ))}
//         <div className="flex  w-[70%]  max-md:flex-col px-1 justify-around gap-3   ">
//           {Select_Values.map((select) => (
//             <div className="w-[45%]  ">
//               <CommonSelectField
//                 key={select.id}
//                 select={select}
//                 formik={formik}
//               />
//             </div>
//           ))}
//         </div>
//         {(formik.values.colan === "Freasher" ||
//           formik.values.colan === "Experience") && (
//           <CommmonTextField
//             fields={{
//               name: "employeeId",
//               type: "text",
//               id: "employeeId",
//               label: "Employee Id",
//               placeholder: "Please provide Employee Id ",
//             }}
//             formik={formik}
//           />
//         )}
//         <div className="w-[100%] flex mt-5  justify-center items-center">
//           <CommonButton
//             buttonName={"Register"}
//             type="submit"
//             handlesubmit={formik.handleSubmit}
//             design={{
//               backgroundColor: "#202b61",

//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "170px",
//               height: "50px",
//               fontSize: "15px",
//               borderRadius: "10px",
//             }}
//             hoverStyles={{
//               backgroundColor: "#fff",
//               border: "2px solid #5c7dcf",
//               color: "#202b61",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
import CommonSelectField from "../../Components/ReusableComp/CommonSelectField";
import CommonButton from "../../Components/ReusableComp/CommonButton";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa";

const Login = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      colan: "",
      others: "",
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
      colan: Yup.string().required("Please select your work type"),
      others: Yup.string().required("Please select an option"),
      employeeId: Yup.string().when("colan", {
        is: (val) => val === "Freasher" || val === "Experience",
        then: Yup.string().required("This field is required"),
        otherwise: Yup.string(),
      }),
    }),
    onSubmit: async (val) => {
      console.log("val", val);
    },
  });

  const fields = [
    {
      name: "username",
      type: "text",
      id: "username",
      label: "UserName",
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

  const Select_Values = [
    {
      name: "colan",
      id: "colan",
      names: ["Freasher", "Experience"],
      label: "Colan",
    },
    {
      name: "others",
      id: "others",
      names: ["Other-Company"],
      label: "If other company",
    },
  ];

  return (
    <div className="flex flex-col w-full justify-around gap-5 items-center lg:p-4">
      <div className="lg:p-6 w-full max-w-md rounded-2xl">
        <p className="text-2xl font-semibold text-center tracking-widest">
          REGISTER
        </p>
        <div className="flex flex-col ">
          {fields.map((field) => (
            <CommmonTextField key={field.id} fields={field} formik={formik} />
          ))}

          <div className="flex w-full mt-2.5 gap-4 ">
            {Select_Values.map((select) => (
              <div className="w-[90%] lg:px-2 ">
                <CommonSelectField
                  key={select.id}
                  select={select}
                  formik={formik}
                />
              </div>
            ))}
          </div>

          <div className="mt-2">
            {(formik.values.colan === "Freasher" ||
              formik.values.colan === "Experience") && (
              <CommmonTextField
                fields={{
                  name: "employeeId",
                  type: "text",
                  id: "employeeId",
                  label: "Employee Id",
                  placeholder: "Please provide Employee Id ",
                  icon: <FaIdBadge />,
                }}
                formik={formik}
              />
            )}
          </div>

          <div className="flex justify-center mt-5">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
