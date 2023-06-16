import FsRequest from "../utils/http";

const myRequest = new FsRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});
export { myRequest };
