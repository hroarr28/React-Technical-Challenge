import { createContext, useState } from "react";

export const GraphContext = createContext("");

export const GraphProvider = ({ children }) => {
  const [value, setValue] = useState(2500);
  const [gender, setGender] = useState("all");
  const [region, setRegion] = useState("Select Region");
  const [usersPerMonth, setUsersPerMonth] = useState({
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sept: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  });
  const [totalCostPerMonth, setTotalCostPerMonth] = useState(0);

  const contextValue = {
    value,
    gender,
    region,
    usersPerMonth,
    totalCostPerMonth,
    setTotalCostPerMonth,
    setUsersPerMonth,
    setRegion,
    setValue,
    setGender,
  };

  return (
    <GraphContext.Provider value={contextValue}>
      {children}
    </GraphContext.Provider>
  );
};
