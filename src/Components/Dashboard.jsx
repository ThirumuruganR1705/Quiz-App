import React, { PureComponent } from "react";
import { useContext } from "react";
import quesnContext from "../ContextPage/Context";
import { PieChart, Pie, Tooltip, Cell,ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

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

  let demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  return (
    <React.StrictMode>
      <div className="h-screen w-screen bg-white flex justify-center items-center w-screen dashboard">
        <div className="w-11/12 h-full bg-gray-200 rounded-xl ">
          <div className="exit mr-5 mt-2  float-right">
            <p className="btn text-white bg-red-400 px-2" onClick={closerFunc}>
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
          <div className="">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  activeIndex={this.state.activeIndex}
                  activeShape={renderActiveShape}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={this.onPieEnter}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default DashBoard;
