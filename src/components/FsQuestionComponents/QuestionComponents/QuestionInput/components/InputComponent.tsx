import { FC } from "react";
import { Typography, Input } from "antd";
import { IQuestionInputProps } from "../type";
import { QuestionInputDefaultValue } from "..";

const { Paragraph } = Typography;

const InputComponent: FC<IQuestionInputProps> = (props: IQuestionInputProps) => {
  const { title, placeholder } = { ...QuestionInputDefaultValue, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Input placeholder={placeholder}></Input>
    </div>
  );
};

export default InputComponent;
