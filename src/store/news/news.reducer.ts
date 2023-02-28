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
};

const NEWS_INITIAL_STATE: NewsState = {
  news: [],
  isLoading: false,
  error: null,
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
      news: action.payload,
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
