import { myRequest } from "..";
import { IQuestionPayload } from "../../types/questionType";

// 创建问卷
function createQuestion(payload: IQuestionPayload) {
  return myRequest.post({
    url: "/question/add",
    data: payload,
  });
}

export { createQuestion };
