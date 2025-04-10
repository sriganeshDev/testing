import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel } from "@mui/material";

const CommmonTextField = ({ fields, formik }) => {
  return (
    <div className="w-full">
      <Box
        key={fields.id}
        sx={{ m: 1, width: "96%" }}
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
              value={formik?.values[fields.name]}
              multiline={fields.type === "auth_key"}
              rows={fields.type === "auth_key" ? 4 : undefined}
              sx={{
                "& .MuiOutlinedInput-root": {
                  width: fields.width,
                  height: fields.height,
                  borderRadius: "20px",
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
