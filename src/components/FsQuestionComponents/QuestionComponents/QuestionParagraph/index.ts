import { IComponentConfig } from "../../type";
import ParagraphComponent from "./components/ParagraphComponent";
import ParagraphPropsComponent from "./components/ParagraphPropsComponent";
import { IQuestionParagraphProps } from "./type";

// Paragraph 组件默认属性值（初始化、重置使用）
export const QuestionParagraphDefaultValue: IQuestionParagraphProps = {
  text: "一行段落",
  direction: "left",
};

// Paragraph 组件基本配置
export const QuestionParagraphConfig: IComponentConfig = {
  title: "段落",
  type: "questionParagraph",
  Component: ParagraphComponent,
  PropsComponent: ParagraphPropsComponent,
  defaultProps: QuestionParagraphDefaultValue,
};
