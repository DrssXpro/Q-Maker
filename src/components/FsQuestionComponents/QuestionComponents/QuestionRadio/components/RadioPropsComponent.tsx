import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import { FC } from "react";
import { IQuestionRadioProps } from "../type";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { nanoid } from "@reduxjs/toolkit";

const RadioPropsComponent: FC = (props: IQuestionRadioProps) => {
  const { title, current, isVertical, options = [], disabled, onChange } = props;
  const [form] = Form.useForm();

  const handleValuesChange = () => {
    onChange && onChange(form.getFieldsValue());
  };

  // 保留表单验证，后续保存整张问卷时进行校验
  // const checkForm = (props: IQuestionRadioProps) => {
  //   const { current, options = [] } = props;
  //   let flag = false;
  //   for (let i = 0; i < options.length; i++) {
  //     const { value, text } = options[i];
  //     if (value == current) flag = true;
  //     if (!text.trim().length) {
  //       message.warning("选项内容不能为空");
  //       return false;
  //     }
  //   }
  //   if (!flag) {
  //     message.warning("默认选中的选项不存在");
  //     return false;
  //   }
  //   return true;
  // };
  return (
    <Form
      layout="vertical"
      initialValues={{ title, current, options, isVertical }}
      form={form}
      onValuesChange={handleValuesChange}
      disabled={disabled}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: "请输入标题" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List
          name="options"
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
                  <Form.Item
                    name={[name, "text"]}
                    rules={[
                      { required: true, message: "请输入选项文字" },
                      {
                        validator: (_, text) => {
                          const { options = [] } = form.getFieldsValue();
                          let num = 0;
                          options.forEach((opt: { value: string; text: string }) => {
                            if (opt.text === text) num++;
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
                <Button type="link" onClick={() => add({ text: "", value: nanoid(5) })} icon={<PlusOutlined />} block>
                  添加选项
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item label="默认选中" name="current">
        <Select
          value={current}
          options={options.map(({ text, value }) => ({ value, label: text || "未填写内容" }))}
        ></Select>
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default RadioPropsComponent;
