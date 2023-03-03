import React from "react";
import { useContext } from "react";
import quesnContext from "../ContextPage/Context";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

function DashBoard() {
  let value = useContext(quesnContext);
  let [changer, setChanger] = value;
  // console.log(changer);

  let data = [
    { name: "No Of Correct Answers", value: changer.correct },
    {
      name: "No Of Incorrect Answers",
      value: eval(changer.tot * 10 - changer.correct),
    },
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <React.StrictMode>
      <div className="h-5/6 bg-white rounded-t-3xl sm:hidden block w-full">
        {/* left Side */}

        <div className="w-full flex flex-col justify-center items-center gap-2  p-2 ">
          {/* <div className="w-3/4 text-center p-2">
            <p className="text-2xl font-bold">Quiz Analysis</p>
          </div> */}
          <div className="col1 bg-white w-3/4 p-2 cursor-pointer border-2 border-gray-300 rounded-md">
            <p className="text-lg text-blue-400">No Of Quiz Attended</p>
            <p className="text-6xl font-bold text-end ">{changer.tot}</p>
          </div>
          <div className="col2 bg-white w-3/4 p-2 cursor-pointer border-2 border-gray-300 rounded-md">
            <p className="text-lg text-blue-400">Correct Answers</p>
            <p className="text-3xl text-green-600 font-bold text-end">
              {changer.correct}
            </p>
          </div>
          <div className="col3 bg-white w-3/4 p-2 cursor-pointer border-2 border-gray-300 rounded-md">
            <p className="text-lg text-blue-400">Incorrect Answers</p>
            <p className="text-3xl text-red-600 font-bold text-end">
              {eval(changer.tot * 10 - changer.correct)}
            </p>
          </div>
        </div>

        {/* Right Side */}

        <div className="w-full  flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="h-5/6 bg-white rounded-t-3xl w-full hidden sm:flex">
        <div className="w-1/2 flex flex-col justify-center items-center gap-2  p-2 ">
          {/* <div className="w-3/4 text-center p-2">
            <p className="text-2xl font-bold">Quiz Analysis</p>
          </div> */}
          <div className="col1 bg-white w-3/4 p-2 cursor-pointer border-2 border-gray-300 rounded-md">
            <p className="text-lg text-blue-400">No Of Quiz Attended</p>
            <p className="text-6xl font-bold text-end ">{changer.tot}</p>
          </div>
          <div className="col2 bg-white w-3/4 p-2 cursor-pointer border-2 border-gray-300 rounded-md">
            <p className="text-lg text-blue-400">Correct Answers</p>
            <p className="text-3xl text-green-600 font-bold text-end">
              {changer.correct}
            </p>
          </div>
          <div className="col3 bg-white w-3/4 p-2 cursor-pointer border-2 border-gray-300 rounded-md">
            <p className="text-lg text-blue-400">Incorrect Answers</p>
            <p className="text-3xl text-red-600 font-bold text-end">
              {eval(changer.tot * 10 - changer.correct)}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default DashBoard;
