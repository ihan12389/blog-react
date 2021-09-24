import { PostsActionTypes, PostsTypes } from "../../actions/posts";

/* POST LIST STATE INTERFACE */
export interface PostsState {
  nickname: string;
  date: string;
  title: string;
  previewImg: string;
  _id: string;
}

/* POSTS STORE INITIAL STATE */
const initialState: Array<PostsState> = [
  {
    _id: "",
    title: "",
    nickname: "",
    date: "",
    previewImg: "",
  },
];

/* POSTS REDUCER */
const postsReducer = (state = initialState, action: PostsActionTypes) => {
  switch (action.type) {
    case PostsTypes.READ_REQUEST: // 포스트 리스트 읽기 요청
      return state;
    case PostsTypes.READ_SUCCESS: // 포스트 리스트 읽기 성공
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
