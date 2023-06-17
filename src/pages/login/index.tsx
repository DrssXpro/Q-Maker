import { FC, useState } from "react";
import { LoadingOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./login.module.scss";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { ILoginPayload } from "../../types/userType";
import { userLogin } from "../../service/api/userService";
import useUserInfo from "../../hooks/useUserInfo";
const Login: FC = () => {
  const nagivate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { saveUserInfo } = useUserInfo();

  const handleLogin = async (data: ILoginPayload) => {
    try {
      setLoading(true);
      const res = await userLogin(data);
      res.code === 1000 ? message.success(res.message) : message.warning(res.message);
      res.code === 1000 && nagivate("/manage");
      res.code === 1000 && saveUserInfo(res.data);
      setLoading(false);
    } catch (error) {
      message.error("登录失败");
    }
  };

  return (
    <>
      <div className={styles["login-container"]}>
        <div className={styles["login-content"]}>
          <div className={styles["login-title"]}>
            <UserOutlined />
            <span>用户登录</span>
          </div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            autoComplete="off"
          >
            <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请填写用户名" }]}>
              <Input />
            </Form.Item>

            <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码" }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" icon={loading ? <LoadingOutlined /> : ""} disabled={loading}>
                登录
              </Button>
              <Button type="link" onClick={() => nagivate("/register")}>
                注册新用户
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
