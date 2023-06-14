import { FC } from "react";
import styles from "./style/home.module.scss";
import { Button } from "antd";
const Home: FC = () => {
  return (
    <>
      <div className={styles["home-container"]}>
        <div className={styles["home-title"]}>Q Maker</div>
        <div>已累计创建问卷 100 份，发布问卷 100 份，收到答卷 1500 份</div>
        <Button type="primary" style={{ width: "120px", height: "45px", fontSize: "18px", borderRadius: "0" }}>
          开始使用
        </Button>
      </div>
    </>
  );
};

export default Home;
