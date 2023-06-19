import { useSelector } from "react-redux";
import { IStoreState } from "../stores";
import { ComponentStateType } from "../stores/modules/componentReducer";

// 获取 store 中存储的组件信息
export default function useStoreComponent() {
  const components = useSelector<IStoreState>((state) => state.component) as ComponentStateType;
  const { currentSelect, componentList, copyComponent } = components;

  const currentComponent = componentList.find((c) => c.id == currentSelect);

  return {
    currentSelect,
    currentComponent,
    componentList,
    copyComponent,
  };
}
