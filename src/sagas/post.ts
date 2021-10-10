import { all, put, call, takeLatest } from "redux-saga/effects";
import {
  PostTypes,
  WriteAction,
  WriteSuccessAction,
  ReadAction,
  DeleteAction,
} from "../actions/post";
import { PostsTypes } from "../actions/posts";
import * as postApi from "../apis/post";

/* BIND POST SAGA FUNCTIONS */
export default function* postSaga() {
  yield all([
    takeLatest(PostTypes.WRITE_REQUEST, write$),
    takeLatest(PostTypes.READ_REQUEST, read$),
    takeLatest(PostTypes.WRITE_SUCCESS, success$),
    takeLatest(PostTypes.DELETE_REQUEST, delete$),
  ]);
}

/* WRITE REQUEST TRIGGER SAGA FUNCTION */
function* write$(action: WriteAction) {
  try {
    // GET REQUEST DATA
    const writeData = action.payload;
    // TRY API
    const { data } = yield call(postApi.write, writeData);
    // GET RESPONSE DATA
    const postId = data.result._id;
    // DISPATCH WRITE SUCCESS
    yield put({
      type: PostTypes.WRITE_SUCCESS,
      payload: { message: "성공했습니다.", postId: postId },
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    // DISPATCH WRITE FAILURE
    yield put({
      type: PostTypes.WRITE_FAILURE,
      payload: "데이터베이스 오류가 발생했습니다.",
    });
  }
}

/* WRITE SUCCRESS TRIGGER SAGA FUNCTION */
// eslint-disable-next-line require-yield
function* success$(action: WriteSuccessAction) {
  try {
    // GO TO PATH PAGE
    // eslint-disable-next-line no-restricted-globals
    location.href = `/lihano-board/path/${action.payload.postId}`;
  } catch (err) {
    console.log(err);
  }
}

/* READ REQUEST TRIGGER SAGA FUNCTION */
function* read$(action: ReadAction) {
  try {
    // GET REQUEST DATA
    const id = action.payload;
    // TRY API
    const { data } = yield call(postApi.read, id);
    // GET RESPONSE DATA
    const postId = data[0]._id;
    const title = data[0].title;
    const content = data[0].content;
    const uid = data[0].uid;
    const nickname = data[0].nickname;
    const date = data[0].date;
    const likes = data[0].likes;
    // DISPATCH READ SUCCESS
    yield put({
      type: PostTypes.READ_SUCCESS,
      payload: {
        postId,
        title,
        content,
        uid,
        nickname,
        date,
        likes,
      },
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    // DISPATCH READ FAILURE
    yield put({
      type: PostTypes.WRITE_FAILURE,
      payload: "데이터베이스 오류가 발생했습니다.",
    });
    // GO MAIN PAGE
    alert("게시물을 찾을 수가 없습니다.");
    // eslint-disable-next-line no-restricted-globals
    location.href = "/lihano-board/";
  }
}

/* DELETE REQUEST TRIGGER SAGA FUNCTION */
function* delete$(action: DeleteAction) {
  try {
    // GET REQUEST DATA
    const id = action.payload;
    // TRY API
    const { data } = yield call(postApi.postdelete, id);
    console.log(data);
    //IF SUCCESS
    yield put({
      type: PostTypes.DELETE_SUCCESS,
      payload: null,
    });
    // IF DELETE SUCCESSFULLY, RE LOAD POSTS LIST
    yield put({
      type: PostsTypes.READ_REQUEST,
      payload: null,
    });
  } catch (err) {
    // IF ERROR
    console.log(err);
    yield put({
      type: PostTypes.DELETE_FAILURE,
      payload: null,
    });
  }
}
