import { FC } from "react";
import RadioStatComponent from "../../../components/FsQuestionComponents/QuestionComponents/QuestionRadio/components/RadioStatComponent";

const RightPanel: FC = () => {
  return (
    <>
      <h2 style={{ margin: 0 }}>图标统计</h2>
      <RadioStatComponent stat={[]} />
    </>
  );
};

export default RightPanel;
