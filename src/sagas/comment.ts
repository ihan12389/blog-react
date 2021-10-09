import { all, put, call, takeLatest } from "redux-saga/effects";
import { CommentTypes, ReadAction, WriteAction } from "../actions/comment";
import * as commentApi from "../apis/comment";

/* BIND POST SAGA FUNCTIONS */
export default function* commentSaga() {
  yield all([
    takeLatest(CommentTypes.READ_REQUEST, read$),
    takeLatest(CommentTypes.WRITE_REQUEST, write$),
  ]);
}

/* READ REQUEST TRIGGER SAGA FUNCTION */
function* read$(action: ReadAction) {
  try {
    // GET REQUEST DATA
    const postId = action.payload;
    // TRY API
    const { data } = yield call(commentApi.read, postId);
    console.log("comment read 결과 data입니다.", data);
    // GET RESPONSE DATA
    const comments = data[0].comments;

    // DISPATCH READ SUCCESS
    yield put({
      type: CommentTypes.READ_SUCCESS,
      payload: { comments: comments },
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    // DISPATCH READ FAILURE
    yield put({
      type: CommentTypes.READ_FAILURE,
      payload: null,
    });
  }
}

function* write$(action: WriteAction) {
  try {
    const writeData = {
      postId: action.payload.postId,
      comments: action.payload.comments,
    };
    console.log("saga writeData", writeData);
    const { data } = yield call(commentApi.write, writeData);
    console.log("saga의 data", data[0].comments);
    yield put({
      type: CommentTypes.WRITE_SUCCESS,
      payload: data[0].comments,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: CommentTypes.WRITE_FAILURE,
      payload: null,
    });
  }
}
