import { FC } from "react";
import styles from "./style/StatHeader.module.scss";
import { Button, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import FsCopyBar from "../../../components/FsCopyBar/FsCopyBar";
const StatHeader: FC = () => {
  const nav = useNavigate();

  return (
    <div className={styles["stat-header-container"]}>
      <div className={styles["header-left"]}>
        <Space>
          <Button type="link" icon={<LeftOutlined />} onClick={() => nav("/manage")}>
            返回
          </Button>
          <span style={{ fontWeight: "600" }}>前端工程师就业调研</span>
        </Space>
      </div>
      <div className={styles["header-center"]}>
        <FsCopyBar />
      </div>
      <div className={styles["header-right"]}>
        <Button type="primary" onClick={() => nav("/edit/123")}>
          编辑问卷
        </Button>
      </div>
    </div>
  );
};

export default StatHeader;
