import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { News, NEWS_ACTION_TYPES } from "./news.types";

export type SetNews = ActionWithPayload<NEWS_ACTION_TYPES.SET_NEWS, News[]>;
export type FetchNewsStart = ActionWithPayload<
  NEWS_ACTION_TYPES.FETCH_NEWS_START,
  string
>;
export type FetchNewsSuccess = ActionWithPayload<
  NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS,
  { news: News[]; next: string | null }
>;
export type FetchNewsFailure = ActionWithPayload<
  NEWS_ACTION_TYPES.FETCH_NEWS_FAILURE,
  Error
>;

const deleteNews = (news: News[], newsItem: News) => {
  return news.filter((item) => item.id !== newsItem.id);
};

export const setNews = withMatcher(
  (news: News[]): SetNews => createAction(NEWS_ACTION_TYPES.SET_NEWS, news)
);

export const fetchNewsStart = withMatcher(
  (next: string): FetchNewsStart =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_START, next)
);
export const fetchNewsSuccess = withMatcher(
  (news: News[], next: string | null): FetchNewsSuccess =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS, { news, next })
);
export const fetchNewsFailure = withMatcher(
  (error: Error): FetchNewsFailure =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_FAILURE, error)
);

export const deleteNewsItem = (news: News[], newsItem: News) =>
  setNews(deleteNews(news, newsItem));
