import { produce } from "immer";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ComponentPropsType } from "../../components/FsQuestionComponents/type";
import { insertNewComponent } from "../../utils/componentTool";

export type ComponentInfoType = {
  id: string;
  type: string;
  title: string;
  isHidden?: boolean;
  isLocked?: boolean;
  props: ComponentPropsType;
};

// state type
export type ComponentStateType = {
  currentSelect: string;
  componentList: ComponentInfoType[];
  copyComponent: ComponentInfoType | null;
};

// init state
const initState: ComponentStateType = {
  currentSelect: "", // key: 当前选中的组件
  componentList: [],
  copyComponent: null, // 复制拷贝功能，存放当前项
};

const componentSlice = createSlice({
  name: "component",
  initialState: initState,
  reducers: {
    // 重置所有组件
    resetComponentsAction: (_state: ComponentStateType, action: PayloadAction<ComponentStateType>) => {
      return action.payload;
    },
    // 修改 CurrentSelect
    changeCurrentSelectAction: produce((draft: ComponentStateType, action: PayloadAction<string>) => {
      draft.currentSelect = action.payload;
    }),
    // 添加新组件
    addComponentAction: (draft: ComponentStateType, action: PayloadAction<ComponentInfoType>) => {
      const newComponent = action.payload;
      insertNewComponent(draft, newComponent);
    },
  },
});

export const { resetComponentsAction, changeCurrentSelectAction, addComponentAction } = componentSlice.actions;
export default componentSlice.reducer;
