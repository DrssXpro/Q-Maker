import { FC } from "react";
import styles from "./FsEmpty.module.scss";
const FsEmpty: FC = () => {
  return (
    <div className={styles["fs-empty-container"]}>
      <img src="https://pic.fasyncsy.com.cn/empty.png" alt="空内容" />
    </div>
  );
};

export default FsEmpty;
