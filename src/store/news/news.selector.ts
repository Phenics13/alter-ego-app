import { createSelector } from "reselect";
import { RootState } from "../store";

const selectNewsReducer = (state: RootState) => state.news;

export const selectNews = createSelector(
  [selectNewsReducer],
  (newsSlice) => newsSlice.news,
);