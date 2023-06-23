import { FC } from "react";
import styles from "./manage.module.scss";
import { BarsOutlined, StarOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Space, message } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { createQuestionApi } from "../../service/api/questionService";

const Manage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  const handleCreateQuestion = async () => {
    try {
      const res = await createQuestionApi({
        title: "默认标题",
      });
      res.code === 1000 ? message.success(res.message) : message.warning(res.message);
      res.code === 1000 && navigate(`/edit/${res.data.id}`);
    } catch (error) {
      console.log("check:", error);
      message.error("创建失败");
    }
  };

  return (
    <>
      <div className={styles["manage-container"]}>
        <div className={styles["manage-left"]}>
          <Button type="primary" size="large" icon={<PlusOutlined />} onClick={handleCreateQuestion}>
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
