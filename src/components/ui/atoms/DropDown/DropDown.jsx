import React from "react";

const CustomDropDown = ({getType}) => {
  return (
    <>
      <select onChange={(event) => getType(event)}>
        <option value="company">Company</option>
        <option value="driver">Driver</option>
        <option value="vehicle">Vehicle</option>
      </select>
    </>
  );
};

export default CustomDropDown;
