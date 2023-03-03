import React from "react";
import { useContext } from "react";
import quesnContext from "../ContextPage/Context";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

function DashBoard() {
  let value = useContext(quesnContext);
  let [changer, setChanger] = value;

const data = [
  { name: 'No Of Correct Answers', value: changer.correct, color: '#ff0000' },
  { name: 'No Of Incorrect Answers', value: eval(changer.tot * 10 - changer.correct), color: '#00ff00' }
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;


  return (
    <React.StrictMode>
      <div className="">
        <PieChart width={1000} height={1000}>
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
          <Tooltip />
        </PieChart>
      </div>
    </React.StrictMode>
  );
}

export default DashBoard;
