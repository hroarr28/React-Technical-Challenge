import React, { useState, useContext } from "react";
import "./MinimalSpend.css";
import useMinimalSpend from "./Hook/useMinimalSpend";

const MinimalSpend = () => {
  const { value, handleChange } = useMinimalSpend();
  return (
    <div className="minimal-spend-container">
      <div className="slider">
        <p>${value}</p>
        <input
          type="range"
          min="0"
          max="5000"
          value={value}
          onChange={handleChange}
        />
        <div className="spend-container">
          <p>$0</p>
          <p>$5,000</p>
        </div>
      </div>
    </div>
  );
};

export default MinimalSpend;
