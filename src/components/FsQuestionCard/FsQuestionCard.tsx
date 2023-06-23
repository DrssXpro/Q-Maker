import { FC } from "react";
import styles from "./FsQuestionCard.module.scss";
import { StarOutlined, EditOutlined, LineChartOutlined, CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Popconfirm, Space, Tag } from "antd";
import { IQuestionInfo } from "../../types/questionType";

interface propsType {
  questionDetail: IQuestionInfo;
  goEditPage: (id: string) => void;
  goStatPage: (id: string) => void;
  removeQuestion: (id: string) => void;
  starQuestion: (id: string, iscollect: 0 | 1) => void;
}
const FsQuestionCard: FC<propsType> = (props: propsType) => {
  const { goEditPage, goStatPage, removeQuestion, starQuestion, questionDetail } = props;

  const confirmCopy = () => {};

  return (
    <div className={styles["fs-question-card-container"]}>
      <div className={styles["fs-question-card-title"]}>
        <Link to={`/edit/${questionDetail.id}`}>
          <Space>
            {questionDetail.isstar ? <StarOutlined /> : ""}
            <span>{questionDetail.title}</span>
          </Space>
        </Link>
        <Space size={10}>
          {questionDetail.ispublish ? <Tag color="orange">已发布</Tag> : <Tag>未发布</Tag>}
          <span>答卷:{questionDetail.peopleCount}</span>
          <span>{questionDetail.createdAt}</span>
        </Space>
      </div>
      <div className={styles["fs-question-card-content"]}>
        <Space>
          <Button type="text" icon={<EditOutlined />} onClick={() => goEditPage(questionDetail.id)}>
            编辑问卷
          </Button>
          <Button type="text" icon={<LineChartOutlined />} onClick={() => goStatPage(questionDetail.id)}>
            数据统计
          </Button>
        </Space>
        <Space>
          <Button
            type="text"
            icon={<StarOutlined />}
            size="small"
            onClick={() => starQuestion(questionDetail.id, questionDetail.isstar)}
          >
            {questionDetail.isstar ? "取消标星" : "标星"}
          </Button>
          <Popconfirm title="确定复制该问卷？" okText="确定" cancelText="取消" onConfirm={confirmCopy}>
            <Button type="text" icon={<CopyOutlined />} size="small" disabled>
              复制
            </Button>
          </Popconfirm>
          <Popconfirm
            title="删除问卷"
            description="确定要将该问卷移至回收站？"
            onConfirm={() => removeQuestion(questionDetail.id)}
            okText="确认"
            cancelText="取消"
          >
            <Button type="text" icon={<DeleteOutlined />} size="small">
              删除
            </Button>
          </Popconfirm>
        </Space>
      </div>
    </div>
  );
};

export default FsQuestionCard;
