import { FC } from "react";
import { useDispatch } from "react-redux";
import styles from "./FsEditProps.module.scss";
import useStoreComponent from "../../../hooks/useStoreComponent";
import { getComponentConfigByType } from "../../FsQuestionComponents";
import { ComponentPropsType } from "../../FsQuestionComponents/type";
import { changeComponentPropsAction } from "../../../stores/modules/componentReducer";

const FsEditProps: FC = () => {
  const dispatch = useDispatch();
  const { currentComponent } = useStoreComponent();
  // 判断是否有选中组件
  if (!currentComponent) return <div style={{ textAlign: "center" }}>未选中组件</div>;

  const { type, props, isLocked, isHidden } = currentComponent;

  const componentConfig = getComponentConfigByType(type);

  if (!componentConfig) return <div style={{ textAlign: "center" }}>未选中组件</div>;

  // 修改 props
  const handleChangeProps = (newProps: ComponentPropsType) => {
    if (!currentComponent) return;
    const { id } = currentComponent;
    dispatch(changeComponentPropsAction({ id, newProps }));
  };

  const { PropsComponent } = componentConfig;
  return (
    <div className={styles["list-container"]}>
      <PropsComponent {...props} onChange={handleChangeProps} disabled={isLocked || isHidden}></PropsComponent>
    </div>
  );
};

export default FsEditProps;
