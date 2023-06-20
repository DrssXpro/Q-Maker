import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PageInfoStateType = {
  title: string;
  desc: string;
  css: string;
  js: string;
  isPublish?: boolean;
};

// init state
const initState: PageInfoStateType = {
  title: "",
  desc: "",
  css: "",
  js: "",
};

const pageInfoSlice = createSlice({
  name: "pageInfo",
  initialState: initState,
  reducers: {
    // 重置 pageInfo 信息
    resetPageInfoAction: (_state: PageInfoStateType, action: PayloadAction<PageInfoStateType>) => {
      return action.payload;
    },

    // 修改 page Title
    changePageTitleAction: (state: PageInfoStateType, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { resetPageInfoAction, changePageTitleAction } = pageInfoSlice.actions;

export default pageInfoSlice.reducer;
