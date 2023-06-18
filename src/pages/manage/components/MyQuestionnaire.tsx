import { FC, useEffect, useState } from "react";
import styles from "./style/questionnaire.module.scss";
import { Button, Input, Spin, message } from "antd";
import FsQuestionCard from "../../../components/FsQuestionCard/FsQuestionCard";
import { useNavigate } from "react-router-dom";
import { deleteQuestionAApi, getQuestionListApi, starQuestionApi } from "../../../service/api/questionService";
import { IQuestionInfo } from "../../../types/questionType";
import FsEmpty from "../../../components/FsEmpty/FsEmpty";

const { Search } = Input;
const MyQuestionnaire: FC = () => {
  const nav = useNavigate();
  const pageSize = 6;
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [isMore, setIsMore] = useState<boolean>(true);
  const [list, setList] = useState<IQuestionInfo[]>([]);

  // URL上的参数改变，请求获取数据
  useEffect(() => {
    getQuestionList();
  }, [page]);

  const goEditPage = () => {
    nav("/edit/123");
  };

  const goStatPage = () => {
    nav("/stat/123");
  };

  const handleSearchList = (value: string) => {
    console.log(value);
  };

  // 处理移除问卷：页面数据 + 后台数据 移除
  const handleReomveQuestion = async (id: string) => {
    try {
      setLoading(true);
      const res = await deleteQuestionAApi(id);
      res.code === 1000 ? message.success(res.message) : message.warning(res.message);
      res.code === 1000 && setList(list.filter((i) => i.id !== id));
    } catch (error) {
      message.error("移除失败");
    }
    setLoading(false);
  };
  // 处理标星问卷：页面数据 + 后台数据 更改
  const handleStarQuestion = async (id: string, iscollect: 0 | 1) => {
    try {
      setLoading(true);
      const res = await starQuestionApi({ targetId: id, iscollect: iscollect === 1 ? 0 : 1 });
      res.code === 1000 ? message.success(res.message) : message.warning(res.message);
      res.code === 1000 &&
        setList(
          list.map((i) => {
            if (i.id === id) i.isstar = i.isstar === 1 ? 0 : 1;
            return i;
          })
        );
    } catch (error) {
      message.error("操作失败");
    }
    setLoading(false);
  };

  const getQuestionList = async () => {
    try {
      if (isMore) {
        setLoading(true);
        const res = await getQuestionListApi({ page, pageSize, isdelete: 0 });
        if (!res.data.rows.length) setIsMore(false);
        setList([...list, ...res.data.rows]);
        setLoading(false);
      }
    } catch (error) {
      message.error("获取数据列表失败");
    }
  };

  const getMoreData = () => {
    setPage(page + 1);
  };

  return (
    <Spin spinning={loading}>
      <div className={styles["search-header"]}>
        <span style={{ fontSize: "22px", fontWeight: "500", letterSpacing: "0.1rem" }}>问卷列表</span>
        <Search placeholder="请输入标题..." allowClear onSearch={handleSearchList} style={{ width: 250 }} />
      </div>
      {list.length ? (
        <div className={styles["questionnaire-list"]}>
          {list.map((i) => (
            <FsQuestionCard
              goEditPage={goEditPage}
              goStatPage={goStatPage}
              removeQuestion={handleReomveQuestion}
              starQuestion={handleStarQuestion}
              questionDetail={i}
              key={i.id}
            ></FsQuestionCard>
          ))}
          {!isMore ? (
            <span>没有更多问卷了...</span>
          ) : (
            <Button type="primary" style={{ borderRadius: "0" }} onClick={getMoreData}>
              加载更多
            </Button>
          )}
        </div>
      ) : (
        <FsEmpty />
      )}
    </Spin>
  );
};

export default MyQuestionnaire;
