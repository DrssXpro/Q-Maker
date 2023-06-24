import { FC, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { IQuestionRadioStatProps } from "../type";

const STAT_COLORS = ["#FF2D2D", "#BE77FF", "#2894FF", "#00EC00", "#EAC100", "#FF9D6F"];

function format(n: number) {
  console.log(n);
  return (n * 100).toFixed(2);
}

const RadioStatComponent: FC<IQuestionRadioStatProps> = (props: IQuestionRadioStatProps) => {
  const { stat } = props;
  const test = [
    {
      name: "选项一",
      count: 20,
    },
    {
      name: "选项二",
      count: 54,
    },
    {
      name: "选项三",
      count: 44,
    },
  ];
  const sum = useMemo(() => {
    let s = 0;
    test.forEach((i: { name: string; count: number }) => (s += i.count));
    return s;
  }, [stat]);

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey={"count"}
            data={test}
            cx="50%" // x 轴的偏移
            cy="50%" // y 轴的偏移
            outerRadius={50} // 饼图的直径
            fill="#8884d8"
            label={(i) => `${i.name}: ${format(i.count / sum)}%`}
          >
            {test.map((_i, index) => {
              return <Cell key={index} fill={STAT_COLORS[index]} />;
            })}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadioStatComponent;
