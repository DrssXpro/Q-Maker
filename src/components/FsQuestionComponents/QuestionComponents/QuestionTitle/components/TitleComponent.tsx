import { FC } from "react";
import { IQuestionTitleProps } from "../type";
import { Typography } from "antd";
import { QuestionTitleDefaultValue } from "..";

const { Title } = Typography;

const TitleComponent: FC<IQuestionTitleProps> = (props: IQuestionTitleProps) => {
  // 使用默认或传入props
  const { text, level, direction } = { ...QuestionTitleDefaultValue, ...props };

  const genFontSize = (level: number | undefined) => {
    if (!level) return "24px";
    if (level === 1) return "24px";
    if (level === 2) return "20px";
    if (level === 3) return "16px";
    return "16px";
  };

  return (
    <Title
      level={level}
      style={{
        fontSize: genFontSize(level),
        textAlign: direction,
        marginBottom: 0,
        marginTop: 0,
      }}
    >
      {text}
    </Title>
  );
};

export default TitleComponent;
