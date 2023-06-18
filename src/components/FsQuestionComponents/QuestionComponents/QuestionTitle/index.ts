import { IComponentConfig } from "../..";
import TitleComponent from "./components/TitleComponent";
import TitlePropsComponent from "./components/TitlePropsComponent";
import { IQuestionTitleProps } from "./type";

// Title 组件默认属性值（初始化、重置使用）
export const QuestionTitleDefaultValue: IQuestionTitleProps = {
  text: "一行标题",
  level: 1,
  direction: "left",
};

// Title 组件基本配置
export const QuestionTitleConfig: IComponentConfig = {
  title: "标题",
  type: "questionTitle",
  Component: TitleComponent,
  PropsComponent: TitlePropsComponent,
  defaultProps: QuestionTitleDefaultValue,
};
