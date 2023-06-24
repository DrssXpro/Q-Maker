import { FC } from "react";
import { Table } from "antd";
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
  pageChange: (page: number) => void;
}

const StatTable: FC<IStatTableProps> = (props: IStatTableProps) => {
  const { statData, componentList = [], selectId, page, pageSize, total, selectComponent, pageChange } = props;

  const columns = componentList.map((c) => {
    const { id, title, props = {} } = c;
    const cTitle = props!.title || title;

    return {
      title: (
        <div onClick={() => selectComponent(id)}>
          <span style={{ color: id === selectId ? "#1890ff" : "inherit", cursor: "pointer" }}>{cTitle}</span>
        </div>
      ),
      dataIndex: id,
      key: id,
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
