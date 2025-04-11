import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel } from "@mui/material";

const CommmonTextField = ({ fields, formik }) => {
  return (
    <div className="w-full">
      <Box
        key={fields.id}
        sx={{ m: 1, width: "100%" }}
        className=" flex flex-col"
      >
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
            <label className=" text-sm font-medium text-gray-600 mb-2">
              {fields.label}
            </label>
            <TextField
              id={fields.id}
              variant="outlined"
              name={fields.name}
              type={fields.type}
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
                  bottom: -3, // Adjust based on spacing needs
                  left: 0,
                  fontSize: "0.75rem",
                },
              }}
              value={formik?.values[fields.name]}
              multiline={fields.type === "auth_key"}
              InputProps={{
                startAdornment: fields.icon && (
                  <div className="px-4 text-gray-500">{fields.icon}</div>
                ),
              }}
              sx={{
                "& .MuiFormHelperText-root": {
                  height: "0", // Prevent height shift
                },
                "& .MuiOutlinedInput-root": {
                  width: fields.width,
                  // height: fields.height,
                  borderRadius: "10px",
                  padding: "0.2px ",
                  height: "2.9rem",
                  fontSize: "0.8rem",
                },
                position: "relative", // Required to anchor absolute helper text
                marginBottom: "5px", // Ensure space below TextField
              }}
            />
          </>
        )}
      </Box>
    </div>
  );
};

export default CommmonTextField;
