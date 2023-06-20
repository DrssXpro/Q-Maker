import { FC } from "react";
import { Rate, Typography } from "antd";
import { IQuestionRateProps } from "../type";
import { QuestionRateDefaultValue } from "..";

const { Paragraph } = Typography;

const RateComponent: FC<IQuestionRateProps> = (props: IQuestionRateProps) => {
  const { title, count, value, allowHalf } = { ...QuestionRateDefaultValue, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Rate count={count} value={value} allowHalf={allowHalf} />
    </div>
  );
};

export default RateComponent;
