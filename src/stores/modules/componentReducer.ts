import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { ComponentPropsType } from "../../components/FsQuestionComponents/type";
import { getNextSelectId, insertNewComponent, moveComponent } from "../../utils/componentTool";

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
    changeCurrentSelectAction: (state: ComponentStateType, action: PayloadAction<string>) => {
      state.currentSelect = action.payload;
    },
    // 添加新组件
    addComponentAction: (state: ComponentStateType, action: PayloadAction<ComponentInfoType>) => {
      const newComponent = action.payload;
      insertNewComponent(state, newComponent);
    },
    // 删除组件
    reomveComponentAction: (state: ComponentStateType) => {
      const { componentList, currentSelect: removeId } = state;
      const nextId = getNextSelectId(removeId, componentList);
      state.currentSelect = nextId;
      state.componentList = componentList.filter((c) => c.id !== removeId);
    },

    // 控制组件隐藏/显示
    controllComponentHiddenAction: (
      state: ComponentStateType,
      action: PayloadAction<{ id: string; isHidden: boolean }>
    ) => {
      const { componentList } = state;
      const { id, isHidden } = action.payload;
      state.currentSelect = isHidden ? getNextSelectId(id, componentList) : id;
      const current = componentList.find((c) => c.id == id);
      if (current) {
        current.isHidden = isHidden;
      }
    },

    // 控制组件锁定/解锁
    controllComponentLockedAction: (
      state: ComponentStateType,
      action: PayloadAction<{ id: string; isLocked: boolean }>
    ) => {
      const { componentList } = state;
      const { id, isLocked } = action.payload;
      const current = componentList.find((c) => c.id == id);
      if (current) {
        current.isLocked = isLocked;
      }
    },
    // 复制当前的组件
    copyComponentAction: (state: ComponentStateType) => {
      const { componentList, currentSelect } = state;
      const currentComponent = componentList.find((c) => c.id === currentSelect);
      if (!currentComponent) return;
      state.copyComponent = JSON.parse(JSON.stringify(currentComponent));
    },

    // 粘贴已复制的组件
    pasteComponentAction: (state: ComponentStateType) => {
      const { copyComponent } = state;
      if (!copyComponent) return;
      copyComponent.id = nanoid(); // key: 对于复制的组件，需要将 id 进行重置
      insertNewComponent(state, copyComponent);
    },

    // 移动组件
    moveComponentAction: (
      state: ComponentStateType,
      action: PayloadAction<{
        oldIndex: number;
        newIndex: number;
      }>
    ) => {
      const { componentList } = state;
      const { oldIndex, newIndex } = action.payload;
      state.componentList = moveComponent(componentList, oldIndex, newIndex);
    },
  },
});

export const {
  resetComponentsAction,
  changeCurrentSelectAction,
  addComponentAction,
  reomveComponentAction,
  controllComponentHiddenAction,
  controllComponentLockedAction,
  copyComponentAction,
  pasteComponentAction,
  moveComponentAction,
} = componentSlice.actions;
export default componentSlice.reducer;
