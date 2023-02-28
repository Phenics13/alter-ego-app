import { combineReducers } from "redux";
import { newsReducer } from "./news/news.reducer";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
});
