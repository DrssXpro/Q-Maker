import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserStateType, logOutAction, setUserInfoAction } from "../stores/modules/userReducer";
import { IStoreState } from "../stores";
import { IUserInfo } from "../types/userType";
import { message } from "antd";

// 获取用户信息
// 登录信息保存 + 退出登录信息清空
export default function useUserInfo() {
  const nav = useNavigate();
  const { username, id } = useSelector<IStoreState>((state) => state.user) as UserStateType;
  const dispatch = useDispatch();

  const saveUserInfo = (user: IUserInfo) => {
    localStorage.setItem("userInfo", JSON.stringify(user));
    localStorage.setItem("token", user.token);
    dispatch(setUserInfoAction({ username: user.username, id: user.id }));
  };

  const handleLoginOut = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    dispatch(logOutAction());
    message.success("退出成功");
    nav("/home");
  };

  return {
    id,
    username,
    saveUserInfo,
    handleLoginOut,
  };
}
