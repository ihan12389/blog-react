import { combineReducers } from "redux";
import auth, { AuthState } from "../reducers/auth";
import post, { PostState } from "../reducers/post";
import posts, { PostsState } from "../reducers/posts";
import likes, { LikesState } from "../reducers/likes";
import comment, { CommentState } from "../reducers/comment";
import top, { TopState } from "../reducers/top";

/* ROOT STATE INTERFACE */
export interface RootState {
  auth: AuthState;
  post: PostState;
  posts: PostsState;
  likes: LikesState;
  comment: CommentState;
  top: TopState;
}

/* CREATE ROOT STATE */
const rootReducer = combineReducers({
  auth,
  post,
  posts,
  likes,
  comment,
  top,
});

export default rootReducer;
