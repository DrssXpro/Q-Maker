import { FC } from "react";
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  RedoOutlined,
  UndoOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import {
  controllComponentHiddenAction,
  controllComponentLockedAction,
  copyComponentAction,
  moveComponentAction,
  pasteComponentAction,
  reomveComponentAction,
} from "../../stores/modules/componentReducer";
import useStoreComponent from "../../hooks/useStoreComponent";

const FsToolBar: FC = () => {
  const dispatch = useDispatch();
  const { currentSelect, copyComponent, componentList } = useStoreComponent();
  const selectedIndex = componentList.findIndex((c) => c.id === currentSelect);
  const isFirst = selectedIndex <= 0; // 判断当前选择第一个
  const isLast = selectedIndex + 1 >= componentList.length; // 判断当前选择最后一个

  // 删除
  const handleDeleteComponent = () => {
    dispatch(reomveComponentAction());
  };

  // 隐藏
  const handleHideComponent = () => {
    dispatch(
      controllComponentHiddenAction({
        id: currentSelect,
        isHidden: true,
      })
    );
  };

  // 锁定
  const handleLockedComponent = () => {
    dispatch(
      controllComponentLockedAction({
        id: currentSelect,
        isLocked: true,
      })
    );
  };

  // 复制
  const handleCopyComponent = () => {
    dispatch(copyComponentAction());
  };

  // 粘贴
  const handlePasteComponent = () => {
    dispatch(pasteComponentAction());
  };

  // 上下移动
  const handleMoveComponent = (direction: "up" | "down") => {
    if (direction == "up") {
      if (isFirst) return;
      dispatch(
        moveComponentAction({
          oldIndex: selectedIndex,
          newIndex: selectedIndex - 1,
        })
      );
    } else if (direction === "down") {
      if (isLast) return;
      dispatch(
        moveComponentAction({
          oldIndex: selectedIndex,
          newIndex: selectedIndex + 1,
        })
      );
    }
  };
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDeleteComponent}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button shape="circle" icon={<EyeInvisibleOutlined />} onClick={handleHideComponent}></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button shape="circle" icon={<LockOutlined />} onClick={handleLockedComponent}></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button
          shape="circle"
          icon={<CopyOutlined />}
          onClick={handleCopyComponent}
          disabled={!!copyComponent}
        ></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button
          shape="circle"
          icon={<BlockOutlined />}
          onClick={handlePasteComponent}
          disabled={!copyComponent}
        ></Button>
      </Tooltip>
      <Tooltip title="上移">
        <Button
          shape="circle"
          icon={<UpOutlined />}
          onClick={() => handleMoveComponent("up")}
          disabled={isFirst}
        ></Button>
      </Tooltip>
      <Tooltip title="下移">
        <Button
          shape="circle"
          icon={<DownOutlined />}
          onClick={() => handleMoveComponent("down")}
          disabled={isLast}
        ></Button>
      </Tooltip>
      <Tooltip title="撤销">
        <Button shape="circle" icon={<UndoOutlined />}></Button>
      </Tooltip>
      <Tooltip title="重做">
        <Button shape="circle" icon={<RedoOutlined />}></Button>
      </Tooltip>
    </Space>
  );
};

export default FsToolBar;
