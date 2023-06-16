import { CopyOutlined, QrcodeOutlined } from "@ant-design/icons";
import { Button, Input, Popover, Space, Tooltip } from "antd";
import { FC } from "react";

const FsCopyBar: FC = () => {
  const url = `http://localhost:3000/question/123`;
  return (
    <Space>
      <Input value={url} style={{ width: "300px" }} />
      <Tooltip title="拷贝链接">
        <Button icon={<CopyOutlined />}></Button>
      </Tooltip>
      <Popover content={"123"}>
        <Button icon={<QrcodeOutlined />}></Button>
      </Popover>
    </Space>
  );
};

export default FsCopyBar;
