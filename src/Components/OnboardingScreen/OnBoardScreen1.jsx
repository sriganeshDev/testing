import React, { useEffect, useState } from "react";
import bgimg from "../../assets/bg.svg";
import { FaArrowLeft, FaArrowRight, FaIdBadge } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import OnBoardLoading from "./OnBoardLoading";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonSelectField from "../ReusableComp/CommonSelectField";
import CommmonTextField from "../ReusableComp/CommonTextField";
import CommonButton from "../ReusableComp/CommonButton";

const OnBoardScreen1 = () => {
  const [selection, setSelection] = useState("");
  const [otherUser, setOtherUser] = useState({ userType: "otherUser" });
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      employeeType: "",
      employeeId: "",
    },
    validationSchema: Yup.object({
      employeeType: Yup.string()
        .required("Colan Type is required")
        .oneOf(["Fresher", "Experience"], "Invalid Colan Type"),

      employeeId: Yup.string().when("colan", {
        is: (colan) => ["Fresher", "Experience"].includes(colan),
        then: () => Yup.string().required("Employee ID is required"),
        otherwise: () => Yup.string().notRequired(),
      }),
    }),

    onSubmit: async (val) => {
      const data = {
        userType: selection,
        ...val,
      };
      navigate("/login/register", { state: data });
    },
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return loading ? (
    <OnBoardLoading />
  ) : (
    <form
      className=" h-screen relative w-full flex flex-col   bg-cover bg-center justify-center items-center max-md:justify-end"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {selection == "Colan" && (
        <div className=" w-[90%]  max-sm:hidden relative  bottom-36 flex justify-start items-start ">
          <button
            type="button"
            onClick={() => {
              setSelection(false);
              formik.resetForm();
            }}
            className="flex items-center gap-2 text-white hover:text-blue-500   px-4 py-2 rounded-full transition-all duration-300"
          >
            <FaArrowLeft /> Back
          </button>
        </div>
      )}
      <div className=" max-md:h-[70%]  h-[30%]  flex w-full flex-col md:justify-evenly justify-between">
        <div className="relative z-10 w-full text-white text-center px-6 sm:px-7  flex flex-col max-md:gap-2 md:gap-5 gap-7 items-center">
          {selection !== "Colan" && (
            <>
              <h2 className="  text-5xl max-md:text-3xl font-bold">
                Welcome to the Canteen App!
              </h2>
              <p className=" max-md:text-xs">Let's get you started</p>
              <p className="text-sm max-md:text-xs max-md:mt-5">
                Please choose your user type to continue:
              </p>

              <div className="flex gap-6 max-md:mt-6">
                <button
                  onClick={() => setSelection("Colan")}
                  className="bg-[#3e97ff] text-white max-md:text-xs font-semibold py-2 px-6 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-300"
                >
                  Colan User
                </button>
                <button
                  onClick={() =>
                    navigate("login/register", { state: otherUser })
                  }
                  type="button"
                  className="bg-[#3e97ff] text-white max-md:text-xs font-semibold py-2 px-6 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-300"
                >
                  Other User
                </button>
              </div>
            </>
          )}

          {selection === "Colan" && (
            <>
              <p className="max-md:text-xl font-semibold text-3xl mb-5 ">
                Select Experience or Fresher on colan
              </p>
              <div className="  max-md:w-[90%] md:w-[50%] lg:w-[30%]">
                <CommonSelectField
                  select={{
                    name: "employeeType",
                    id: "employeeType",
                    names: ["Fresher", "Experience"],
                    label: "Colan Employee Type",
                  }}
                  formik={formik}
                />
              </div>
            </>
          )}
          {selection === "Colan" &&
            ["Fresher", "Experience"].includes(formik.values.employeeType) && (
              <div className=" max-md:w-[90%] md:w-[50%] lg:w-[30%] mt-2">
                <CommmonTextField
                  fields={{
                    name: "employeeId",
                    type: "text",
                    id: "employeeId",
                    label: "Employee ID",
                    placeholder: "Enter your Employee ID",
                    icon: <FaIdBadge />,
                    design: "transparent",
                  }}
                  formik={formik}
                />
              </div>
            )}
          {/* {selection === "Others" && (
                <div className=" max-md:w-[90%] w-[30%] mt-2">
                  <CommmonTextField
                    fields={{
                      name: "othercompany",
                      type: "text",
                      id: "othercompany",
                      label: "Company Name ",
                      placeholder: "Enter your Company Name",
                      icon: <FaIdBadge />,
                      design: "transparent",
                    }}
                    formik={formik}
                  />
                </div>
              )} */}
        </div>
        {selection === "Colan" && (
          <div className="flex   w-full md:hidden   lg:hidden  max-md:mb-7 justify-between  ">
            <button
              type="button"
              onClick={() => setSelection(false)}
              className="flex items-center gap-2 text-white hover:text-blue-600   px-4 py-2 rounded-full transition-all duration-300"
            >
              <FaArrowLeft /> Back
            </button>

            <button
              type="button"
              onClick={formik.handleSubmit}
              className="flex items-center gap-2 text-white hover:text-blue-600   px-4 py-2 rounded-full transition-all duration-300"
            >
              Continue <FaArrowRight />
            </button>
          </div>
        )}
        {["Fresher", "Experience"].includes(formik.values.employeeType) &&
          selection == "Colan" && (
            <div className="flex max-sm:hidden justify-center mt-5">
              <CommonButton
                type="button"
                buttonName={"Next"}
                // type="submit"
                handlesubmit={formik.handleSubmit}
                // onClick={() => navigate("/login/register")}
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
          )}
      </div>
    </form>
  );
};

export default OnBoardScreen1;
