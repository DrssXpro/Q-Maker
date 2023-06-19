import { ComponentInfoType, ComponentStateType } from "../stores/modules/componentReducer";

// 添加新组件
function insertNewComponent(draft: ComponentStateType, newComponent: ComponentInfoType) {
  const { currentSelect, componentList } = draft;
  const index = componentList.findIndex((c) => c.id === currentSelect);
  // 当前没有选中，在末尾添加
  if (index < 0) {
    draft.componentList.push(newComponent);
  } else {
    // 当前有选中，在选中的组件后面添加
    draft.componentList.splice(index + 1, 0, newComponent);
  }
}

export { insertNewComponent };
