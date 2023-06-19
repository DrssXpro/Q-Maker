import { Form, Input } from "antd";
import { FC } from "react";
import { IQuestionInfoProps } from "../type";

const InfoPropsComponent: FC = (props: IQuestionInfoProps) => {
  const { title, desc, onChange, disabled } = props;
  const [form] = Form.useForm();

  const handleValuesChange = () => {
    onChange && onChange(form.getFieldsValue());
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ title, desc }}
      onValuesChange={handleValuesChange}
      disabled={disabled}
      form={form}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: "请输入问卷标题" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="desc">
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

export default InfoPropsComponent;
