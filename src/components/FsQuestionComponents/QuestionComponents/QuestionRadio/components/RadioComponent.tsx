import { FC } from "react";
import { Typography, Radio, Space } from "antd";
import { IQuestionRadioProps } from "../type";
import { QuestionRadioDefaultValue } from "..";

const { Paragraph } = Typography;

const RadioComponent: FC<IQuestionRadioProps> = (props: IQuestionRadioProps) => {
  const { title, isVertical, options = [], current } = { ...QuestionRadioDefaultValue, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={current}>
        <Space direction={isVertical ? "vertical" : "horizontal"}>
          {options.map((opt) => {
            const { value, text } = opt;
            return (
              <Radio key={value} value={value}>
                {text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default RadioComponent;
