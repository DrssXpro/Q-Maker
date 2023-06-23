import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../stores";
import { PageInfoStateType, resetPageInfoAction } from "../stores/modules/pageInfoReducer";
import { ComponentStateType, resetComponentsAction } from "../stores/modules/componentReducer";
import { IQuestionDetail } from "../types/questionType";

export default function useStoreInfo() {
  const dispatch = useDispatch();
  // 修改问卷：读取store存储的数据
  const pageInfo = useSelector<IStoreState>((state) => state.pageInfo) as PageInfoStateType;
  const component = useSelector<IStoreState>((state) => state.component) as ComponentStateType;

  // 获取问卷详情：问卷信息保存至store
  const setQuestionInfo = (data: IQuestionDetail) => {
    dispatch(
      resetPageInfoAction({
        title: data.title,
        desc: data.desc,
        css: data.css,
        js: data.js,
      })
    );
    dispatch(
      resetComponentsAction({
        currentSelect: "",
        copyComponent: null,
        componentList: data.struct || [],
      })
    );
  };

  return {
    pageInfo,
    component,
    setQuestionInfo,
  };
}
