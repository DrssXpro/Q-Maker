import { FC } from "react";
import { Typography, Input } from "antd";
import { IQuestionTextareaProps } from "../type";
import { QuestionTextareaDefaultValue } from "..";

const { Paragraph } = Typography;
const { TextArea } = Input;

const TextareaComponent: FC<IQuestionTextareaProps> = (props: IQuestionTextareaProps) => {
  const { title, placeholder } = { ...QuestionTextareaDefaultValue, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </div>
  );
};

export default TextareaComponent;
