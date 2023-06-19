import { IComponentConfig } from "../../type";
import InfoComponent from "./components/InfoComponent";
import InfoPropsComponent from "./components/InfoPropsComponent";
import { IQuestionInfoProps } from "./type";

// Info 组件默认属性值（初始化、重置使用）
export const QuestionInfoDefaultValue: IQuestionInfoProps = {
  title: "问卷标题",
  desc: "问卷描述...",
};

// Info 组件基本配置
export const QuestionInfoConfig: IComponentConfig = {
  title: "问卷信息",
  type: "questionInfo",
  Component: InfoComponent,
  PropsComponent: InfoPropsComponent,
  defaultProps: QuestionInfoDefaultValue,
};
