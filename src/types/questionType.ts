import { ComponentInfoType } from "../stores/modules/componentReducer";

export interface IQueryPayload {
  page: number;
  pageSize: number;
  kw?: string;
  ispublish?: 0 | 1;
  isdelete?: 0 | 1;
}

export interface IStarPayload {
  targetId: string;
  iscollect: 0 | 1;
}

export interface IUpdatePayload {
  title: string;
  desc: string;
  js: string;
  css: string;
  ispublish: 0 | 1;
  questionStruct: ComponentInfoType[];
}

export interface IQuestionInfo {
  id: string;
  title: string;
  peopleCount: number;
  isdelete: 0 | 1;
  ispublish: 0 | 1;
  isstar: 0 | 1;
  createdAt: string;
  updatedAt: string;
  user: {
    authorId: string;
    authorName: string;
  };
}

export interface IQuestionDetail {
  id: string;
  title: string;
  desc: string;
  js: string;
  css: string;
  isdelete: 0 | 1;
  ispublish: 0 | 1;
  createdAt: string;
  updatedAt: string;
  struct: ComponentInfoType[];
}

export interface IQuestionCreateInfo {
  id: string;
  authorId: string;
  title: string;
  isdelete: 0 | 1;
  ispublish: 0 | 1;
  craetedAt: string;
  updatedAt: string;
}

export interface IQuestionStat {
  [key: string]: {
    type: string;
    value: string | number | string[];
  };
}

// 定义问卷返回类型，key 存放每个组件的id, value 为用户填写内容
/**
 * 
 * template:
    {
      id: "1",
      GQBncIhknFixcdGH5Jl6c: {
        type: "questionInfo",
        value: "",
      },
      ckg00fAjlhICQkfDK2uxz: {
        type: "questionParagraph",
        value: "",
      },
      x2dnDfwRK6XTDbcF8uhvx: {
        type: "questionParagraph",
        value: "",
      },
      Km03uY0uqUEIb3CqajrQX: {
        type: "questionRate",
        value: 4,
      },
      KmeCPDssBONoC5c6TCSfv: {
        type: "questionRadio",
        value: "选项1",
      },
      "9X4vODEtk7VvGiSq27v45": {
        type: "questionTextarea",
        value: "test1",
      },
    },
 */
