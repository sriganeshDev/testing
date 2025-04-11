import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

export default function CommonSelectField({ select, formik }) {
  return (
    <div>
      <FormControl
        required
        sx={{ minWidth: "100%" }}
        error={Boolean(
          formik.touched[select.name] && formik.errors[select.name]
        )}
      >
        <label className="text-sm font-medium text-gray-600  mb-2">
          {select.label}
        </label>
        <Select
          id={select.name}
          name={select.name}
          value={formik.values[select.name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          displayEmpty
          sx={{ borderRadius: "15px" }}
        >
          <MenuItem disabled value="">
            <p className="text-gray-400">Select One</p>
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
