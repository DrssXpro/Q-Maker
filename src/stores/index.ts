import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserStateType } from "./modules/userReducer";

export interface IStoreState {
  user: UserStateType;
}
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
