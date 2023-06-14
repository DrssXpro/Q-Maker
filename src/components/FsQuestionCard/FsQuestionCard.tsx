import { FC } from "react";
import styles from "./FsQuestionCard.module.scss";
import { StarOutlined, EditOutlined, LineChartOutlined, CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Popconfirm, Space, Tag } from "antd";
const FsQuestionCard: FC = () => {
  const changeStar = () => {};

  const confirmCopy = () => {};

  const deletePaper = () => {};
  return (
    <div className={styles["fs-question-card-container"]}>
      <div className={styles["fs-question-card-title"]}>
        <Link to="/login">
          <Space>
            <StarOutlined />
            <span>新建问卷 01-12 A</span>
          </Space>
        </Link>
        <Space size={10}>
          <Tag>未发布</Tag>
          <span>答卷:100</span>
          <span>06月14日 22:16</span>
        </Space>
      </div>
      <div className={styles["fs-question-card-content"]}>
        <Space>
          <Button type="text" icon={<EditOutlined />}>
            编辑问卷
          </Button>
          <Button type="text" icon={<LineChartOutlined />}>
            数据统计
          </Button>
        </Space>
        <Space>
          <Button type="text" icon={<StarOutlined />} size="small" onClick={changeStar}>
            {"标星"}
          </Button>
          <Popconfirm title="确定复制该问卷？" okText="确定" cancelText="取消" onConfirm={confirmCopy}>
            <Button type="text" icon={<CopyOutlined />} size="small" disabled>
              复制
            </Button>
          </Popconfirm>
          <Button type="text" icon={<DeleteOutlined />} size="small" onClick={deletePaper}>
            删除
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default FsQuestionCard;
