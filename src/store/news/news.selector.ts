import { createSelector } from "reselect";
import { RootState } from "../store";
import { NewsMap } from "./news.types";

const selectNewsReducer = (state: RootState) => state.news;

export const selectNews = createSelector(
  [selectNewsReducer],
  (newsSlice) => newsSlice.news,
);

export const selectNewsMap = createSelector(
  [selectNews],
  (news): NewsMap => (
    news.reduce((acc, newsItem) => {
      acc[newsItem.id] = newsItem;
      return acc;
    }, {} as NewsMap)
  ),
);

export const selectIsNewsLoading = createSelector(
  [selectNewsReducer],
  (newsSlice) => newsSlice.isLoading,
);

export const selectNewsNext = createSelector(
  [selectNewsReducer],
  (newsSlice) => newsSlice.next,
);