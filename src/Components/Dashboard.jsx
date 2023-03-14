import React, { PureComponent } from "react";
import { useContext } from "react";
import quesnContext from "../ContextPage/Context";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

function DashBoard() {
  let value = useContext(quesnContext);
  let [changer, setChanger] = value;

  let closerFunc = () => {
    setChanger({
      shower: "one",
      ques: changer.ques,
      tot: changer.tot,
      correct: changer.correct,
    });
  };

  //For Graph

  const data = [
    { name: "Group A", value: changer.correct },
    { name: "Group B", value: changer.tot * 10 - changer.correct },
  ];

  let names=["a","b"]

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
  };

  return (
    <React.StrictMode>
      <div className="h-screen w-screen bg-white flex justify-center item-center w-screen dashboard">
        <div className="w-11/12 h-full bg-blue-300 rounded-xl ">
          <div className="exit mr-5 mt-2  float-right">
            <p
              className="btn text-white bg-red-400 px-2 cursor-pointer"
              onClick={closerFunc}
            >
              X
            </p>
          </div>
          <div className="title ">
            <p className="text-center font-bold text-3xl">Dashboard Page</p>
            <p className="text-center text-sm text-gray-500">
              Welcome , Kiddo !
            </p>
          </div>
          <div className="flex justify-evenly mt-5 w-full">
            <div className="box-2 h-52 bg-white w-72 m-2 rounded-lg">
              <div className="p-5">
                <p className="title text-gray-300">No Of Quiz Attended</p>
                <p className="text-9xl font-bold float-right">{changer.tot}</p>
              </div>
            </div>
            <div className="box-1 h-52 w-72 m-2 rounded-lg bg-white">
              <div className="p-5 leading-9">
                <p className="text-md text-gray-300 ">No Of Correct Answers</p>
                <p className="text-9xl float-right font-bold text-green-400">
                  {changer.correct}
                </p>
                {/* <div className="flex justify-between pt-3">
                  <div className="percentage">
                    <PieChart width={300} height={200}>
                      <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx={cx}
                        cy={cy}
                        innerRadius={iR}
                        outerRadius={oR}
                        fill="#8884d8"
                        stroke="none"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      {needle(value1, data, cx, cy, iR, oR, "#d0d000")}
                    </PieChart>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="box-3 h-52 bg-white w-72 m-2 rounded-lg">
              <div className="p-5">
                <p className="title text-gray-300">No Of Incorrect Answers</p>
                <p className="text-9xl font-bold float-right text-red-400">
                  {changer.tot * 10 - changer.correct}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    // key={names[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default DashBoard;
