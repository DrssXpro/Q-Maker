import { Button, Space } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useUserInfo from "../../hooks/useUserInfo";

const UserInfo: FC = () => {
  const nav = useNavigate();
  const { username, handleLoginOut } = useUserInfo();
  return (
    <>
      {username ? (
        <Space>
          <span style={{ color: "#1677FF" }}>{username}</span>
          <Button type="link" onClick={handleLoginOut}>
            退出
          </Button>
        </Space>
      ) : (
        <Button type="link" onClick={() => nav("/login")}>
          登录
        </Button>
      )}
    </>
  );
};

export default UserInfo;
