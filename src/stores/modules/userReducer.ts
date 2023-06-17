import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserInfo } from "../../types/userType";

export type UserStateType = Pick<IUserInfo, "id" | "username">;

const initState: UserStateType = {
  id: "",
  username: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setUserInfoAction(_state: UserStateType, action: PayloadAction<UserStateType>) {
      return action.payload;
    },
    logOutAction: () => initState,
  },
});

export const { setUserInfoAction, logOutAction } = userSlice.actions;

export default userSlice.reducer;
