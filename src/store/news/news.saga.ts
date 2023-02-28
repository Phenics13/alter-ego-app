import { all, call, put, takeLatest } from "typed-redux-saga";
import { fetchNewsFailure, fetchNewsSuccess } from "./news.action";
import { NEWS_ACTION_TYPES } from "./news.types";

export function* fetchNewsAsync() {
  try {
    const response = yield* call(
      fetch,
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    const data = yield* call([response, "json"]);
    yield* put(fetchNewsSuccess(data));
  } catch (error) {
    yield* put(fetchNewsFailure(error as Error));
  }
}

export function* onFetchNewsStart() {
  yield* takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_START, fetchNewsAsync);
}

export function* newsSaga() {
  yield* all([call(onFetchNewsStart)]);
}
