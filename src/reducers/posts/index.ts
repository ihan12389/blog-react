import { PostsActionTypes, PostsTypes } from "../../actions/posts";

/* POST LIST STATE INTERFACE */
export interface PostsState_ {
  nickname: string;
  date: string;
  title: string;
  previewImg: string;
  _id: string;
}

export interface PostsState {
  posts: Array<PostsState_>;
  loading: false;
}

/* POSTS STORE INITIAL STATE */
const initialState: PostsState = {
  posts: [
    {
      _id: "",
      title: "",
      nickname: "",
      date: "",
      previewImg: "",
    },
  ],
  loading: false,
};

/* POSTS REDUCER */
const postsReducer = (state = initialState, action: PostsActionTypes) => {
  switch (action.type) {
    case PostsTypes.READ_REQUEST: // 포스트 리스트 읽기 요청
      return {
        ...state,
        loading: true,
      };
    case PostsTypes.READ_SUCCESS: // 포스트 리스트 읽기 성공
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case PostsTypes.READ_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case PostsTypes.SEARCH_REQUEST: // 포스트 리스트 검색 요청
      return {
        ...state,
        loading: true,
      };
    case PostsTypes.SEARCH_SUCCESS: // 포스트 리스트 검색 성공
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case PostsTypes.SEARCH_FAILURE: // 포스트 리스트 검색 실패
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
