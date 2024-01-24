import React from "react";
import "./MinimalSpend.css";
import useMinimalSpend from "./Hook/useMinimalSpend";
import { Range } from "react-range";

const MinimalSpend = () => {
  const { value, handleChange } = useMinimalSpend();
  return (
    <div className="minimal-spend-container">
      <div className="slider">
        <p className="text-top">${value}</p>
        <Range
          className="slider-color"
          type="range"
          step={0.1}
          min={0}
          max={5000}
          values={value}
          onChange={(values) => handleChange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="track" // Apply your CSS class here
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="thumb" // Apply your CSS class here
            />
          )}
        />
        <div className="spend-container">
          <p className="text-bottom">$0</p>
          <p className="text-bottom">$5000</p>
        </div>
      </div>
    </div>
  );
};

export default MinimalSpend;
