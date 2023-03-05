export enum NEWS_ACTION_TYPES {
  SET_NEWS = "news/SET_NEWS",
  FETCH_INITIAL_NEWS = "news/FETCH_INITIAL_NEWS",
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

export type NewsMap = {
  [key: number]: News;
};

export const INITIAL_NEWS_NEXT = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10";