import { FC, useEffect, useState } from "react";
import styles from "./style/questionnaire.module.scss";
import { Button, Input, Spin } from "antd";
import FsQuestionCard from "../../../components/FsQuestionCard/FsQuestionCard";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { getQuestionListApi } from "../../../service/api/questionService";
import { IQuestionInfo } from "../../../types/questionType";

const { Search } = Input;
const MyQuestionnaire: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);
  const [isMore, setIsMore] = useState<boolean>(true);
  const [list, setList] = useState<IQuestionInfo[]>([]);

  const [searchParams] = useSearchParams();

  // URL上的参数改变，请求获取数据
  useEffect(() => {
    getQuestionList();
  }, [searchParams]);

  const goEditPage = () => {
    nav("/edit/123");
  };

  const goStatPage = () => {
    nav("/stat/123");
  };

  const handleSearchList = (value: string) => {
    console.log(value);
  };

  // 从URL上获取查询参数，请求获取数据
  const getQuestionList = async () => {
    if (isMore) {
      setLoading(true);
      const page = parseInt(searchParams.get("page") || "") || 1;
      const pageSize = parseInt(searchParams.get("pageSize") || "") || 5;
      setPage(page);
      setPageSize(pageSize);
      const res = await getQuestionListApi({ page, pageSize });
      if (!res.data.rows.length) setIsMore(false);
      setList([...list, ...res.data.rows]);
      setLoading(false);
      console.log("check:", res.data);
    }
  };

  // 获取更多数据：改变URL上的参数，由effect触发请求
  const getMoreData = () => {
    setPage(page + 1);
    searchParams.set("page", (page + 1).toString());
    searchParams.set("pageSize", pageSize.toString());
    nav({
      pathname,
      search: searchParams.toString(), // 除了改变 page pageSize 之外，其他的 url 参数要带着
    });
  };

  return (
    <Spin spinning={loading}>
      <div className={styles["search-header"]}>
        <span style={{ fontSize: "22px", fontWeight: "500", letterSpacing: "0.1rem" }}>问卷列表</span>
        <Search placeholder="请输入标题..." allowClear onSearch={handleSearchList} style={{ width: 250 }} />
      </div>
      <div className={styles["questionnaire-list"]}>
        {list.map((i) => (
          <FsQuestionCard goEditPage={goEditPage} goStatPage={goStatPage} key={i.id}></FsQuestionCard>
        ))}
        {!isMore ? (
          <span>没有更多问卷了...</span>
        ) : (
          <Button type="primary" style={{ borderRadius: "0" }} onClick={getMoreData}>
            加载更多
          </Button>
        )}
      </div>
    </Spin>
  );
};

export default MyQuestionnaire;
