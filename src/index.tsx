import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./style/global.css";
/* Saga Redux에 관련된 모듈들을 로드 */
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
/* Persist를 위한 모듈들을 로드 */
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// Make Persist Config
const persistConfig = {
  key: "root",
  storage,
};

// Saga Middleware 생성
const sagaMiddleware = createSagaMiddleware();

// Make enhancedReducer
const enhancedReducer = persistReducer(persistConfig, rootReducer);

// Store 생성 후 Reducer와 Middleware 적용
const store = createStore(
  enhancedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// Create Persistor
const persistor = persistStore(store);

// Middleware 실행
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
