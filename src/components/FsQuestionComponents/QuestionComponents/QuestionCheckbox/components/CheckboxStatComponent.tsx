import { FC } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { IQuestionCheckboxStatProps } from "../type";

const CheckboxStatComponent: FC<IQuestionCheckboxStatProps> = (props: IQuestionCheckboxStatProps) => {
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
  return (
    <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={300}
          data={test}
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
  );
};

export default CheckboxStatComponent;
