import { PostActionTypes, PostTypes } from "../../actions/post";

/* POST STATE INTERFACE */
export interface PostState {
  postId: string;
  title: string;
  content: string;
  uid: string;
  nickname: string;
  date: string;
  likes: number;
  previewImg: string;
  errMsg: string;
}

/* POST STORE INITIAL STATE */
const initialState: PostState = {
  postId: "",
  title: "",
  content: "",
  uid: "",
  nickname: "",
  date: "",
  likes: 0,
  previewImg: "",
  errMsg: "",
};

/* POST REDUCER */
const postReducer = (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case PostTypes.WRITE_REQUEST: // 포스트 쓰기 요청
      return state;
    case PostTypes.WRITE_SUCCESS: // 포스트 쓰기 성공
      return {
        ...state,
        errMsg: action.payload,
      };
    case PostTypes.WRITE_FAILURE: // 포스트 쓰기 실패
      return {
        ...state,
        errMsg: action.payload,
      };
    case PostTypes.READ_REQUEST: // 포스트 읽기 요청
      return state;
    case PostTypes.READ_SUCCESS: // 포스트 읽기 성공
      return {
        ...state,
        postId: action.payload.postId,
        title: action.payload.title,
        content: action.payload.content,
        uid: action.payload.uid,
        nickname: action.payload.nickname,
        date: action.payload.date,
        likes: action.payload.likes,
        errMsg: "",
      };
    case PostTypes.READ_FAILURE: // 포스트 읽기 실패
      return {
        ...state,
        postId: "",
        title: "",
        content: "",
        uid: "",
        nickname: "",
        date: "",
        likes: 0,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
