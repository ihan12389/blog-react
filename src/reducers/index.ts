import { combineReducers } from "redux";
import auth, { AuthState } from "../reducers/auth";

export interface RootState {
  auth: AuthState;
}

// 루트 리듀서 생성
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
