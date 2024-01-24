import React, { useContext, useState } from "react";
import { GraphContext } from "../../Context/context";

const useGenderButtons = () => {
  const { setGender } = useContext(GraphContext);

  const [maleClicked, setMaleClicked] = useState(false);
  const [femaleClicked, setFemaleClicked] = useState(false);
  const [allClicked, setAllClicked] = useState(true);

  const handleMaleClick = () => {
    setGender("male");
    setMaleClicked(true);
    setAllClicked(false);
    setFemaleClicked(false);
  };
  const handleFemaleClick = () => {
    setGender("female");
    setFemaleClicked(true);
    setAllClicked(false);
    setMaleClicked(false);
  };
  const handleAllClick = () => {
    setGender("all");
    setAllClicked(true);
    setFemaleClicked(false);
    setMaleClicked(false);
  };

  return {
    handleAllClick,
    handleFemaleClick,
    handleMaleClick,
    maleClicked,
    femaleClicked,
    allClicked,
  };
};

export default useGenderButtons;
