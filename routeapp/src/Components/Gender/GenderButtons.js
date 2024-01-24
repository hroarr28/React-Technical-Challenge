import React, { useContext, useState } from "react";
import useGenderButtons from "./Hook/useGenderButtons";
import "./GenderButtons.css";

const GenderButtons = () => {
  const {
    handleAllClick,
    handleFemaleClick,
    handleMaleClick,
    maleClicked,
    femaleClicked,
    allClicked,
  } = useGenderButtons();

  return (
    <div className="gender-buttons">
      <button
        className={maleClicked ? "button-style-clicked" : "button-style"}
        onClick={() => handleMaleClick()}
      >
        Male
      </button>
      <button
        className={femaleClicked ? "button-style-clicked" : "button-style"}
        onClick={() => handleFemaleClick()}
      >
        Female
      </button>
      <button
        className={allClicked ? "button-style-clicked" : "button-style"}
        onClick={() => handleAllClick()}
      >
        All
      </button>
    </div>
  );
};

export default GenderButtons;
