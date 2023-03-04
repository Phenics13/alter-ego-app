import { AnyAction } from "redux";
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsFailure,
  setNews,
} from "./news.action";
import { News } from "./news.types";

export type NewsState = {
  readonly news: News[];
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly next: string | null;
};

const NEWS_INITIAL_STATE: NewsState = {
  news: [],
  isLoading: false,
  error: null,
  next: "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10",
};

export const newsReducer = (
  state = NEWS_INITIAL_STATE,
  action: AnyAction
): NewsState => {
  if (setNews.match(action)) {
    return {
      ...state,
      news: action.payload,
    };
  }

  if (fetchNewsStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (fetchNewsSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      news: [...state.news, ...action.payload.news],
      next: action.payload.next,
    };
  }
  if (fetchNewsFailure.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};
