import { myRequest } from "..";
import { IQuestionPayload } from "../../types/questionType";

// 创建问卷
function createQuestionApi(payload: IQuestionPayload) {
  return myRequest.post({
    url: "/question/add",
    data: payload,
  });
}



export { createQuestionApi };
