import { nanoid } from "@reduxjs/toolkit";
import { IQuestionCheckboxProps } from "./type";
import { IComponentConfig } from "../../type";
import CheckboxComponent from "./components/CheckboxComponent";
import CheckboxPropsComponent from "./components/CheckboxPropsComponent";
import CheckboxStatComponent from "./components/CheckboxStatComponent";

// Checkbox 组件默认属性值（初始化、重置使用）
export const QuestionCheckboxDefaultValue: IQuestionCheckboxProps = {
  title: "多选框标题",
  isVertical: false,
  list: [
    { value: nanoid(5), text: "选项1", checked: false },
    { value: nanoid(5), text: "选项2", checked: false },
    { value: nanoid(5), text: "选项3", checked: false },
  ],
};

// Checkbox 组件基本配置
export const QuestionCheckboxConfig: IComponentConfig = {
  title: "多选框",
  type: "questionCheckbox",
  Component: CheckboxComponent,
  PropsComponent: CheckboxPropsComponent,
  StatComponent: CheckboxStatComponent,
  defaultProps: QuestionCheckboxDefaultValue,
};
