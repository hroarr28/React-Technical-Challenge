import React from "react";
import MinimalSpend from "../MinimalSpend/MinimalSpend";
import GenderButtons from "../Gender/GenderButtons";
import Region from "../Region/Region";
import "./GraphTools.css";

const GraphTools = () => {
  return (
    <div className="display-tools">
      <MinimalSpend />
      <GenderButtons />
      <Region />
    </div>
  );
};

export default GraphTools;
