import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Logo from "./components/Logo";
import styles from "./style/mainlayout.module.scss";
import UserInfo from "./components/UserInfo";
import FsFooter from "../../components/FsFooter/FsFooter";
const { Header, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <>
      <Header className={styles["main-header"]}>
        <Logo />
        <UserInfo />
      </Header>
      <Content className={styles["main-content"]}>
        <Outlet />
      </Content>
      <FsFooter />
    </>
  );
};

export default MainLayout;
