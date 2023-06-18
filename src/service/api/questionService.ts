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

// 获取星标问卷列表
function getStarQuestionListApi(payload: IQueryPayload) {
  return myRequest.get<IResponseData<IList<IQuestionInfo>>>({
    url: "/question/star",
    params: payload,
  });
}

// 逻辑删除问卷
function deleteQuestionAApi(id: string) {
  return myRequest.post<IResponseData>({
    url: `/question/remove/${id}`,
  });
}

// 物理删除问卷
function deleteQuestionBApi(ids: string[]) {
  return myRequest.post<IResponseData>({
    url: "/question/delete",
    data: { ids },
  });
}

// 恢复问卷
function recoverQuestionApi(ids: string[]) {
  return myRequest.post<IResponseData>({
    url: "/question/recover",
    data: { ids },
  });
}

export {
  createQuestionApi,
  getQuestionListApi,
  getStarQuestionListApi,
  deleteQuestionAApi,
  deleteQuestionBApi,
  recoverQuestionApi,
};
