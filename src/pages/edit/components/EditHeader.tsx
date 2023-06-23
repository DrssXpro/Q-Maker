import { ChangeEvent, FC, useState } from "react";
import styles from "./style/EditHeader.module.scss";
import { Button, Input, Space, message } from "antd";
import { CheckOutlined, EditOutlined, LeftOutlined } from "@ant-design/icons";
import FsToolBar from "../../../components/FsToolBar/FsToolBar";
import { useNavigate } from "react-router-dom";
import useStorePageInfo from "../../../hooks/useStorePageInfo";
import { useDispatch } from "react-redux";
import { changePageTitleAction } from "../../../stores/modules/pageInfoReducer";

const QTitle: FC = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const pageInfo = useStorePageInfo();

  const setEditState = () => {
    if (isEdit) {
      message.success("修改标题成功");
    }
    setIsEdit(!isEdit);
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value.trim();
    if (!title) return;
    dispatch(changePageTitleAction(title));
  };

  return (
    <>
      <Space>
        {isEdit ? (
          <Input value={pageInfo.title} onChange={handleChangeTitle} />
        ) : (
          <span style={{ fontWeight: "600" }}>{pageInfo.title}</span>
        )}
        <Button icon={<EditOutlined />} type="text" onClick={setEditState} />
      </Space>
    </>
  );
};

interface IHeaderProps {
  editQuestion: (ispublish: 0 | 1) => void;
}

const EditHeader: FC<IHeaderProps> = (props: IHeaderProps) => {
  const { editQuestion } = props;
  const nav = useNavigate();
  return (
    <div className={styles["edit-header-container"]}>
      <div className={styles["header-left"]}>
        <Space>
          <Button type="link" icon={<LeftOutlined />} onClick={() => nav("/manage")}>
            返回
          </Button>
          <QTitle />
        </Space>
      </div>
      <div className={styles["header-center"]}>
        <FsToolBar />
      </div>
      <div className={styles["header-right"]}>
        <Space>
          <Button icon={<CheckOutlined />} onClick={() => editQuestion(0)}>
            保存
          </Button>
          <Button type="primary" onClick={() => editQuestion(1)}>
            发布
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default EditHeader;
