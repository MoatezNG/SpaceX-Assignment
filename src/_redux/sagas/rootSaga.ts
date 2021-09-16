import { all, fork } from "redux-saga/effects";
import historySaga from "./historySaga";
export function* rootSaga() {
  yield all([fork(historySaga)]);
}
