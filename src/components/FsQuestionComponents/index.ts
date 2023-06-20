import { QuestionInputConfig } from "./QuestionComponents/QuestionInput";
import { QuestionTitleConfig } from "./QuestionComponents/QuestionTitle";
import { QuestionInfoConfig } from "./QuestionComponents/QuestionInfo";
import { IComponentConfig } from "./type";
import { QuestionParagraphConfig } from "./QuestionComponents/QuestionParagraph";
import { QuestionTextareaConfig } from "./QuestionComponents/QuestionTextarea";
import { QuestionRadioConfig } from "./QuestionComponents/QuestionRadio";
import { QuestionCheckboxConfig } from "./QuestionComponents/QuestionCheckbox";
import { QuestionRateConfig } from "./QuestionComponents/QuestionRate";

// 所有组件配置列表
const componentConfigList: IComponentConfig[] = [
  QuestionTitleConfig,
  QuestionInputConfig,
  QuestionInfoConfig,
  QuestionParagraphConfig,
  QuestionTextareaConfig,
  QuestionRadioConfig,
  QuestionCheckboxConfig,
  QuestionRateConfig,
];

// 所有组件按照类型分组
export const componentGonfigGroup = [
  {
    groupId: "textGroup",
    groupName: "文本显示",
    components: [QuestionInfoConfig, QuestionTitleConfig, QuestionParagraphConfig],
  },
  {
    groupId: "inputGroup",
    groupName: "用户输入",
    components: [QuestionInputConfig, QuestionTextareaConfig],
  },
  {
    groupId: "chooseGroup",
    groupName: "用户选择",
    components: [QuestionRadioConfig, QuestionCheckboxConfig, QuestionRateConfig],
  },
];

// tool: 找到对应的组件 config
export function getComponentConfigByType(type: string) {
  return componentConfigList.find((c) => c.type === type);
}
