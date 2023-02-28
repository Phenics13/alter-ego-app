export enum NEWS_ACTION_TYPES {
  SET_NEWS = "news/SET_NEWS",
  FETCH_NEWS_START = "news/FETCH_NEWS_START",
  FETCH_NEWS_SUCCESS = "news/FETCH_NEWS_SUCCESS",
  FETCH_NEWS_FAILURE = "news/FETCH_NEWS_FAILURE",
};

export type News = {
  userId: number;
  id: number;
  title: string;
  body: string;
};