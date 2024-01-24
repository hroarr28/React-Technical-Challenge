import React from "react";
import useRegion from "./Hook/useRegion";

const Region = () => {
  const { region, uniqueRegions, handleChange } = useRegion();
  return (
    <div>
      <select value={region} onChange={handleChange}>
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
