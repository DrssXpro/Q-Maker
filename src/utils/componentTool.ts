import { ComponentInfoType, ComponentStateType } from "../stores/modules/componentReducer";

// 添加新组件
function insertNewComponent(draft: ComponentStateType, newComponent: ComponentInfoType): void {
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

// 删除指定组件后后获取下一个选取的组件id
function getNextSelectId(id: string, componentList: ComponentInfoType[]): string {
  const visibleComponents = componentList.filter((c) => !c.isHidden);
  const len = visibleComponents.length;
  const index = visibleComponents.findIndex((c) => c.id === id);
  // 当前没有选中组件
  if (index < 0) return "";
  // 组件长度为1，被删除后没有其他组件
  if (len <= 1) return "";
  // 所删除的组件正好是最后一个，则选取上一个
  if (index + 1 === len) return visibleComponents[index - 1].id;
  // 所删除的组件不是最后一个，则默认选取下一个
  else return visibleComponents[index + 1].id;
}

// 移动 component，组件上下移动操作
function moveComponent(list: ComponentInfoType[], oldIndex: number, newIndex: number): ComponentInfoType[] {
  const removeItem = list[oldIndex];
  list.splice(oldIndex, 1);
  list.splice(newIndex, 0, removeItem);

  return list;
}

export { insertNewComponent, getNextSelectId, moveComponent };
