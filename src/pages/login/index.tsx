import { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import styles from "./login.module.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const nagivate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values);
    nagivate("/manage");
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
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请填写用户名" }]}>
              <Input />
            </Form.Item>

            <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码" }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
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
