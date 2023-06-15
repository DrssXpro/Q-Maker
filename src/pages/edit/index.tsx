import { FC } from "react";
import styles from "./edit.module.scss";
import EditHeader from "./components/EditHeader";
import EditCanvas from "./components/EditCanvas";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
const Edit: FC = () => {
  return (
    <>
      <div className={styles["edit-container"]}>
        <div className={styles["edit-header"]}>
          <EditHeader />
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
    </>
  );
};

export default Edit;
