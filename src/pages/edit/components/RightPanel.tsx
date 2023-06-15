import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import { Tabs, TabsProps } from "antd";
import { FC } from "react";
import FsEditProps from "../../../components/FsEdit/FsEditProps/FsEditProps";
import FsEditSetting from "../../../components/FsEdit/FsEditSetting/FsEditSetting";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span>
        <FileTextOutlined />
        属性
      </span>
    ),
    children: <FsEditProps />,
  },
  {
    key: "2",
    label: (
      <span>
        <SettingOutlined />
        页面设置
      </span>
    ),
    children: <FsEditSetting />,
  },
];

const RightPanel: FC = () => {
  const onChange = () => {};

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default RightPanel;
