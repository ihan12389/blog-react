import { all, put, call, takeLatest } from "redux-saga/effects";
import { LikesTypes, ReadAction, AddAction } from "../actions/likes";
import * as likesApi from "../apis/likes";

/* BIND POST SAGA FUNCTIONS */
export default function* likesSaga() {
  yield all([
    takeLatest(LikesTypes.READ_REQUEST, read$),
    takeLatest(LikesTypes.ADD_REQUEST, add$),
  ]);
}

/* READ REQUEST TRIGGER SAGA FUNCTION */
function* read$(action: ReadAction) {
  try {
    // GET REQUEST DATA
    const postId = action.payload;
    // TRY API
    const { data } = yield call(likesApi.read, postId);

    // GET RESPONSE DATA
    const uids = data[0].uids;

    // DISPATCH READ SUCCESS
    yield put({
      type: LikesTypes.READ_SUCCESS,
      payload: { uids: uids },
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    // DISPATCH READ FAILURE
    yield put({
      type: LikesTypes.READ_FAILURE,
      payload: null,
    });
  }
}

function* add$(action: AddAction) {
  try {
    const addData = {
      postId: action.payload.postId,
      uids: action.payload.uids,
    };
    const { data } = yield call(likesApi.add, addData);

    yield put({
      type: LikesTypes.ADD_SUCCESS,
      payload: data.uids,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LikesTypes.ADD_FAILURE,
      payload: null,
    });
  }
}
