import { all, put, call, takeLatest } from "redux-saga/effects";
import { AuthTypes, LoginAction } from "../actions/auth";
import * as authApi from "../apis/auth";

// Auth Saga 묶기
export default function* authSaga() {
  yield all([takeLatest(AuthTypes.LOGIN_REQUEST, login$)]);
}

// 로그인 요청이 발생했을 때
function* login$(action: LoginAction) {
  try {
    const loginData = action.payload;
    console.log("실행?");
    const { data } = yield call(authApi.login, loginData);
    const uid = data[0]._id;
    const email = data[0].email;
    const nickname = data[0].nickname;

    // 로그인 성공 함수 실행
    yield put({
      type: AuthTypes.LOGIN_SUCCESS,
      payload: {
        email,
        nickname,
        uid,
      },
    });

    // 세션에 uid 등록
    yield window.sessionStorage.setItem("user", uid);
  } catch {
    // 로그인 실패 함수 실행
    yield put({
      type: AuthTypes.LOGIN_FAILURE,
      payload: "계정 또는 비밀번호를 다시 확인해주세요.",
    });
  }
}
