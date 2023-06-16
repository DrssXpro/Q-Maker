import { myRequest } from "..";
import { IResponseData } from "../../types/responseType";
import { ILoginPayload, IRegisterPayload } from "../../types/userType";

// 用户注册
function userRegister(payload: IRegisterPayload) {
  return myRequest.post<IResponseData>({
    url: "/user/register",
    data: payload,
  });
}

// 用户登录
function userLogin(payload: ILoginPayload) {
  return myRequest.post<IResponseData>({
    url: "/user/login",
    data: payload,
  });
}

export { userRegister, userLogin };
