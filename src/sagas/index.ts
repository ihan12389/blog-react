import { all, fork } from "redux-saga/effects";
import authSaga from "./auth";

// Saga 함수들을 하나로 합칩니다.
export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
