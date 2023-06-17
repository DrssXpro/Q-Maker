import { FC, useState } from "react";
import { LoadingOutlined, UserAddOutlined } from "@ant-design/icons";
import styles from "./register.module.scss";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { userRegisterApi } from "../../service/api/userService";
import { IRegisterPayload } from "../../types/userType";

interface IFormType extends IRegisterPayload {
  checkpassword: string;
}
const Register: FC = () => {
  const nagivate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: IFormType) => {
    console.log(values);
    handleUserReigster({ username: values.username, password: values.password });
  };

  const handleUserReigster = async (data: IRegisterPayload) => {
    try {
      setLoading(true);
      const res = await userRegisterApi(data);
      res.code === 1000 ? message.success(res.message) : message.warning(res.message);
      setLoading(false);
      res.code === 1000 && nagivate("/login");
    } catch (error) {
      message.error("注册失败");
    }
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
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 19 }}
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

            <Form.Item wrapperCol={{ offset: 7, span: 24 }}>
              <Button type="primary" htmlType="submit" icon={loading ? <LoadingOutlined /> : ""} disabled={loading}>
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
