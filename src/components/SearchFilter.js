import React from "react";

export const SearchFilter = ({ handleOnGenderChange, handleonSearch }) => {
  return (
    <div className="row">
      <div className="col">
        <input type="text" className="form-control" onChange={handleonSearch} />
      </div>
      <div className="col">
        <select
          name=""
          id=""
          className="form-control"
          onChange={handleOnGenderChange}
        >
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
};
