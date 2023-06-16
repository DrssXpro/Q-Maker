import { FC } from "react";
import styles from "./manage.module.scss";
import { BarsOutlined, StarOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Space } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Manage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  return (
    <>
      <div className={styles["manage-container"]}>
        <div className={styles["manage-left"]}>
          <Button type="primary" size="large" icon={<PlusOutlined />} onClick={() => navigate("/edit/123")}>
            新建问卷
          </Button>
          <Divider style={{ borderTop: "transparent" }} />
          <Space size={10} direction="vertical">
            <Button
              size="large"
              icon={<BarsOutlined />}
              type={pathname.includes("/manage/my") ? "default" : "text"}
              onClick={() => navigate("/manage/my")}
            >
              我的问卷
            </Button>
            <Button
              size="large"
              icon={<StarOutlined />}
              type={pathname.includes("/manage/collect") ? "default" : "text"}
              onClick={() => navigate("/manage/collect")}
            >
              星标问卷
            </Button>
            <Button
              size="large"
              icon={<DeleteOutlined />}
              type={pathname.includes("/manage/recyle") ? "default" : "text"}
              onClick={() => navigate("/manage/recyle")}
            >
              回收站
            </Button>
          </Space>
        </div>
        <div className={styles["manage-right"]}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Manage;
