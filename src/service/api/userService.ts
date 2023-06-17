import { myRequest } from "..";
import { IResponseData } from "../../types/responseType";
import { ILoginPayload, IRegisterPayload, IUserInfo } from "../../types/userType";

// 用户注册
function userRegisterApi(payload: IRegisterPayload) {
  return myRequest.post<IResponseData>({
    url: "/user/register",
    data: payload,
  });
}

// 用户登录
function userLoginApi(payload: ILoginPayload) {
  return myRequest.post<IResponseData<IUserInfo>>({
    url: "/user/login",
    data: payload,
  });
}

export { userRegisterApi, userLoginApi };
