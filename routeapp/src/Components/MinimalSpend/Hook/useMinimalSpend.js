import React, { useState, useContext } from "react";
import { GraphContext } from "../../Context/context";

const useMinimalSpend = () => {
  const { value, setValue } = useContext(GraphContext);

  const handleChange = (values) => {
    setValue(values);
  };
  return { value, handleChange };
};

export default useMinimalSpend;
