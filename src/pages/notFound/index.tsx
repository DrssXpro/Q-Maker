import { Result, Button } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您当前访问的页面不存在!"
        extra={
          <Button type="primary" onClick={() => navigate("/home")}>
            返回首页
          </Button>
        }
      />
    </>
  );
};

export default NotFound;
