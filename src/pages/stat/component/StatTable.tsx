import { FC } from "react";
import { Table, Tag } from "antd";
import styles from "./style/StatTable.module.scss";
import { IQuestionStat } from "../../../types/questionType";
import { ComponentInfoType } from "../../../stores/modules/componentReducer";

interface IStatTableProps {
  statData: IQuestionStat[];
  componentList?: ComponentInfoType[];
  selectId: string;
  page: number;
  pageSize: number;
  total: number;
  selectComponent: (id: string) => void;
  selectComponentType: (type: string) => void;
  pageChange: (page: number) => void;
}

const StatTable: FC<IStatTableProps> = (props: IStatTableProps) => {
  const {
    statData,
    componentList = [],
    selectId,
    page,
    pageSize,
    total,
    selectComponent,
    selectComponentType,
    pageChange,
  } = props;
  console.log(componentList);
  const columns = componentList.map((c) => {
    const { id, title, type, props = {} } = c;
    const cTitle = props!.title || title;

    return {
      title: (
        <div
          onClick={() => {
            selectComponent(id);
            selectComponentType(type);
          }}
        >
          <span style={{ color: id === selectId ? "#1890ff" : "inherit", cursor: "pointer" }}>{cTitle}</span>
        </div>
      ),
      dataIndex: id,
      key: id,
      render: (value: any) => {
        if (value.type === "questionCheckbox") {
          return value.value.map((i: any) => <Tag color="orange">{i}</Tag>);
        } else if (value.type === "questionRadio") {
          return <Tag color="blue">{value.value}</Tag>;
        } else return <div>{value?.value}</div>;
      },
    };
  });
  return (
    <div className={styles["table-container"]}>
      <h2>答卷数量：{total}</h2>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={statData}
        pagination={{
          current: page,
          pageSize,
          total,
          showSizeChanger: false,
          showQuickJumper: false,
          onChange: pageChange,
        }}
      />
    </div>
  );
};

export default StatTable;
