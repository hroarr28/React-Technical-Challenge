import React, { useContext } from "react";
import { GraphContext } from "../Context/context";
import "./GenderButtons.css";

const GenderButtons = () => {
  const { gender, setGender } = useContext(GraphContext);

  return (
    <div className="gender-buttons">
      <button onClick={() => setGender("male")}>Male</button>
      <button onClick={() => setGender("female")}>Female</button>
      <button onClick={() => setGender("all")}>All</button>
    </div>
  );
};

export default GenderButtons;
