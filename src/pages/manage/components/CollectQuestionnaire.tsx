import { FC, useEffect, useState } from "react";
import styles from "./style/questionnaire.module.scss";
import { Input, Pagination, Spin, message } from "antd";
import FsQuestionCard from "../../../components/FsQuestionCard/FsQuestionCard";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { deleteQuestionAApi, getStarQuestionListApi, starQuestionApi } from "../../../service/api/questionService";
import { IQuestionInfo } from "../../../types/questionType";
import FsEmpty from "../../../components/FsEmpty/FsEmpty";

const { Search } = Input;
const CollectQuestionnaire: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(2);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
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

  const handleReomveQuestion = async (id: string) => {
    try {
      setLoading(true);
      const res = await deleteQuestionAApi(id);
      res.code === 1000 ? message.success(res.message) : message.warning(res.message);
      res.code === 1000 && getQuestionList();
    } catch (error) {
      message.error("删除失败");
    }
    setLoading(false);
  };

  const handleStarQuestion = async (id: string, iscollect: 0 | 1) => {
    try {
      setLoading(true);
      const res = await starQuestionApi({ targetId: id, iscollect: iscollect === 1 ? 0 : 1 });
      res.code === 1000 ? message.success(res.message) : message.warning(res.message);
      res.code === 1000 && getQuestionList();
    } catch (error) {
      message.error("操作失败");
    }
    setLoading(false);
  };

  const handleSearchList = (value: string) => {
    console.log(value);
  };

  // 从URL上获取查询参数，请求获取数据
  const getQuestionList = async () => {
    try {
      setLoading(true);
      const page = parseInt(searchParams.get("page") || "") || 1;
      const pageSize = parseInt(searchParams.get("pageSize") || "") || 2;
      setPage(page);
      setPageSize(pageSize);
      const res = await getStarQuestionListApi({ page, pageSize });
      setList(res.data.rows);
      setTotal(res.data.count);
      setLoading(false);
      console.log("check:", res.data);
    } catch (error) {
      message.error("获取列表失败");
    }
  };

  // 分页逻辑
  const handlePageChange = (page: number) => {
    setPage(page);
    searchParams.set("page", page.toString());
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
      {list.length ? (
        <div className={styles["questionnaire-list"]}>
          {list.map((i) => (
            <FsQuestionCard
              goEditPage={goEditPage}
              goStatPage={goStatPage}
              starQuestion={handleStarQuestion}
              removeQuestion={handleReomveQuestion}
              questionDetail={i}
              key={i.id}
            ></FsQuestionCard>
          ))}
          <div style={{ width: "100%", textAlign: "right" }}>
            <Pagination current={page} pageSize={pageSize} total={total} onChange={handlePageChange} />
          </div>
        </div>
      ) : (
        <FsEmpty />
      )}
    </Spin>
  );
};

export default CollectQuestionnaire;
