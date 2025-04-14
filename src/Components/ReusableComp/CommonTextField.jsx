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
      <Box key={fields.id} sx={{ minWidth: "96%" }} className=" flex flex-col">
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
                  bottom: -3,
                  left: 0,
                  fontSize: "0.75rem",
                },
              }}
              value={formik?.values[fields.name]}
              multiline={false} // always single-line now
              InputProps={{
                startAdornment: fields.icon && (
                  <div className="px-4 text-gray-500">{fields.icon}</div>
                ),
                endAdornment: fields.type === "password" && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ fontSize: "5px" }}
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
              sx={{
                "& .MuiFormHelperText-root": {
                  height: "0",
                },
                "& .MuiOutlinedInput-root": {
                  width: fields.width,
                  borderRadius: "10px",
                  padding: "0.2px ",
                  height: "2.9rem",
                  fontSize: "0.8rem",
                },
                position: "relative",
                marginBottom: "5px",
              }}
            />
          </>
        )}
      </Box>
    </div>
  );
};

export default CommmonTextField;
