import { FC } from "react";
import { IQuestionRateProps } from "../type";
import { Checkbox, Form, Input, InputNumber } from "antd";

const RatePropsComponent: FC<IQuestionRateProps> = (props: IQuestionRateProps) => {
  const { title, count, value, allowHalf, disabled, onChange } = props;
  const [form] = Form.useForm();
  const handleValuesChange = () => {
    console.log("check:", form.getFieldsValue());
    onChange && onChange(form.getFieldsValue());
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ title, count, allowHalf, value }}
      form={form}
      onValuesChange={handleValuesChange}
      disabled={disabled}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: "请输入标题" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="数量" name="count">
        <InputNumber min={0} max={10} defaultValue={count} />
      </Form.Item>
      <Form.Item label="默认值" name="value">
        <InputNumber min={0} max={count} defaultValue={value} step={allowHalf ? 0.5 : 1} />
      </Form.Item>
      <Form.Item label="数值格式" name="allowHalf" valuePropName="checked">
        <Checkbox>允许半星</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default RatePropsComponent;
