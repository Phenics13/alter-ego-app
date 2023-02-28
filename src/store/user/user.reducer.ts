import { AnyAction } from "redux";
import { setCurrentUser } from "./user.action";
import { CurrentUser } from "./user.types";

export type UserState = {
  readonly currentUser: CurrentUser | null;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (setCurrentUser.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }
  return state;
};
