import React from "react";
import { Rate } from "antd";

const Rating = ({ value }) => (
  <>
    <Rate
      allowHalf
      value={value?.rate || 0}
      disabled
      style={{ fontSize: 12 }} // adjust size here
    />
  </>
);

export default Rating;
