import { FC } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import styles from "./register.module.scss";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Register: FC = () => {
  const nagivate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className={styles["register-container"]}>
        <div className={styles["register-content"]}>
          <div className={styles["register-title"]}>
            <UserAddOutlined />
            <span>注册新用户</span>
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
            <Form.Item
              label="确认密码"
              name="checkpassword"
              rules={[
                { required: true, message: "请输入密码" },
                // 自定义校验规则
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("两次密码输入不一致"));
                    }
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button type="link" onClick={() => nagivate("/login")}>
                已有账号，登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
