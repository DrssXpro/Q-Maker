import { FC } from "react";
import { IQuestionTitleProps } from "./QuestionComponents/QuestionTitle/type";
import { IQuestionInputProps } from "./QuestionComponents/QuestionInput/type";

// 各个组件的 prop type
export type ComponentPropsType = IQuestionTitleProps & IQuestionInputProps;

// 统一组件配置
export interface IComponentConfig {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  PropsComponent: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
}
