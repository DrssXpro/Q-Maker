import { Button } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const UserInfo: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button type="link" onClick={() => navigate("/login")}>
        登录
      </Button>
    </>
  );
};

export default UserInfo;
