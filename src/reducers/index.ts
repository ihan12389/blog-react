import { combineReducers } from "redux";
import auth, { AuthState } from "../reducers/auth";
import post, { PostState } from "../reducers/post";
import posts, { PostsState } from "../reducers/posts";

/* ROOT STATE INTERFACE */
export interface RootState {
  auth: AuthState;
  post: PostState;
  posts: PostsState;
}

/* CREATE ROOT STATE */
const rootReducer = combineReducers({
  auth,
  post,
  posts,
});

export default rootReducer;
