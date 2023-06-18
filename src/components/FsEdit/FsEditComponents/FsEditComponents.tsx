import { FC } from "react";
import { Typography } from "antd";
import styles from "./FsEditComponents.module.scss";
import { componentGonfigGroup } from "../../FsQuestionComponents/type";
import { IComponentConfig } from "../../FsQuestionComponents";

const { Title } = Typography;

const generateComponent = (c: IComponentConfig) => {
  const { type, Component } = c;
  return (
    <div key={type} className={styles["component-container"]}>
      <div style={{ pointerEvents: "none" }}>
        <Component />
      </div>
    </div>
  );
};
const FsEditComponents: FC = () => {
  return (
    <>
      {componentGonfigGroup.map((i, index) => {
        const { groupId, groupName, components } = i;

        return (
          <div key={groupId}>
            <Title level={3} style={{ fontSize: "16px", marginTop: index === 0 ? "0" : "20px" }}>
              {groupName}
            </Title>
            <div>{components.map((c) => generateComponent(c))}</div>
          </div>
        );
      })}
    </>
  );
};

export default FsEditComponents;
