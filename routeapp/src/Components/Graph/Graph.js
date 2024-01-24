import React from "react";
import "./Graph.css";
import useGraph from "./Hook/useGraph";
import { Line } from "react-chartjs-2";

const Graph = () => {
  const { chartData, options } = useGraph();
  return (
    <div className="chart-container">
      <div className="table-center">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Graph;
