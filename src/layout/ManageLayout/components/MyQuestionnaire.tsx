import { FC } from "react";
import styles from "./style/questionnaire.module.scss";
import { Button, Input } from "antd";
import FsQuestionCard from "../../../components/FsQuestionCard/FsQuestionCard";

const { Search } = Input;
const MyQuestionnaire: FC = () => {
  const handleSearchList = (value: string) => {
    console.log(value);
  };

  const list = [1, 2, 3];
  return (
    <>
      <div className={styles["search-header"]}>
        <span style={{ fontSize: "22px", fontWeight: "500", letterSpacing: "0.1rem" }}>问卷列表</span>
        <Search placeholder="请输入标题..." allowClear onSearch={handleSearchList} style={{ width: 250 }} />
      </div>
      <div className={styles["questionnaire-list"]}>
        {list.map((i) => (
          <FsQuestionCard key={i}></FsQuestionCard>
        ))}

        <Button type="primary" style={{ borderRadius: "0" }}>
          加载更多
        </Button>
      </div>
    </>
  );
};

export default MyQuestionnaire;
