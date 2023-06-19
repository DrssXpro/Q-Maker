import { FC } from "react";
import { IQuestionTitleProps } from "./QuestionComponents/QuestionTitle/type";
import { IQuestionInputProps } from "./QuestionComponents/QuestionInput/type";
import { IQuestionInfoProps } from "./QuestionComponents/QuestionInfo/type";
import { IQuestionParagraphProps } from "./QuestionComponents/QuestionParagraph/type";

// 各个组件的 prop type
export type ComponentPropsType = IQuestionTitleProps &
  IQuestionInputProps &
  IQuestionInfoProps &
  IQuestionParagraphProps;

// 统一组件配置
export interface IComponentConfig {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  PropsComponent: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
}
