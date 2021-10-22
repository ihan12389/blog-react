import { TopActionTypes, TopTypes } from "../../actions/top";

/* TOP LIST STATE INTERFACE */
export interface TopState_ {
  nickname: string;
  date: string;
  title: string;
  mainImg: string;
  _id: string;
}

export interface TopState {
  posts: Array<TopState_>;
  loading: false;
}

/* TOP STORE INITIAL STATE */
const initialState: TopState = {
  posts: [
    {
      _id: "",
      title: "",
      nickname: "",
      date: "",
      mainImg: "",
    },
  ],
  loading: false,
};

/* TOP REDUCER */
const topReducer = (state = initialState, action: TopActionTypes) => {
  switch (action.type) {
    case TopTypes.READ_REQUEST: // 포스트 리스트 읽기 요청
      return {
        ...state,
        loading: true,
      };
    case TopTypes.READ_SUCCESS: // 포스트 리스트 읽기 성공
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case TopTypes.READ_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default topReducer;
