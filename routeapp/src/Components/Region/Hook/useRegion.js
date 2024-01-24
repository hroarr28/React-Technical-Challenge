import React, { useContext, useEffect, useState } from "react";
import { GraphContext } from "../../Context/context";
import { users } from "../../../TestFile/users";

const useRegion = () => {
  const { region, setRegion } = useContext(GraphContext);
  const [uniqueRegions, setUniqueRegions] = useState([" Select Region"]);

  console.log(region);

  useEffect(() => {
    const findUniqueRegions = [];
    users.forEach((user) => {
      if (!findUniqueRegions.includes(user.region)) {
        findUniqueRegions.push(user.region);
      }
    });

    setUniqueRegions(findUniqueRegions);
  }, [users]);

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return {
    region,
    uniqueRegions,
    handleChange,
  };
};

export default useRegion;
