import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FaArrowRight, FaEnvelope, FaLock } from "react-icons/fa";
import CommonButton from "../../Components/ReusableComp/CommonButton";
import CommmonTextField from "../../Components/ReusableComp/CommonTextField";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

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
      try {
        const response = await axios.post(
          "http://localhost:8002/auth/signin",
          val
        );
        console.log(response);
        if (
          response.request.status === 201 ||
          response.request.status === 200
        ) {
          formik.resetForm();
          const token = response.data.token;
          localStorage.setItem("token", token);
          toast.success(response.data.message);
          // navigate("/login");
        } else {
          toast.error(`${response?.data.message}`);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
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
    <div className="flex flex-col w-full min-md:justify-center   min-md:items-center gap-5 ">
      <div className="lg:pt-12 px-5 md:px-8 lg:px-10 w-full max-w-md rounded-2xl">
        <p className=" heading max-md:w-[35%] sm::relative bottom-5   max-md:border-b-2 pb-2 border-blue-400 max-md:text-lg text-2xl max-md:mb-5 font-semibold sm:text-start lg:text-center tracking-widest ">
          Sign in
        </p>
        <div className="flex flex-col gap-3 ">
          {fields.map((field) => (
            <CommmonTextField key={field.id} fields={field} formik={formik} />
          ))}
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
          <p className="text-sm w-full justify-start pl-2  text-gray-600">
            If you are not registered, please{" "}
            <Link to="register">
              <span className="text-blue-400 cursor-pointer">Sign Up</span>
            </Link>
          </p>

          <div className="flex max-sm:hidden justify-center mt-5">
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

          <div className="flex  md:hidden lg:hidden justify-end mt-8">
            <button
              onClick={formik.handleSubmit}
              className="flex items-center gap-2 text-black  px-4 py-2 rounded-full hover:text-blue-500 transition-all duration-300"
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
