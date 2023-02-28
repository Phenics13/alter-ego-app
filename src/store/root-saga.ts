import { all, call } from "typed-redux-saga";
import { newsSaga } from "./news/news.saga";

export function* rootSaga() {
  yield* all([call(newsSaga)]);
}
