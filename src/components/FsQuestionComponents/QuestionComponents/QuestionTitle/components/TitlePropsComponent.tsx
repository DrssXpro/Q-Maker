import { FC } from "react";
import { IQuestionTitleProps } from "../type";
import { Form, Input, Radio, Select } from "antd";
import { useForm } from "antd/es/form/Form";

const TitlePropsComponent: FC = (props: IQuestionTitleProps) => {
  const { text, level, direction, onChange, disabled } = props;
  const [form] = useForm();

  const handleValueChange = () => {
    onChange && onChange(form.getFieldsValue());
  };
  return (
    <Form
      form={form}
      layout="vertical"
      disabled={disabled}
      initialValues={{ text, level, direction }}
      onValuesChange={handleValueChange}
    >
      <Form.Item label="标题内容" name="text" rules={[{ required: true, message: "请输入标题内容" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="等级" name="level">
        <Select
          options={[
            { value: 1, text: 1 },
            { value: 2, text: 2 },
            { value: 3, text: 3 },
          ]}
        ></Select>
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

export default TitlePropsComponent;
