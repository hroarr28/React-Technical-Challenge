import { useContext, useMemo } from "react";
import { useTable as useReactTable } from "react-table";
import { GraphContext } from "../../Context/context";

const useTable = () => {
  const { usersPerMonth, totalCostPerMonth } = useContext(GraphContext);

  const combinedData = useMemo(() => {
    return Object.entries(usersPerMonth).map(([month, count], index) => {
      const cost = totalCostPerMonth[index];
      return { month, count, cost };
    });
  }, [usersPerMonth, totalCostPerMonth]);

  const columns = useMemo(
    () => [
      {
        Header: "Month",
        accessor: "month",
      },
      {
        Header: "Users",
        accessor: "count",
      },
      {
        Header: "Cumulative Cost",
        accessor: "cost",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useReactTable({ columns, data: combinedData });

  return {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    useReactTable,
  };
};

export default useTable;
