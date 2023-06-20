import { FC } from "react";
import { Typography, Space, Checkbox } from "antd";
import { IQuestionCheckboxProps } from "../type";
import { QuestionCheckboxDefaultValue } from "..";
const { Paragraph } = Typography;
const CheckboxComponent: FC = (props: IQuestionCheckboxProps) => {
  const { title, list = [], isVertical } = { ...QuestionCheckboxDefaultValue, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isVertical ? "vertical" : "horizontal"}>
        {list.map((opt) => {
          const { value, text, checked } = opt;
          return (
            <Checkbox key={value} value={value} checked={checked}>
              {text}
            </Checkbox>
          );
        })}
      </Space>
    </div>
  );
};

export default CheckboxComponent;
