import { FC } from "react";
import styles from "./style/EditCanvas.module.scss";
import classNames from "classnames";
import useStoreComponent from "../../../hooks/useStoreComponent";
import { ComponentInfoType } from "../../../stores/modules/componentReducer";
import { getComponentConfigByType } from "../../../components/FsQuestionComponents";

// 通过store中的info，获取对应的component config，拿到 Component
const generatorComponent = (componentInfo: ComponentInfoType) => {
  const { type, props } = componentInfo;
  const componentConfig = getComponentConfigByType(type);
  if (!componentConfig) return null;
  const { Component } = componentConfig;
  return <Component {...props} />;
};

const EditCanvas: FC = () => {
  const { currentSelect, componentList } = useStoreComponent();

  return (
    <div className={styles["edit-canvas"]}>
      {componentList
        .filter((c) => !c.isHidden)
        .map((c) => {
          const { id, isLocked } = c;
          const componentClassName = classNames({
            [styles["component-wrapper"]]: true,
            [styles["selected"]]: id === currentSelect,
            [styles["locked"]]: isLocked,
          });

          return (
            <div className={componentClassName} key={id}>
              <div style={{ pointerEvents: "none" }}>{generatorComponent(c)}</div>
            </div>
          );
        })}
    </div>
  );
};

export default EditCanvas;
