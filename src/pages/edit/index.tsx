import { FC, useEffect, useState } from "react";
import styles from "./edit.module.scss";
import EditHeader from "./components/EditHeader";
import EditCanvas from "./components/EditCanvas";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { getQuestionDetailApi, updateQuestionApi } from "../../service/api/questionService";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Result, Spin, message } from "antd";

import useStoreInfo from "../../hooks/useStoreInfo";

const LoadingPage: FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <Spin />
    </div>
  );
};

const EmptyPage: FC = () => {
  const nav = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="未找到该问卷"
      extra={
        <Button type="primary" onClick={() => nav("/manage")}>
          返回首页
        </Button>
      }
    />
  );
};
const Edit: FC = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { pageInfo, component, setQuestionInfo } = useStoreInfo();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFound, setIsFound] = useState<boolean>(false);

  useEffect(() => {
    getQuestionDetail();
  }, []);

  // 获取问卷详情
  const getQuestionDetail = async () => {
    try {
      setLoading(true);
      const res = await getQuestionDetailApi(id!);
      console.log(res);
      res.code === 1000 ? setIsFound(true) : message.warning("未找到该问卷");
      res.code === 1000 && setQuestionInfo(res.data);
    } catch (error) {
      console.log("check:", error);
      message.error("获取问卷失败");
    }
    setLoading(false);
  };

  // 编辑 / 发布问卷
  const handleUpateQuestion = async (ispublish: 0 | 1) => {
    try {
      const payload = {
        ...pageInfo,
        ispublish,
        questionStruct: component.componentList,
      };
      const res = await updateQuestionApi(id!, payload);
      if (res.code === 1000) {
        message.success(ispublish ? "发布成功" : "保存成功");
        nav(`/stat/${id}`);
      } else message.warning(res.message);
    } catch (error) {
      console.log("check:", error);
      message.error("修改失败");
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : !isFound ? (
        <EmptyPage />
      ) : (
        <div className={styles["edit-container"]}>
          <div className={styles["edit-header"]}>
            <EditHeader editQuestion={handleUpateQuestion} />
          </div>
          <div className={styles["edit-content"]}>
            <div className={styles["content-left"]}>
              <LeftPanel />
            </div>
            <div className={styles["content-center"]}>
              <EditCanvas />
            </div>
            <div className={styles["content-right"]}>
              <RightPanel />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
