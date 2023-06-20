import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { FC } from "react";
import { IQuestionCheckboxProps } from "../type";

const CheckboxPropsComponent: FC = (props: IQuestionCheckboxProps) => {
  const { title, list, disabled, isVertical, onChange } = props;
  const [form] = Form.useForm();

  const handleValuesChange = () => {
    onChange && onChange(form.getFieldsValue());
  };
  return (
    <Form
      layout="vertical"
      initialValues={{ title, list, isVertical }}
      form={form}
      onValuesChange={handleValuesChange}
      disabled={disabled}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: "请输入标题" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List
          name="list"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("至少需要两个选项"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map(({ key, name }, index) => (
                <Space key={key} align="baseline">
                  <Form.Item name={[name, "checked"]} valuePropName="checked">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item
                    name={[name, "text"]}
                    rules={[
                      { required: true, message: "请输入选项文字" },
                      {
                        validator: (_, text) => {
                          const { list = [] } = form.getFieldsValue();
                          let num = 0;
                          console.log(list);
                          list.forEach((i: { value: string; text: string; checked: boolean }) => {
                            if (i.text === text) num++;
                          });
                          if (num === 1) return Promise.resolve();

                          return Promise.reject(new Error("和其他选项内容重复"));
                        },
                      },
                    ]}
                  >
                    <Input placeholder="请输入选项文字..." />
                  </Form.Item>
                  {index > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="link"
                  onClick={() => add({ text: "", value: nanoid(5), checked: false })}
                  icon={<PlusOutlined />}
                  block
                >
                  添加选项
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default CheckboxPropsComponent;
