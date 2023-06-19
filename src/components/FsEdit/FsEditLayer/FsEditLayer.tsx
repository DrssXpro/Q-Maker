import { FC, useState, MouseEvent, ChangeEvent } from "react";
import classNames from "classnames";
import styles from "./FsEditLayer.module.scss";
import { Button, Input, Space, Tooltip, message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined, LockOutlined, UnlockOutlined } from "@ant-design/icons";
import useStoreComponent from "../../../hooks/useStoreComponent";
import { useDispatch } from "react-redux";
import {
  changeComponentTitleAction,
  changeCurrentSelectAction,
  controllComponentHiddenAction,
  controllComponentLockedAction,
} from "../../../stores/modules/componentReducer";

const FsEditLayer: FC = () => {
  const { componentList, currentSelect } = useStoreComponent();
  const dispatch = useDispatch();

  const [changingId, setChangingId] = useState<string>("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value.trim();
    if (!title || !currentSelect) return;
    dispatch(changeComponentTitleAction({ id: currentSelect, title }));
  };

  // 点击选中组件
  const handleSelectComponent = (id: string) => {
    const current = componentList.find((c) => c.id === id);
    // 判断点击组件是否为隐藏
    if (current && current.isHidden) return message.info("隐藏组件不能被选中");
    // 判断点击组件是否是当前选择的组件，不是则不展示input
    if (id !== currentSelect) {
      dispatch(changeCurrentSelectAction(id));
      setChangingId("");
      return;
    }
    // 当前点击的组件是选择的组件，则展示为input
    setChangingId(id);
  };

  // 隐藏 / 显示
  const handleHiddeComponent = (e: MouseEvent, id: string, hidde: boolean) => {
    dispatch(controllComponentHiddenAction({ id, isHidden: !hidde }));
    e.stopPropagation();
  };

  // 锁定 / 解锁
  const handleLockedComponent = (e: MouseEvent, id: string, locked: boolean) => {
    dispatch(controllComponentLockedAction({ id, isLocked: !locked }));
    e.stopPropagation();
  };
  return (
    <div className={styles["fs-layer-container"]}>
      {componentList.map((c) => {
        const titleClassName = classNames({
          [styles["title"]]: true,
          [styles["selected"]]: c.id == currentSelect,
        });

        return (
          <div className={styles["component-wrapper"]} key={c.id} onClick={() => handleSelectComponent(c.id)}>
            <div className={titleClassName}>
              {c.id === changingId ? (
                <Input
                  value={c.title}
                  onChange={handleTitleChange}
                  onPressEnter={() => setChangingId("")}
                  onBlur={() => setChangingId("")}
                ></Input>
              ) : (
                c.title
              )}
            </div>
            <div className={styles["handler"]}>
              <Space>
                <Tooltip placement="top" title={c.isHidden ? "已隐藏" : "正常"}>
                  <Button
                    className={styles["btn"]}
                    icon={c.isHidden ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                    type="text"
                    onClick={(e) => handleHiddeComponent(e, c.id, c.isHidden!)}
                  ></Button>
                </Tooltip>
                <Tooltip placement="top" title={c.isLocked ? "已锁定" : "正常"}>
                  <Button
                    className={styles["btn"]}
                    icon={c.isLocked ? <LockOutlined /> : <UnlockOutlined />}
                    type="text"
                    onClick={(e) => handleLockedComponent(e, c.id, c.isLocked!)}
                  ></Button>
                </Tooltip>
              </Space>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FsEditLayer;
