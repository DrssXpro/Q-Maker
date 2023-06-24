import { FC, useEffect, useState } from "react";
import styles from "./stat.module.scss";
import StatHeader from "./component/StatHeader";
import LeftPanel from "./component/LeftPanel";
import RightPanel from "./component/RightPanel";
import StatTable from "./component/StatTable";
import { getQuestionDetailApi, getQuestionStatApi } from "../../service/api/questionService";
import { useParams } from "react-router-dom";
import { IQuestionDetail, IQuestionStat } from "../../types/questionType";

const Stat: FC = () => {
  const { id } = useParams();
  // 问卷信息
  const [questionDetail, setQuestionDetail] = useState<IQuestionDetail>();
  // 问卷统计
  const [statData, setStatData] = useState<IQuestionStat[]>([]);

  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  const [total, setTotal] = useState<number>(0);
  // 当前选择select
  const [current, setCurrent] = useState<string>("");
  const [currentType, setCurrentType] = useState<string>("");

  useEffect(() => {
    getQuestionDetail();
    getQuesitonStat();
  }, []);

  // 获取问卷详情
  const getQuestionDetail = async () => {
    const res = await getQuestionDetailApi(id!);
    setQuestionDetail(res.data);
  };

  // 获取问卷统计
  const getQuesitonStat = async () => {
    const res = await getQuestionStatApi(id!, { page: 1, pageSize: 10 });
    console.log(res.data);
    setStatData(res.data.rows);
    setTotal(res.data.count);
  };

  // 处理分页逻辑
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <>
      <div className={styles["stat-container"]}>
        <div className={styles["stat-header"]}>
          <StatHeader />
        </div>
        <div className={styles["stat-content"]}>
          <div className={styles["content-left"]}>
            <LeftPanel
              componentList={questionDetail?.struct}
              currentSelect={current}
              selectComponent={(id) => setCurrent(id)}
              selectComponentType={(type) => setCurrentType(type)}
            />
          </div>
          <div className={styles["content-center"]}>
            <StatTable
              statData={statData}
              selectId={current}
              componentList={questionDetail?.struct}
              selectComponent={(id) => setCurrent(id)}
              selectComponentType={(type) => setCurrentType(type)}
              pageChange={handlePageChange}
              {...{ page, pageSize, total }}
            />
          </div>
          <div className={styles["content-right"]}>
            <RightPanel currentSelect={current} currentType={currentType} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stat;
