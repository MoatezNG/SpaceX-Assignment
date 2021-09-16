import { all, fork } from "redux-saga/effects";
import historySaga from "./historySaga";
import launchSaga from "./launchSaga";
export function* rootSaga() {
  yield all([fork(historySaga), fork(launchSaga)]);
}
