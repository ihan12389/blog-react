import { combineReducers } from "redux";
import auth, { AuthState } from "../reducers/auth";
import post, { PostState } from "../reducers/post";
import posts, { PostsState } from "../reducers/posts";
import likes, { LikesState } from "../reducers/likes";

/* ROOT STATE INTERFACE */
export interface RootState {
  auth: AuthState;
  post: PostState;
  posts: PostsState;
  likes: LikesState;
}

/* CREATE ROOT STATE */
const rootReducer = combineReducers({
  auth,
  post,
  posts,
  likes,
});

export default rootReducer;
