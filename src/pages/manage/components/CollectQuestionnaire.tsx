import { FC } from "react";
import styles from "./style/questionnaire.module.scss";
import { Input, Pagination } from "antd";
import FsQuestionCard from "../../../components/FsQuestionCard/FsQuestionCard";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const CollectQuestionnaire: FC = () => {
  const nav = useNavigate();
  const list = [1, 2, 3, 4, 5, 6];

  const goEditPage = () => {
    nav("/edit/123");
  };

  const goStatPage = () => {
    nav("/stat/123");
  };

  const handleSearchList = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div className={styles["search-header"]}>
        <span style={{ fontSize: "22px", fontWeight: "500", letterSpacing: "0.1rem" }}>问卷列表</span>
        <Search placeholder="请输入标题..." allowClear onSearch={handleSearchList} style={{ width: 250 }} />
      </div>
      <div className={styles["questionnaire-list"]}>
        {list.map((i) => (
          <FsQuestionCard goEditPage={goEditPage} goStatPage={goStatPage} key={i}></FsQuestionCard>
        ))}
        <div style={{ width: "100%", textAlign: "right" }}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </>
  );
};

export default CollectQuestionnaire;
