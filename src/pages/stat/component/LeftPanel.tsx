import { FC } from "react";
import { ComponentInfoType } from "../../../stores/modules/componentReducer";
import { getComponentConfigByType } from "../../../components/FsQuestionComponents";
import styles from "./style/StatLeftPanel.module.scss";
import classNames from "classnames";
interface IPanelProps {
  componentList?: ComponentInfoType[];
  currentSelect: string;
  selectComponent: (id: string) => void;
  selectComponentType: (type: string) => void;
}

const generatorComponent = (componentInfo: ComponentInfoType) => {
  const { type, props } = componentInfo;
  const componentConfig = getComponentConfigByType(type);
  if (!componentConfig) return null;
  const { Component } = componentConfig;
  return <Component {...props} />;
};

const LeftPanel: FC<IPanelProps> = (props: IPanelProps) => {
  const { componentList, currentSelect, selectComponent, selectComponentType } = props;
  return (
    <div className={styles["component-list"]}>
      {componentList?.map((c) => {
        const { id, type } = c;
        const componentClassName = classNames({
          [styles["component-wrapper"]]: true,
          [styles["selected"]]: id === currentSelect,
        });

        return (
          <div
            className={componentClassName}
            key={id}
            onClick={() => {
              selectComponent(id);
              selectComponentType(type);
            }}
          >
            <div style={{ pointerEvents: "none" }}>{generatorComponent(c)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftPanel;
