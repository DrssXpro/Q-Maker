import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserInfo } from "../../types/userType";

export type UserStateType = Pick<IUserInfo, "id" | "username">;

// 获取本地用户信息读取至 store 中
function getLocalInfo() {
  const userString = localStorage.getItem("userInfo");
  const userInfo = {
    id: "",
    username: "",
  };
  if (userString) {
    const item = JSON.parse(userString) as IUserInfo;
    userInfo.id = item.id;
    userInfo.username = item.username;
  }

  return userInfo;
}

const initState: UserStateType = getLocalInfo();

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
