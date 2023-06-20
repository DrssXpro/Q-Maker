import { nanoid } from "@reduxjs/toolkit";
import { IComponentConfig } from "../../type";
import RadioComponent from "./components/RadioComponent";
import RadioPropsComponent from "./components/RadioPropsComponent";
import { IQuestionRadioProps } from "./type";

// Radio 组件默认属性值（初始化、重置使用）
export const QuestionRadioDefaultValue: IQuestionRadioProps = {
  title: "单选标题",
  isVertical: false,
  options: [
    { value: nanoid(5), text: "选项1" },
    { value: nanoid(5), text: "选项2" },
    { value: nanoid(5), text: "选项3" },
  ],
  current: "",
};

// Radio 组件基本配置
export const QuestionRadioConfig: IComponentConfig = {
  title: "单选框",
  type: "questionRadio",
  Component: RadioComponent,
  PropsComponent: RadioPropsComponent,
  defaultProps: QuestionRadioDefaultValue,
};
