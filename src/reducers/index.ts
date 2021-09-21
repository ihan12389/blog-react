import { combineReducers } from "redux";
import auth, { AuthState } from "../reducers/auth";
import post, { PostState } from "../reducers/post";

/* ROOT STATE INTERFACE */
export interface RootState {
  auth: AuthState;
  post: PostState;
}

/* CREATE ROOT STATE */
const rootReducer = combineReducers({
  auth,
  post,
});

export default rootReducer;
