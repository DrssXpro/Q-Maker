import { Form, Input } from "antd";
import { FC, useEffect } from "react";
import useStorePageInfo from "../../../hooks/useStorePageInfo";
import { useDispatch } from "react-redux";
import { resetPageInfoAction } from "../../../stores/modules/pageInfoReducer";

const FsEditSetting: FC = () => {
  const dispatch = useDispatch();
  const pageInfo = useStorePageInfo();
  const [form] = Form.useForm();

  // 观测 pageInfo 变化更改视图：获取数据初始化使用
  useEffect(() => {
    form.setFieldsValue(pageInfo);
  }, [pageInfo]);

  const handleValuesChange = () => {
    dispatch(resetPageInfoAction(form.getFieldsValue()));
  };
  return (
    <Form layout="vertical" initialValues={pageInfo} onValuesChange={handleValuesChange} form={form}>
      <Form.Item label="问卷标题" name="title" rules={[{ required: true, message: "请输入标题" }]}>
        <Input placeholder="请输入标题" />
      </Form.Item>
      <Form.Item label="问卷描述" name="desc">
        <Input.TextArea placeholder="问卷描述..." />
      </Form.Item>
      <Form.Item label="样式代码" name="css">
        <Input.TextArea placeholder="输入 CSS 样式代码..." />
      </Form.Item>
      <Form.Item label="脚本代码" name="js">
        <Input.TextArea placeholder="输入 JS 脚本代码..." />
      </Form.Item>
    </Form>
  );
};

export default FsEditSetting;
