import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserStateType } from "./modules/userReducer";
import componentReducer, { ComponentStateType } from "./modules/componentReducer";

export interface IStoreState {
  user: UserStateType;
  component: ComponentStateType;
}
export default configureStore({
  reducer: {
    user: userReducer,
    component: componentReducer,
  },
});
