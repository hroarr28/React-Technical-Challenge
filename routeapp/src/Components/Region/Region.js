import React from "react";
import useRegion from "./Hook/useRegion";
import "./Region.css";

const Region = () => {
  const { region, uniqueRegions, handleChange } = useRegion();
  return (
    <div className="region-container">
      <select className="dropdown-style" value={region} onChange={handleChange}>
        <option value="">Select Region</option>
        {uniqueRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Region;
