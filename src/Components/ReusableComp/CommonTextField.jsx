// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import { IconButton, InputAdornment } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import TextField from "@mui/material/TextField";
// import { Checkbox, FormControlLabel } from "@mui/material";

// const CommmonTextField = ({ fields, formik }) => {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <div className="w-full">
//       <Box key={fields.id} sx={{ minWidth: "96%" }} className=" flex flex-col">
//         {fields.type === "checkbox" ? (
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={formik.values[fields.name]}
//                 onChange={formik.handleChange}
//                 name={fields.name}
//               />
//             }
//             label={fields.label}
//             className="text-sm"
//           />
//         ) : (
//           <>
//             <label
//               className={`text-sm flex justify-start font-medium mb-2 ${
//                 fields.design === "transparent" ? "text-white" : "text-gray-600"
//               }`}
//             >
//               {fields.label}
//             </label>
//             <TextField
//               id={fields.id}
//               variant={screenWidth > 640 ? "outlined" : "standard"}
//               name={fields.name}
//               type={
//                 fields.type === "password" && showPassword
//                   ? "text"
//                   : fields.type === "password"
//                   ? "password"
//                   : fields.type
//               }
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               placeholder={fields.placeholder}
//               error={Boolean(
//                 formik.touched[fields.name] && formik.errors[fields.name]
//               )}
//               helperText={
//                 formik.touched[fields.name] && formik.errors[fields.name]
//               }
//               FormHelperTextProps={{
//                 sx: {
//                   position: "absolute",
//                   bottom: -20,
//                   left: 0,
//                   fontSize: "0.75rem",
//                 },
//               }}
//               value={formik?.values[fields.name]}
//               multiline={false}
//               InputProps={{
//                 startAdornment: fields.icon && (
//                   <div
//                     className={`px-4  ${
//                       fields.design === "transparent"
//                         ? "text-white"
//                         : "text-gray-600"
//                     }`}
//                   >
//                     {fields.icon}
//                   </div>
//                 ),
//                 endAdornment: fields.type === "password" && (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={handleClickShowPassword}
//                       edge="end"
//                       sx={{ color: "white" }}
//                     >
//                       {showPassword ? (
//                         <Visibility fontSize="small" />
//                       ) : (
//                         <VisibilityOff fontSize="small" />
//                       )}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               InputLabelProps={{
//                 style: {
//                   color: fields.design === "transparent" ? "white" : "black",
//                 },
//               }}
//               sx={{
//                 "& .MuiInputBase-root": {
//                   ...(fields.design === "transparent" && {
//                     backgroundColor: "transparent",
//                     color: "white",
//                   }),
//                 },
//                 "& input": {
//                   ...(fields.design === "transparent" && {
//                     color: "white",
//                   }),
//                 },
//                 "& .MuiOutlinedInput-root": {
//                   width: fields.width,
//                   borderRadius: "10px",
//                   padding: "0.2px",
//                   height: "2.9rem",
//                   fontSize: "0.8rem",
//                   ...(fields.design === "transparent" && {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                       backgroundColor: "transparent",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "white",
//                       backgroundColor: "transparent",
//                     },
//                     "& input": {
//                       color: "white",
//                       backgroundColor: "transparent",
//                     },
//                     "& svg": {
//                       color: "white",
//                     },
//                   }),
//                 },
//                 "& .MuiInput-underline:before": {
//                   ...(fields.design === "transparent" && {
//                     borderBottomColor: "white",
//                   }),
//                 },
//                 "& .MuiInput-underline:hover:before": {
//                   ...(fields.design === "transparent" && {
//                     borderBottomColor: "white",
//                   }),
//                 },
//                 "& .MuiInput-underline:after": {
//                   ...(fields.design === "transparent" && {
//                     borderBottomColor: "white",
//                   }),
//                 },
//                 position: "relative",
//                 marginBottom: "5px",
//                 "& input:-webkit-autofill": {
//                   transition: "background-color 5000s ease-in-out 0s",
//                 },
//               }}
//             />
//           </>
//         )}
//       </Box>
//     </div>
//   );
// };

// export default CommmonTextField;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel } from "@mui/material";

const CommmonTextField = ({ fields, formik }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full">
      <Box key={fields.id} sx={{ minWidth: "96%" }} className="flex flex-col">
        {fields.type === "checkbox" ? (
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values[fields.name]}
                onChange={formik.handleChange}
                name={fields.name}
              />
            }
            label={fields.label}
            className="text-sm"
          />
        ) : (
          <>
            <label
              className={`text-sm flex justify-start font-medium mb-2 ${
                fields.design === "transparent" ? "text-white" : "text-gray-600"
              }`}
            >
              {fields.label}
            </label>
            <TextField
              id={fields.id}
              variant={screenWidth > 640 ? "outlined" : "standard"}
              name={fields.name}
              type={
                fields.type === "password" && showPassword
                  ? "text"
                  : fields.type === "password"
                  ? "password"
                  : fields.type
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={fields.placeholder}
              error={Boolean(
                formik.touched[fields.name] && formik.errors[fields.name]
              )}
              helperText={
                formik.touched[fields.name] && formik.errors[fields.name]
              }
              FormHelperTextProps={{
                sx: {
                  position: "absolute",
                  bottom: -20,
                  left: 0,
                  fontSize: "0.75rem",
                },
              }}
              value={formik?.values[fields.name]}
              multiline={false}
              InputProps={{
                startAdornment: fields.icon && (
                  <div
                    className={`px-4 max-md:text-sm  ${
                      fields.design === "transparent"
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {fields.icon}
                  </div>
                ),
                endAdornment: fields.type === "password" && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: "gray" }}
                    >
                      {showPassword ? (
                        <Visibility fontSize="small" />
                      ) : (
                        <VisibilityOff fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: {
                  color: fields.design === "transparent" ? "white" : "black",
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  ...(fields.design === "transparent" && {
                    backgroundColor: "transparent",
                    color: "white",
                  }),
                },
                "& input": {
                  ...(fields.design === "transparent" && {
                    color: "white",
                  }),
                  fontSize: {
                    xs: "0.80rem", // Mobile
                    sm: "0.80rem",
                    md: "0.90rem",
                    lg: "0.95rem", // Large screens
                  },
                },
                "& .MuiOutlinedInput-root": {
                  width: fields.width,
                  borderRadius: "10px",
                  padding: "10px",
                  height: "2.9rem",
                  // fontSize: "0.8rem",
                  // "@media (max-width:600px)": {
                  //   fontSize: "0.2rem",
                  // },

                  ...(fields.design === "transparent" && {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "#51a2ff",
                      backgroundColor: "transparent",
                    },

                    "& input": {
                      color: "white",
                      backgroundColor: "transparent",
                    },
                    "& svg": {
                      color: "white",
                    },
                  }),
                },
                "& input::placeholder": {
                  "@media (max-width:600px)": {
                    fontSize: "0.9rem",
                  },
                },
                position: "relative",
                marginBottom: "5px",
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0px 1000px transparent inset",
                  WebkitTextFillColor:
                    fields.design === "transparent" ? "white" : "black",
                  transition: "background-color 5000s ease-in-out 0s",
                  caretColor:
                    fields.design === "transparent" ? "white" : "black",
                },
                "& .MuiInput-underline:before": {
                  ...(fields.design === "transparent" && {
                    borderBottomColor: "white",
                  }),
                },
              }}
            />
          </>
        )}
      </Box>
    </div>
  );
};

export default CommmonTextField;
