import { Form, Input } from "antd";
import { FC } from "react";
import { IQuestionTextareaProps } from "../type";

const TextareaPropsComponent: FC = (props: IQuestionTextareaProps) => {
  const { title, placeholder, disabled, onChange } = props;
  const [form] = Form.useForm();

  const handleValuesChange = () => {
    onChange && onChange(form.getFieldsValue());
  };
  return (
    <Form
      layout="vertical"
      initialValues={{ title, placeholder }}
      form={form}
      onValuesChange={handleValuesChange}
      disabled={disabled}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: "请输入标题" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default TextareaPropsComponent;
