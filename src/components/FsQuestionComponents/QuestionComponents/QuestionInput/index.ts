import { IComponentConfig } from "../../type";
import InputComponent from "./components/InputComponent";
import InputPropsComponent from "./components/InputPropsComponent";
import { IQuestionInputProps } from "./type";

// Input 组件默认属性值（初始化、重置使用）
export const QuestionInputDefaultValue: IQuestionInputProps = {
  title: "输入框标题",
  placeholder: "请输入...",
};

// Input 组件基本配置
export const QuestionInputConfig: IComponentConfig = {
  title: "输入框",
  type: "questionInput",
  Component: InputComponent,
  PropsComponent: InputPropsComponent,
  defaultProps: QuestionInputDefaultValue,
};
