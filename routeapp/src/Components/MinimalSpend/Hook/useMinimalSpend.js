import React, { useState, useContext } from "react";
import { GraphContext } from "../../Context/context";

const useMinimalSpend = () => {
  const { value, setValue } = useContext(GraphContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return { value, handleChange };
};

export default useMinimalSpend;
