import { all, put, call, takeLatest } from "redux-saga/effects";
import { AuthTypes, LoginAction } from "../actions/auth";
import * as authApi from "../apis/auth";

/* BIND AUTH SAGA FUNCTIONS */
export default function* authSaga() {
  yield all([takeLatest(AuthTypes.LOGIN_REQUEST, login$)]);
}

/* LOGIN REQUEST TRIGGER SAGA FUNCTION */
function* login$(action: LoginAction) {
  try {
    // GET REQUEST DATA
    const loginData = action.payload;
    // TRY API
    const { data } = yield call(authApi.login, loginData);
    // GET RESPONSE DATA
    const uid = data[0]._id;
    const email = data[0].email;
    const nickname = data[0].nickname;
    // DISPATCH LOGIN SUCCESS
    yield put({
      type: AuthTypes.LOGIN_SUCCESS,
      payload: {
        email,
        nickname,
        uid,
      },
    });
  } catch {
    // IF GET ERROR
    // DISPATCH LOGIN FAILURE
    yield put({
      type: AuthTypes.LOGIN_FAILURE,
      payload: "Please Check your Email & Password.",
    });
  }
}
