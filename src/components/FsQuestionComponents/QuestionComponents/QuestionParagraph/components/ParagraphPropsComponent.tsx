import { FC } from "react";
import { IQuestionParagraphProps } from "../type";
import { Form, Input, Radio } from "antd";

const ParagraphPropsComponent: FC = (props: IQuestionParagraphProps) => {
  const { text, direction, onChange, disabled } = props;
  const [form] = Form.useForm();

  function handleValuesChange() {
    onChange && onChange(form.getFieldsValue());
  }

  return (
    <Form
      layout="vertical"
      initialValues={{ text, direction }}
      onValuesChange={handleValuesChange}
      disabled={disabled}
      form={form}
    >
      <Form.Item label="段落内容" name="text" rules={[{ required: true, message: "请输入段落内容" }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="对齐方式" name="direction">
        <Radio.Group>
          <Radio value="left">靠左</Radio>
          <Radio value="center">居中</Radio>
          <Radio value="right">靠右</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default ParagraphPropsComponent;
