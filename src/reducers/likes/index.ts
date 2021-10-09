import { LikesActionTypes, LikesTypes } from "../../actions/likes";

/* LIKES STATE INTERFACE */
export interface LikesState {
  uids: any;
  errMessage: String;
}

/* LIKES STORE INITIAL STATE */
const initialState: LikesState = {
  uids: [],
  errMessage: "",
};

/* LIKES REDUCER */
const likesReducer = (state = initialState, action: LikesActionTypes) => {
  switch (action.type) {
    // READ LIKES ON POST
    case LikesTypes.READ_REQUEST:
      return state;
    case LikesTypes.READ_FAILURE:
      return { ...state, errMessage: "좋아요를 읽어올 수 없습니다.", uids: [] };
    case LikesTypes.READ_SUCCESS:
      console.log(action.payload);
      return { ...state, uids: action.payload.uids };
    // ADD LIKES ON POST
    case LikesTypes.ADD_REQUEST:
      return state;
    case LikesTypes.ADD_FAILURE:
      return { ...state, errMessage: "또 좋아요를 누를 수 없습니다", uids: [] };
    case LikesTypes.ADD_SUCCESS:
      return { ...state, uids: action.payload };
    default:
      return state;
  }
};

export default likesReducer;
