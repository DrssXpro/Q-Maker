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

const FsToolBar: FC = () => {
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button shape="circle" icon={<EyeInvisibleOutlined />}></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button shape="circle" icon={<LockOutlined />}></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button shape="circle" icon={<CopyOutlined />}></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button shape="circle" icon={<BlockOutlined />}></Button>
      </Tooltip>
      <Tooltip title="上移">
        <Button shape="circle" icon={<UpOutlined />}></Button>
      </Tooltip>
      <Tooltip title="下移">
        <Button shape="circle" icon={<DownOutlined />}></Button>
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
