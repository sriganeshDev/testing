// import * as React from "react";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import FormHelperText from "@mui/material/FormHelperText";

// export default function CommonSelectField({ select, formik }) {
//   return (
//     <div>
//       <FormControl
//         required
//         sx={{ minWidth: "100%" }}
//         error={Boolean(
//           formik.touched[select.name] && formik.errors[select.name]
//         )}
//       >
//         <label className="text-sm font-medium text-gray-600  mb-2">
//           {select.label}
//         </label>
//         <Select
//           id={select.name}
//           name={select.name}
//           value={formik.values[select.name]}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           displayEmpty
//           sx={{
//             borderRadius: "10px",
//             "& .MuiSelect-select": {
//               padding: "10px 14px",
//               fontSize: "0.8rem",
//             },
//           }}
//         >
//           <MenuItem disabled value="">
//             <p className="text-gray-400">Select One</p>
//           </MenuItem>
//           {select?.names.map((val) => (
//             <MenuItem key={val} value={val}>
//               {val}
//             </MenuItem>
//           ))}
//         </Select>
//         {formik.touched[select.name] && formik.errors[select.name] && (
//           <FormHelperText>{formik.errors[select.name]}</FormHelperText>
//         )}
//       </FormControl>
//     </div>
//   );
// }

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";

export default function CommonSelectField({ select, formik }) {
  return (
    <div>
      <FormControl
        required
        sx={{
          minWidth: "100%",
          "& .MuiInputBase-root": {
            borderRadius: "10px",
            color: "black",
            backgroundColor: "transparent",
            border: "1px solid white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        }}
        error={Boolean(
          formik.touched[select.name] && formik.errors[select.name]
        )}
      >
        <label className="text-sm  flex justify-start font-medium text-white mb-2">
          {select.label}
        </label>
        <Select
          id={select.name}
          name={select.name}
          value={formik.values[select.name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          displayEmpty
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "white",
                color: "white",
                "& .MuiMenuItem-root": {
                  color: "black",
                },
              },
            },
          }}
          sx={{
            "& .MuiSelect-select": {
              padding: "10px 14px",
              fontSize: "0.8rem",
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },

            // Hide all borders and outlines
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "white",
            },

            "& input:-webkit-autofill": {
              WebkitTextFillColor: "white",
              WebkitBoxShadow: "0 0 0px 1000px transparent inset",
              caretColor: "white",
              transition: "background-color 5000s ease-in-out 0s",
            },
          }}
        >
          <MenuItem disabled value="">
            <p className="text-grey">Select One</p>
          </MenuItem>
          {select?.names.map((val) => (
            <MenuItem key={val} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>

        {formik.touched[select.name] && formik.errors[select.name] && (
          <FormHelperText>{formik.errors[select.name]}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
