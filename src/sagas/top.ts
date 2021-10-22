import { all, put, call, takeLatest } from "redux-saga/effects";
import { TopTypes, ReadAction } from "../actions/top";
import * as postsApi from "../apis/posts";

/* BIND TOP SAGA FUNCTIONS */
export default function* topSaga() {
  yield all([takeLatest(TopTypes.READ_REQUEST, read$)]);
}

/* READ REQUEST TRIGGER SAGA FUNCTION */
function* read$(action: ReadAction) {
  try {
    // TRY API
    const { data } = yield call(postsApi.topRead);

    // DISPATCH READ SUCCESS
    yield put({
      type: TopTypes.READ_SUCCESS,
      payload: data,
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    yield put({
      type: TopTypes.READ_FAILURE,
      payload: null,
    });
  }
}
