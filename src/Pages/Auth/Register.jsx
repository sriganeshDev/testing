import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
import CommonButton from "../../Components/ReusableComp/CommonButton";
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/[!@#$%^&*]/, "Must contain at least one special character"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: async (val) => {
      let data = {
        ...val,
        ...state,
      };
      // console.log("Register Values", data);

      try {
        const response = await axios.post(
          "http://localhost:8002/auth/signup",
          data
        );

        if (
          response.request.status === 201 ||
          response.request.status === 200
        ) {
          formik.resetForm();
          toast.success(response.data.message);
          navigate("/login");
        } else {
          toast.error(`${response?.data.message}`);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });

  const registerFields = [
    {
      name: "userName",
      type: "text",
      id: "userName",
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
      name: "confirmPassword",
      type: "password",
      id: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Please enter your Confirm Password",
      icon: <FaLock />,
    },
  ];

  return (
    <div className="flex flex-col w-full lg:justify-center sm:justify-start md:justify-center items-center gap-5">
      <div className="lg:pt-12 px-5 md:px-8 lg:px-10 pb-5 w-full max-w-md rounded-2xl">
        <p className="heading max-md:w-[40%] sm:relative bottom-5 max-md:border-b-2 pb-2 border-blue-400 max-md:text-lg text-2xl max-md:mb-5 font-semibold sm:text-start lg:text-center tracking-widest">
          Sign up
        </p>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          {registerFields.map((field) => (
            <MemoizedField key={field.id} field={field} formik={formik} />
          ))}

          <p className="text-sm w-full justify-start pl-2 py-2.5 text-gray-600">
            If already registered? Please{" "}
            <Link to={"/login"}>
              <span className="text-blue-400 cursor-pointer">Sign In</span>
            </Link>
          </p>

          <div className="flex max-sm:hidden justify-center mt-5">
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

          <div className="flex md:hidden lg:hidden justify-end mt-4">
            <button
              type="button"
              onClick={formik.handleSubmit}
              className="flex items-center gap-2 text-black px-4 py-2 rounded-full hover:text-blue-500 transition-all duration-300"
            >
              Continue <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const MemoizedField = React.memo(({ field, formik }) => {
  return <CommmonTextField fields={field} formik={formik} />;
});

export default Register;
