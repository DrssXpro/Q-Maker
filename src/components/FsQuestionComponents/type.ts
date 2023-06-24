import { FC } from "react";
import { IQuestionTitleProps } from "./QuestionComponents/QuestionTitle/type";
import { IQuestionInputProps } from "./QuestionComponents/QuestionInput/type";
import { IQuestionInfoProps } from "./QuestionComponents/QuestionInfo/type";
import { IQuestionParagraphProps } from "./QuestionComponents/QuestionParagraph/type";
import { IQuestionTextareaProps } from "./QuestionComponents/QuestionTextarea/type";
import { IQuestionRadioProps, IQuestionRadioStatProps } from "./QuestionComponents/QuestionRadio/type";
import { IQuestionCheckboxProps, IQuestionCheckboxStatProps } from "./QuestionComponents/QuestionCheckbox/type";
import { IQuestionRateProps } from "./QuestionComponents/QuestionRate/type";

// 各个组件的 prop type
export type ComponentPropsType = IQuestionTitleProps &
  IQuestionInputProps &
  IQuestionInfoProps &
  IQuestionParagraphProps &
  IQuestionTextareaProps &
  IQuestionRadioProps &
  IQuestionCheckboxProps &
  IQuestionRateProps;

// 具有统计组件的 type
export type ComponentStatPropsType = IQuestionRadioStatProps & IQuestionCheckboxStatProps;

// 统一组件配置
export interface IComponentConfig {
  title: string;
  type: string;
  defaultProps: ComponentPropsType;
  Component: FC<ComponentPropsType>;
  PropsComponent: FC<ComponentPropsType>;
  StatComponent?: FC<ComponentStatPropsType>;
}
