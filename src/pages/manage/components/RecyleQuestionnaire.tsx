import { FC, useEffect, useState } from "react";
import styles from "./style/questionnaire.module.scss";
import { Button, Input, Space, message } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { IQuestionInfo } from "../../../types/questionType";
import { getStarQuestionListApi } from "../../../service/api/questionService";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const { Search } = Input;

type ITableItem = Pick<IQuestionInfo, "id" | "title" | "ispublish" | "peopleCount" | "createdAt">;

const columns: ColumnsType<ITableItem> = [
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "是否发布",
    dataIndex: "ispublish",
  },
  {
    title: "答卷",
    dataIndex: "peopleCount",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
  },
];
const RecyleQuestionnaire: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [list, setList] = useState<ITableItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);
  const [total, setTotal] = useState<number>(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getQuestList();
  }, [pathname]);

  const handleSearchList = (value: string) => {
    console.log(value);
  };

  const getQuestList = async () => {
    try {
      setLoading(true);
      const page = parseInt(searchParams.get("page") || "") || 1;
      const pageSize = parseInt(searchParams.get("pageSize") || "") || 2;
      setPage(page);
      setPageSize(pageSize);
      const res = await getStarQuestionListApi({ page: 1, pageSize: 2 });
      setList(res.data.rows);
      setTotal(res.data.count);
    } catch (error) {
      message.error("获取列表数据失败");
    }
    setLoading(false);
  };

  const handleRecoverQuestion = () => {};
  const handleDeleteQuestion = () => {};

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handlePageChage = (page: number) => {
    setPage(page);
    searchParams.set("page", page.toString());
    searchParams.set("pageSize", pageSize.toString());
    nav({
      pathname,
      search: searchParams.toString(), // 除了改变 page pageSize 之外，其他的 url 参数要带着
    });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
      <div className={styles["search-header"]}>
        <span style={{ fontSize: "22px", fontWeight: "500", letterSpacing: "0.1rem" }}>问卷列表</span>
        <Search placeholder="请输入标题..." allowClear onSearch={handleSearchList} style={{ width: 250 }} />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Space>
          <Button type="primary" onClick={handleRecoverQuestion} disabled={!hasSelected} loading={loading}>
            恢复
          </Button>
          <Button type="primary" onClick={handleDeleteQuestion} disabled={!hasSelected} loading={loading}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        rowSelection={rowSelection}
        rowKey="id"
        columns={columns}
        dataSource={list}
        pagination={{
          current: page,
          pageSize,
          total,
          showSizeChanger: false,
          showQuickJumper: false,
          onChange: handlePageChage,
        }}
      />
    </>
  );
};

export default RecyleQuestionnaire;
