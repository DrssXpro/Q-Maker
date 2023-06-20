import { useSelector } from "react-redux";
import { IStoreState } from "../stores";
import { PageInfoStateType } from "../stores/modules/pageInfoReducer";

export default function useStorePageInfo() {
  const pageInfo = useSelector<IStoreState>((state) => state.pageInfo) as PageInfoStateType;

  return pageInfo;
}

