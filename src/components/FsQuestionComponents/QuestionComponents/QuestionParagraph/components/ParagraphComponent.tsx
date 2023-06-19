import { FC } from "react";
import { IQuestionParagraphProps } from "../type";
import { Typography } from "antd";
import { QuestionParagraphDefaultValue } from "..";
const { Paragraph } = Typography;
const ParagraphComponent: FC<IQuestionParagraphProps> = (props: IQuestionParagraphProps) => {
  const { text = "", direction } = { ...QuestionParagraphDefaultValue, ...props };

  /**
   * key: 关于换行处理问题：手动分割字符根据换行分割，不能使用 innerHTML 类似进行渲染，用户注入脚本会被执行
   */
  const textList = text.split("\n"); // 例如 ['hello', '123', '456']
  return (
    <Paragraph style={{ textAlign: direction, marginBottom: 0 }}>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </Paragraph>
  );
};

export default ParagraphComponent;
