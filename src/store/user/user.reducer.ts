import {
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signInFailed,
  signUpFailed,
} from "./user.action";
import { AnyAction } from "redux";
import { UserData } from "./../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: Boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// signInSuccess, signOutSuccess, signOutFailed, signInFailed, signUpFailed
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action))
    return { ...state, currentUser: action.payload };

  if (signOutSuccess.match(action)) return { ...state, currentUser: null };

  if (
    signOutFailed.match(action) ||
    signInFailed.match(action) ||
    signUpFailed.match(action)
  )
    return { ...state, error: action.payload };

  return state;
};
