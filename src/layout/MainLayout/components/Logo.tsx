import { FC } from "react";
import { FormOutlined } from "@ant-design/icons";
import styles from "./style/Logo.module.scss";
const Logo: FC = () => {
  return (
    <>
      <div className={styles.logo}>
        <FormOutlined />
        <span>Q Maker</span>
      </div>
    </>
  );
};

export default Logo;
