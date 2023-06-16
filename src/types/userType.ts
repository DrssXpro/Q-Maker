export interface IRegisterPayload {
  username: string;
  password: string;
}
export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IUserInfo {
  id: string;
  username: string;
  token: string;
  createdAt: string;
  updatedAt: string;
}
