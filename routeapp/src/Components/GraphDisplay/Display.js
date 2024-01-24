import React from "react";
import "./Display.css";
import Graph from "../Graph/Graph";
import GraphTools from "../GraphTools/GraphTools";
import Table from "../Table/Table";

const Display = () => {
  return (
    <div className="graph-container">
      <GraphTools />
      <Graph />
      <Table />
    </div>
  );
};

export default Display;
