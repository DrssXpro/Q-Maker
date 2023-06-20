import { IComponentConfig } from "../../type";
import RateComponent from "./components/RateComponent";
import RatePropsComponent from "./components/RatePropsComponent";
import { IQuestionRateProps } from "./type";

// Rate 组件默认属性值（初始化、重置使用）
export const QuestionRateDefaultValue: IQuestionRateProps = {
  title: "评分",
  count: 5,
  value: 0,
  allowHalf: false,
};

// Rate 组件基本配置
export const QuestionRateConfig: IComponentConfig = {
  title: "评分框",
  type: "questionRate",
  Component: RateComponent,
  PropsComponent: RatePropsComponent,
  defaultProps: QuestionRateDefaultValue,
};
