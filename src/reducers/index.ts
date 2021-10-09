import { combineReducers } from "redux";
import auth, { AuthState } from "../reducers/auth";
import post, { PostState } from "../reducers/post";
import posts, { PostsState } from "../reducers/posts";
import likes, { LikesState } from "../reducers/likes";
import comment, { CommentState } from "../reducers/comment";

/* ROOT STATE INTERFACE */
export interface RootState {
  auth: AuthState;
  post: PostState;
  posts: PostsState;
  likes: LikesState;
  comment: CommentState;
}

/* CREATE ROOT STATE */
const rootReducer = combineReducers({
  auth,
  post,
  posts,
  likes,
  comment,
});

export default rootReducer;
