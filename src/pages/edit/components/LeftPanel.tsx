import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Tabs, TabsProps } from "antd";
import { FC } from "react";
import FsEditComponents from "../../../components/FsEdit/FsEditComponents/FsEditComponents";
import FsEditLayer from "../../../components/FsEdit/FsEditLayer/FsEditLayer";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span>
        <AppstoreOutlined />
        组件库
      </span>
    ),
    children: <FsEditComponents />,
  },
  {
    key: "2",
    label: (
      <span>
        <BarsOutlined />
        图层
      </span>
    ),
    children: <FsEditLayer />,
  },
];

const LeftPanel: FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default LeftPanel;
