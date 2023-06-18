import { FC } from "react";
import { IQuestionInputProps } from "../type";
import { Form, Input } from "antd";

const InputPropsComponent: FC<IQuestionInputProps> = (props: IQuestionInputProps) => {
  const { title, placeholder, disabled, onChange } = props;
  const [form] = Form.useForm();

  const handleValuesChange = () => {
    onChange && onChange(form.getFieldsValue());
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ title, placeholder }}
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

export default InputPropsComponent;
