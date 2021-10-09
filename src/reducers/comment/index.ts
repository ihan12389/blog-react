import { CommentActionTypes, CommentTypes } from "../../actions/comment";

/* LIKES STATE INTERFACE */
export interface CommentState {
  comments: Array<Object>;
  errMessage: String;
}

/* LIKES STORE INITIAL STATE */
const initialState: CommentState = {
  comments: [],
  errMessage: "",
};

/* LIKES REDUCER */
const commentReducer = (state = initialState, action: CommentActionTypes) => {
  switch (action.type) {
    // READ LIKES ON POST
    case CommentTypes.READ_REQUEST:
      return state;
    case CommentTypes.READ_FAILURE:
      return {
        ...state,
        errMessage: "좋아요를 읽어올 수 없습니다.",
        comments: [],
      };
    case CommentTypes.READ_SUCCESS:
      console.log(
        "comment redux에 들어온 action.payload.comments입니다.",
        action.payload.comments
      );
      return { ...state, comments: action.payload.comments };
    // WRITE LIKES ON POST
    case CommentTypes.WRITE_REQUEST:
      return state;
    case CommentTypes.WRITE_FAILURE:
      return {
        ...state,
        errMessage: "또 좋아요를 누를 수 없습니다",
        comments: [],
      };
    case CommentTypes.WRITE_SUCCESS:
      console.log("reducer의 comment", action.payload);
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
