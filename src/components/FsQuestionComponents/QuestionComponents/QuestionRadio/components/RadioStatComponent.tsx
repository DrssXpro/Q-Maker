import { FC, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { IQuestionRadioStatProps } from "../type";

const STAT_COLORS = ["#FF2D2D", "#BE77FF", "#2894FF", "#00EC00", "#EAC100", "#FF9D6F"];

function format(n: number) {
  console.log(n);
  return (n * 100).toFixed(2);
}

const RadioStatComponent: FC<IQuestionRadioStatProps> = (props: IQuestionRadioStatProps) => {
  const { stat } = props;
  const sum = useMemo(() => {
    let s = 0;
    stat.forEach((i: { name: string; count: number }) => (s += i.count));
    return s;
  }, [stat]);

  return (
    <>
      <div style={{ width: "100%", height: "200px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey={"count"}
              data={stat}
              cx="50%" // x 轴的偏移
              cy="50%" // y 轴的偏移
              outerRadius={50} // 饼图的直径
              fill="#8884d8"
              label={(i) => `${i.name}: ${format(i.count / sum)}%`}
            >
              {stat.map((_i, index) => {
                return <Cell key={index} fill={STAT_COLORS[index]} />;
              })}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={400}
            height={300}
            data={stat}
            margin={{
              top: 10,
              right: 10,
              left: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default RadioStatComponent;
