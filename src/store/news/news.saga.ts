import { AnyAction } from "redux";
import { all, call, put, takeLatest } from "typed-redux-saga";
import { fetchNewsFailure, fetchNewsSuccess } from "./news.action";
import { NEWS_ACTION_TYPES } from "./news.types";

export function* fetchNewsAsync({
  payload: next,
}: AnyAction & { payload: string }) {
  try {
    const response = yield* call(fetch, next);
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    const data = yield* call([response, "json"]);
    const rawHeader = response.headers.get("Link");
    if (rawHeader) {
      const header = rawHeader.split(",").map((link) => {
        const [url, rel] = link.split(";");
        const urlMatch = url.match(/<(.*)>/);
        const relMatch = rel.match(/rel="(.*)"/);
        return {
          url: urlMatch![1],
          rel: relMatch![1],
        };
      });
      const nextObj = header.find((linkObj) => linkObj.rel === "next");
      yield* put(fetchNewsSuccess(data, nextObj ? nextObj.url : null));
    } else {
      yield* put(fetchNewsSuccess(data, null));
    }
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
