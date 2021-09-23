import { all, fork } from "redux-saga/effects";
import authSaga from "./auth";
import postSaga from "./post";
import postsSaga from "./posts";

/* BIND SAGA FUNCTIONS */
export default function* rootSaga() {
  yield all([fork(authSaga), fork(postSaga), fork(postsSaga)]);
}
