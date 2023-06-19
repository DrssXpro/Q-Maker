import { FC } from "react";
import { Typography } from "antd";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import styles from "./FsEditComponents.module.scss";
import { componentGonfigGroup } from "../../FsQuestionComponents";
import { IComponentConfig } from "../../FsQuestionComponents/type";
import { addComponentAction } from "../../../stores/modules/componentReducer";

const { Title } = Typography;

const generateComponent = (c: IComponentConfig) => {
  const { type, title, Component, defaultProps } = c;
  const dispatch = useDispatch();

  //将新组件添加至 store
  const handleAddComponent = () => {
    dispatch(
      addComponentAction({
        id: nanoid(), // new: RTK 中已经包含 nanoid，无需再安装
        title,
        type,
        props: defaultProps,
      })
    );
  };
  return (
    <div key={type} className={styles["component-container"]} onClick={handleAddComponent}>
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
