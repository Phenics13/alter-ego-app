import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CurrentUser, USER_ACTION_TYPES } from "./user.types";

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  CurrentUser | null
>;

export const setCurrentUser = withMatcher(
  (currentUser: CurrentUser | null): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, currentUser)
);
