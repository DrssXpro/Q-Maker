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
