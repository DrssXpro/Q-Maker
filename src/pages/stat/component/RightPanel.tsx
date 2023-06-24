import { FC } from "react";
import { getComponentConfigByType } from "../../../components/FsQuestionComponents";

interface IPanelProps {
  currentSelect: string;
  currentType: string;
}

const RightPanel: FC<IPanelProps> = (props: IPanelProps) => {
  const { currentSelect, currentType } = props;
  const { StatComponent } = getComponentConfigByType(currentType) || {};

  return (
    <>
      <h2 style={{ margin: 0 }}>图标统计</h2>
      {currentSelect ? (
        StatComponent ? (
          <StatComponent stat={[]} />
        ) : (
          <div style={{ marginTop: "20px" }}>该组件无统计图表</div>
        )
      ) : (
        <div style={{ marginTop: "20px" }}>未选中组件</div>
      )}
    </>
  );
};

export default RightPanel;
