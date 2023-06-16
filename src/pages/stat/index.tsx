import { FC } from "react";
import styles from "./stat.module.scss";
import StatHeader from "./component/StatHeader";
import LeftPanel from "./component/LeftPanel";
import RightPanel from "./component/RightPanel";
import StatTable from "./component/StatTable";

const Stat: FC = () => {
  return (
    <>
      <div className={styles["stat-container"]}>
        <div className={styles["stat-header"]}>
          <StatHeader />
        </div>
        <div className={styles["stat-content"]}>
          <div className={styles["content-left"]}>
            <LeftPanel />
          </div>
          <div className={styles["content-center"]}>
            <StatTable />
          </div>
          <div className={styles["content-right"]}>
            <RightPanel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stat;
