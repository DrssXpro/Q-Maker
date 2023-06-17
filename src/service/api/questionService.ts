import { myRequest } from "..";
import { IQueryPayload, IQuestionInfo, IQuestionPayload } from "../../types/questionType";
import { IList, IResponseData } from "../../types/responseType";

// 创建问卷
function createQuestionApi(payload: IQuestionPayload) {
  return myRequest.post<IResponseData>({
    url: "/question/add",
    data: payload,
  });
}

// 获取问卷列表
function getQuestionListApi(payload: IQueryPayload) {
  return myRequest.get<IResponseData<IList<IQuestionInfo>>>({
    url: "/question",
    params: payload,
  });
}

export { createQuestionApi, getQuestionListApi };
