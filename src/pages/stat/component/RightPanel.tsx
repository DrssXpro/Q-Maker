import { FC, useEffect, useState } from "react";
import { getComponentConfigByType } from "../../../components/FsQuestionComponents";
import { IStatChartStruct } from "../../../types/questionType";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { getQuestionStatCheckboxApi, getQuestionStatRadioApi } from "../../../service/api/questionService";

interface IPanelProps {
  currentSelect: string;
  currentType: string;
}

const RightPanel: FC<IPanelProps> = (props: IPanelProps) => {
  const { id } = useParams();
  const { currentSelect, currentType } = props;
  const [stat, setStat] = useState<IStatChartStruct[]>([]);
  const { StatComponent } = getComponentConfigByType(currentType) || {};

  useEffect(() => {
    if (currentType === "questionRadio") {
      getRadioCount();
    } else if (currentType === "questionCheckbox") {
      getCheckboxCount();
    }
  }, [currentType]);

  const getRadioCount = async () => {
    try {
      const res = await getQuestionStatRadioApi({ id: id!, radio: currentSelect });
      if (res.code === 1000) {
        setStat(res.data);
      }
    } catch (error) {
      message.error("获取统计失败");
    }
  };

  const getCheckboxCount = async () => {
    try {
      const res = await getQuestionStatCheckboxApi({ id: id!, check: currentSelect });
      if (res.code === 1000) {
        setStat(res.data);
      }
    } catch (error) {
      message.error("获取统计失败");
    }
  };

  return (
    <>
      <h2 style={{ margin: 0 }}>图标统计</h2>
      {currentSelect ? (
        StatComponent ? (
          <StatComponent stat={stat} />
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
