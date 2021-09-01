/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PagesState {
  page: number;
}

export interface PagesStore {
  pages: PagesState;
}

const initialState: PagesState = {
  page: 1,
};

const PagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = PagesSlice.actions;

export default PagesSlice.reducer;
