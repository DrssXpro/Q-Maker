export interface IQuestionPayload {
  authorId: string;
  title: string;
  struct: string;
}

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
