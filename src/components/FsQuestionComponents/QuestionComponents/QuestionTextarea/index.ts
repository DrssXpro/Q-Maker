import { IComponentConfig } from "../../type";
import TextareaComponent from "./components/TextareaComponent";
import TextareaPropsComponent from "./components/TextareaPropsComponent";
import { IQuestionTextareaProps } from "./type";

// Textarea 组件默认属性值（初始化、重置使用）
export const QuestionTextareaDefaultValue: IQuestionTextareaProps = {
  title: "文本框标题",
  placeholder: "请输入...",
};

// Textarea 组件基本配置
export const QuestionTextareaConfig: IComponentConfig = {
  title: "文本框",
  type: "questionTextarea",
  Component: TextareaComponent,
  PropsComponent: TextareaPropsComponent,
  defaultProps: QuestionTextareaDefaultValue,
};
