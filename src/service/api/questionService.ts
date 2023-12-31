import { myRequest } from "..";
import {
  IQueryPayload,
  IQuestionCreateInfo,
  IQuestionDetail,
  IQuestionInfo,
  IQuestionStat,
  IStarPayload,
  IStatChartStruct,
  IUpdatePayload,
} from "../../types/questionType";
import { IList, IResponseData } from "../../types/responseType";

// 创建问卷
function createQuestionApi(payload: { title: string }) {
  return myRequest.post<IResponseData<IQuestionCreateInfo>>({
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

// 获取问卷详情
function getQuestionDetailApi(id: string) {
  return myRequest.get<IResponseData<IQuestionDetail>>({
    url: `/question/detail/${id}`,
  });
}

// 标星 / 取消标星问卷
function starQuestionApi(payload: IStarPayload) {
  return myRequest.post<IResponseData>({
    url: "/question/star",
    data: payload,
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

// 更新问卷
function updateQuestionApi(id: string, payload: IUpdatePayload) {
  return myRequest.post<IResponseData>({
    url: `/question/update/${id}`,
    data: payload,
  });
}

// 获取问卷统计
function getQuestionStatApi(id: string, payload: { page: number; pageSize: number }) {
  return myRequest.get<IResponseData<IList<IQuestionStat>>>({
    url: `/question/stat/${id}`,
    data: payload,
  });
}

// 获取问卷单选框统计
function getQuestionStatRadioApi(payload: { id: string; radio: string }) {
  return myRequest.get<IResponseData<IStatChartStruct[]>>({
    url: `/stat/radio`,
    params: payload,
  });
}

// 获取问卷复选框统计
function getQuestionStatCheckboxApi(payload: { id: string; check: string }) {
  return myRequest.get<IResponseData<IStatChartStruct[]>>({
    url: `/stat/checkbox`,
    params: payload,
  });
}

export {
  createQuestionApi,
  getQuestionListApi,
  getStarQuestionListApi,
  getQuestionDetailApi,
  starQuestionApi,
  deleteQuestionAApi,
  deleteQuestionBApi,
  recoverQuestionApi,
  updateQuestionApi,
  getQuestionStatApi,
  getQuestionStatRadioApi,
  getQuestionStatCheckboxApi,
};
