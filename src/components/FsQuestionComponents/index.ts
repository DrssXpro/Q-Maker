import { FC } from "react";
import { IQuestionTitleProps } from "./QuestionComponents/QuestionTitle/type";

// 各个组件的 prop type
export type ComponentPropsType = IQuestionTitleProps;

// 统一组件配置
export interface IComponentConfig {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  PropsComponent: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
}
