import { useContext, useEffect } from "react";
import { users } from "../../../TestFile/users";
import { GraphContext } from "../../Context/context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const useGraph = () => {
  const {
    value,
    gender,
    region,
    usersPerMonth,
    setUsersPerMonth,
    setTotalCostPerMonth,
    totalCostPerMonth,
  } = useContext(GraphContext);

  console.log(usersPerMonth);

  useEffect(() => {
    const newUsersPerMonth = {
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
    };
    const filteredUsers = users.filter((user) => {
      const spendCondition = user.spend < value;
      const genderCondition =
        gender === "all" || user.gender.toLowerCase() === gender.toLowerCase();
      const regioncondition =
        region === "Select Region" ||
        region === "" ||
        user.region.toLowerCase() === region.toLowerCase();

      return spendCondition && genderCondition && regioncondition;
    });

    filteredUsers.forEach((user) => {
      switch (user.birthday) {
        case 1:
          newUsersPerMonth.Jan++;
          break;
        case 2:
          newUsersPerMonth.Feb++;
          break;
        case 3:
          newUsersPerMonth.Mar++;
          break;
        case 4:
          newUsersPerMonth.Apr++;
          break;
        case 5:
          newUsersPerMonth.May++;
          break;
        case 6:
          newUsersPerMonth.Jun++;
          break;
        case 7:
          newUsersPerMonth.Jul++;
          break;
        case 8:
          newUsersPerMonth.Aug++;
          break;
        case 9:
          newUsersPerMonth.Sept++;
          break;
        case 10:
          newUsersPerMonth.Oct++;
          break;
        case 11:
          newUsersPerMonth.Nov++;
          break;
        case 12:
          newUsersPerMonth.Dec++;
          break;
      }
    });
    setUsersPerMonth(newUsersPerMonth);

    const cumulativeCost = Object.values(newUsersPerMonth).reduce(
      (acc, current) => {
        const lastValue = acc.length > 0 ? acc[acc.length - 1] : 0;
        return [...acc, lastValue + current * 5];
      },
      []
    );

    if (JSON.stringify(cumulativeCost) !== JSON.stringify(totalCostPerMonth)) {
      setTotalCostPerMonth(cumulativeCost);
    }
  }, [value, gender, region, totalCostPerMonth]);

  console.log(totalCostPerMonth);

  const monthlyData = Object.values(usersPerMonth);

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users Birthdays Per Month",
        data: monthlyData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderWidth: 3,
        fill: false,
      },
      {
        label: "Cumulative Cost To Give $5 Voucher",
        data: totalCostPerMonth,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderWidth: 3,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "User Data Analysis",
      },
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count / Cumulative Cost ($)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return {
    chartData,
    options,
  };
};

export default useGraph;
