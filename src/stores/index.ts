import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserStateType } from "./modules/userReducer";
import componentReducer, { ComponentStateType } from "./modules/componentReducer";
import pageInfoReducer, { PageInfoStateType } from "./modules/pageInfoReducer";

export interface IStoreState {
  user: UserStateType;
  component: ComponentStateType;
  pageInfo: PageInfoStateType;
}


export default configureStore({
  reducer: {
    user: userReducer,
    component: componentReducer,
    pageInfo: pageInfoReducer,
  },
});
